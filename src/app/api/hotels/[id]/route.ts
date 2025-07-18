import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import hotelValidator from "../validator";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const hotel = await prisma.hotel.findUnique({
      where: { id: params.id },
    });

    if (!hotel)
      return NextResponse.json({ message: "Hotel not found" }, { status: 404 });

    return NextResponse.json({ message: "Hotel found", data: hotel });
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message:
          (error as Record<string, unknown>).message ??
          "An error occurred while creating the hotel",
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
    const { locations, ...data } =
      await hotelValidator.updateHotelSchema.parseAsync(body);

    const updated = await prisma.$transaction(async (tx) => {
      const updatedHotel = await tx.hotel.update({
        where: { id: params.id },
        data,
      });

      if (locations?.length) {
        await tx.hotelsToLocations.deleteMany({
          where: { hotelId: params.id },
        });
        await tx.hotelsToLocations.createMany({
          data: locations.map((transport) => ({
            ...transport,
            hotelId: updatedHotel.id,
          })),
        });
      }

      return updatedHotel;
    });
    return NextResponse.json({
      message: "Hotel updated successfully",
      data: updated,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message:
          (error as Record<string, unknown>).message ??
          "An error occurred while creating the hotel",
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
    const deleted = await prisma.hotel.delete({
      where: { id: params.id },
    });
    return NextResponse.json({
      message: "Hotel deleted successfully",
      data: deleted,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message:
          (error as Record<string, unknown>).message ??
          "An error occurred while creating the hotel",
      },
      { status: 500 },
    );
  }
}
