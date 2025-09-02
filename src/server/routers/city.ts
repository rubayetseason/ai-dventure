import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import prisma from "../../../lib/prisma";
import cityValidator from "@/app/api/cities/validator";
import calculatePagination from "@/utils/pagination";
import pick from "@/utils/pick";
import { Prisma } from "@/app/generated/prisma";

export const cityRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const city = await prisma.city.findUnique({
        where: { id: input.id },
      });

      if (!city) {
        throw new Error("City not found");
      }

      return city;
    }),

  // GET /cities
  getPaginated: publicProcedure
    .input(
      z
        .object({
          search: z.string().optional(),
          sort_by: z.string().optional(),
          sort_order: z.enum(["asc", "desc"]).optional(),
          limit: z.coerce.number().optional(),
          page: z.coerce.number().optional(),
        })
        .optional(),
    )
    .query(async ({ input }) => {
      const filters = pick(input ?? {}, ["search"]);
      const options = pick(input ?? {}, [
        "sort_by",
        "sort_order",
        "limit",
        "page",
      ]);

      const { search, ...restFilters } = filters;

      const {
        limit: take,
        skip,
        page,
        sortBy,
        sortOrder,
      } = calculatePagination(options);

      const conditions: Prisma.CityWhereInput[] = [];

      if (search) {
        conditions.push({
          OR: ["name"].map((field) => ({
            [field]: { contains: search, mode: "insensitive" },
          })),
        });
      }
      if (Object.keys(restFilters).length > 0) {
        conditions.push({
          AND: Object.keys(restFilters).map((key) => ({
            [key]: { equals: restFilters[key as keyof typeof restFilters] },
          })),
        });
      }

      const whereConditions = conditions.length ? { AND: conditions } : {};

      const [cities, total] = await Promise.all([
        prisma.city.findMany({
          where: whereConditions,
          orderBy: [{ [sortBy]: sortOrder }, { id: "desc" }],
          skip,
          take,
          include: {
            up: { include: { to: true } },
            down: { include: { from: true } },
          },
        }),
        prisma.city.count({ where: whereConditions }),
      ]);

      return {
        meta: { total, page, limit: take },
        data: cities,
      };
    }),

  create: publicProcedure
    .input(cityValidator.createCitySchema)
    .mutation(async ({ input }) => {
      const { transports, ...data } = input;

      const response = await prisma.$transaction(async (tx) => {
        const newCity = await tx.city.create({ data });
        if (transports.length) {
          await tx.cityTransport.createMany({
            data: transports.map((transport) => ({
              ...transport,
              fromId: newCity.id,
            })),
          });
        }
        return newCity;
      });

      return {
        success: true,
        message: "City created successfully",
        data: response,
      };
    }),

  update: publicProcedure
    .input(z.object({ id: z.string() }).merge(cityValidator.updateCitySchema))
    .mutation(async ({ input }) => {
      const { id, transports, ...data } = input;

      const updated = await prisma.$transaction(async (tx) => {
        const updatedCity = await tx.city.update({
          where: { id },
          data,
        });

        if (transports?.length) {
          await tx.cityTransport.deleteMany({ where: { fromId: id } });
          await tx.cityTransport.createMany({
            data: transports.map((transport) => ({
              ...transport,
              fromId: id,
            })),
          });
        }

        return updatedCity;
      });

      return {
        message: "City updated",
        data: updated,
      };
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const deleted = await prisma.city.delete({
        where: { id: input.id },
      });

      return {
        message: "City deleted successfully",
        data: deleted,
      };
    }),
});
