import { TransportMedium } from "@/app/generated/prisma";
import z from "zod";

const createCitySchema = z.strictObject({
  name: z.string(),
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

const cityValidator = {
  createCitySchema,
};
export default cityValidator;
