import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import cityValidator from "../validator";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const city = await prisma.city.findUnique({
      where: { id: params.id },
    });

    if (!city)
      return NextResponse.json({ message: "City not found" }, { status: 404 });

    return NextResponse.json(city);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message:
          (error as Record<string, unknown>).message ??
          "An error occurred while creating the city",
      },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const body = await req.json();
    const { transports, ...data } =
      await cityValidator.updateCitySchema.parseAsync(body);

    const updated = await prisma.$transaction(async (tx) => {
      const updatedCity = await tx.city.update({
        where: { id: params.id },
        data,
      });

      if (transports?.length) {
        await tx.cityTransport.deleteMany({ where: { fromId: params.id } });
        await tx.cityTransport.createMany({
          data: transports.map((transport) => ({
            ...transport,
            fromId: params.id,
          })),
        });
      }

      return updatedCity;
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message:
          (error as Record<string, unknown>).message ??
          "An error occurred while creating the city",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const deleted = await prisma.city.delete({
      where: { id: params.id },
    });
    return NextResponse.json(deleted);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message:
          (error as Record<string, unknown>).message ??
          "An error occurred while creating the city",
      },
      { status: 500 },
    );
  }
}
