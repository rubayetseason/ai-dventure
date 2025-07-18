import {
  RoomCategory,
  TransportMedium,
  TripType,
} from "@/app/generated/prisma";
import z from "zod";

const createHotelSchema = z.strictObject({
  name: z.string(),
  imageUrl: z.string().url(),
  description: z.string(),
  rooms: z
    .array(
      z.strictObject({
        name: z.nativeEnum(RoomCategory),
        description: z.string(),
        capacity: z.number().int().min(1),
        price: z.number().min(0),
        images: z.array(z.string().url()),
      }),
    )
    .min(1),
  tags: z.array(z.string()),
  rating: z.number().min(0).max(5),
  amenities: z.array(z.string()),
  recommendedFor: z.array(z.nativeEnum(TripType)),
  cityId: z.string(),

  locations: z.array(
    z.strictObject({
      distanceInMeters: z.number().min(0),
      commuteTimes: z
        .array(
          z.strictObject({
            medium: z.nativeEnum(TransportMedium),
            estimatedTimeInMinutes: z.number().int().min(1),
            description: z.string(),
          }),
        )
        .min(1),
      locationId: z.string(),
    }),
  ),
});

const updateHotelSchema = z.strictObject({
  name: z.string().optional(),
  imageUrl: z.string().url().optional(),
  description: z.string().optional(),
  rooms: z
    .array(
      z.strictObject({
        name: z.nativeEnum(RoomCategory),
        description: z.string(),
        capacity: z.number().int().min(1),
        price: z.number().min(0),
        images: z.array(z.string().url()),
      }),
    )
    .min(1)
    .optional(),
  tags: z.array(z.string()).optional(),
  rating: z.number().min(0).max(5).optional(),
  amenities: z.array(z.string()).optional(),
  recommendedFor: z.array(z.nativeEnum(TripType)).optional(),
  cityId: z.string().optional(),

  locations: z
    .array(
      z.strictObject({
        distanceInMeters: z.number().min(0),
        commuteTimes: z
          .array(
            z.strictObject({
              medium: z.nativeEnum(TransportMedium),
              estimatedTimeInMinutes: z.number().int().min(1),
              description: z.string(),
            }),
          )
          .min(1),
        locationId: z.string(),
      }),
    )
    .optional(),
});

const hotelValidator = {
  createHotelSchema,
  updateHotelSchema,
};
export default hotelValidator;
