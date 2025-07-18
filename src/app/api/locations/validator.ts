import {
  FoodOption,
  RecommendedTime,
  TransportMedium,
  TripType,
  WeekDays,
} from "@/app/generated/prisma";
import z from "zod";

const createLocationSchema = z.strictObject({
  name: z.string(),
  images: z.array(z.string().url()),
  type: z.array(z.nativeEnum(TripType)),
  tags: z.array(z.string()),
  description: z.string(),
  openDays: z.array(z.nativeEnum(WeekDays)),
  openHours: z.strictObject({
    start: z.string(),
    end: z.string(),
  }),
  activeVisit: z.boolean(),
  recommendedTime: z.nativeEnum(RecommendedTime),
  recommendedVisitDurationInMinutes: z.number().int().min(1),
  foodOptions: z.array(z.nativeEnum(FoodOption)),
  availableActivities: z
    .array(
      z.strictObject({
        name: z.string(),
        description: z.string(),
      }),
    )
    .min(1),
  caveats: z.array(
    z.strictObject({
      name: z.string(),
      description: z.string(),
    }),
  ),
  recommendedVisitMonths: z.array(z.number().int().min(1).max(12)),
  costPerPerson: z.array(
    z.strictObject({
      tier: z.string(),
      cost: z.number().min(0),
    }),
  ),
  cityId: z.string(),
});

const updateLocationSchema = z.strictObject({
  name: z.string().optional(),
  images: z.array(z.string().url()).optional(),
  type: z.array(z.nativeEnum(TripType)).optional(),
  tags: z.array(z.string()).optional(),
  description: z.string().optional(),
  openDays: z.array(z.nativeEnum(WeekDays)).optional(),
  openHours: z
    .strictObject({
      start: z.string(),
      end: z.string(),
    })
    .optional(),
  activeVisit: z.boolean().optional(),
  recommendedTime: z.nativeEnum(RecommendedTime).optional(),
  recommendedVisitDurationInMinutes: z.number().int().min(1).optional(),
  foodOptions: z.array(z.nativeEnum(FoodOption)).optional(),
  availableActivities: z
    .array(
      z.strictObject({
        name: z.string(),
        description: z.string(),
      }),
    )
    .min(1)
    .optional(),
  caveats: z
    .array(
      z.strictObject({
        name: z.string(),
        description: z.string(),
      }),
    )
    .optional(),
  recommendedVisitMonths: z.array(z.number().int().min(1).max(12)).optional(),
  costPerPerson: z
    .array(
      z.strictObject({
        tier: z.string(),
        cost: z.number().min(0),
      }),
    )
    .optional(),
  cityId: z.string().optional(),
});

const locationValidator = {
  createLocationSchema,
  updateLocationSchema,
};
export default locationValidator;
