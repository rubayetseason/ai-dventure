import { TransportMedium } from "@/app/generated/prisma";
import z from "zod";

const createCitySchema = z.strictObject({
  name: z.string(),
  imageUrl: z.string().url(),
  transports: z.array(
    z.strictObject({
      medium: z.nativeEnum(TransportMedium),
      toId: z.string(),
      estimatedTimeInMinutes: z.number().int().min(1),
      price: z.number().min(0),
      departureTimes: z.array(z.string()),
    }),
  ),
});

const updateCitySchema = z.strictObject({
  name: z.string().optional(),
  imageUrl: z.string().url().optional(),
  transports: z
    .array(
      z.strictObject({
        medium: z.nativeEnum(TransportMedium),
        toId: z.string(),
        estimatedTimeInMinutes: z.number().int().min(1),
        price: z.number().min(0),
        departureTimes: z.array(z.string()),
      }),
    )
    .optional(),
});

const cityValidator = {
  createCitySchema,
  updateCitySchema,
};
export default cityValidator;
