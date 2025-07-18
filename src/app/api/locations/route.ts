import { NextRequest, NextResponse } from "next/server";
import calculatePagination from "@/utils/pagination";
import locationValidator from "./validator";
import prisma from "../../../../lib/prisma";
import pick from "@/utils/pick";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = Object.fromEntries(searchParams.entries());

    const filters = pick(query, ["search"]);
    const options = pick(query, ["sort_by", "sort_order", "limit", "page"]);

    const { search, ...restFilters } = filters;

    const {
      limit: take,
      skip,
      page,
      sortBy,
      sortOrder,
    } = calculatePagination(options);

    const conditions = [];

    if (search) {
      conditions.push({
        OR: ["name"].map((field) => ({
          [field]: {
            contains: search,
            mode: "insensitive",
          },
        })),
      });
    }
    if (Object.keys(restFilters).length > 0) {
      conditions.push({
        AND: Object.keys(restFilters).map((key) => ({
          [key]: {
            equals: restFilters[key],
          },
        })),
      });
    }

    const whereConditions = conditions.length ? { AND: conditions } : {};

    const [cities, total] = await Promise.all([
      prisma.location.findMany({
        where: whereConditions,
        orderBy: [{ [sortBy]: sortOrder }, { id: "desc" }],
        skip,
        take,
      }),
      prisma.location.count({ where: whereConditions }),
    ]);

    return NextResponse.json({
      meta: { total, page, limit: take },
      data: cities,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message:
          (error as Record<string, unknown>).message ??
          "An error occurred while creating the location",
      },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await locationValidator.createLocationSchema.parseAsync(body);

    const response = await prisma.location.create({ data });

    return NextResponse.json(
      {
        success: true,
        message: "Location created successfully",
        data: response,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message:
          (error as Record<string, unknown>).message ??
          "An error occurred while creating the location",
      },
      { status: 500 },
    );
  }
}
