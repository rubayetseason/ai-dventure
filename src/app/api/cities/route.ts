import { NextRequest, NextResponse } from "next/server";
import cityValidator from "./validator";
import prisma from "../../../../lib/prisma";

export async function GET() {
  const cities = await prisma.city.findMany({});
  return NextResponse.json(cities, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { transports, ...data } =
      await cityValidator.createCitySchema.parseAsync(body);

    const response = await prisma.$transaction(async (tx) => {
      const newCity = await tx.city.create({ data });
      if (transports.length)
        await tx.cityTransport.createMany({
          data: transports.map((transport) => ({
            ...transport,
            fromId: newCity.id,
          })),
        });
      return newCity;
    });

    return NextResponse.json(
      { success: true, message: "City created successfully", data: response },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error creating city:", error);
    return NextResponse.json({ error }, { status: 400 });
  }
}
