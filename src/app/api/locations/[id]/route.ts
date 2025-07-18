import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import locationValidator from "../validator";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const location = await prisma.location.findUnique({
      where: { id: params.id },
    });

    if (!location)
      return NextResponse.json(
        { message: "Location not found" },
        { status: 404 },
      );

    return NextResponse.json({ message: "Location found", data: location });
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

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const body = await req.json();
    const data = await locationValidator.updateLocationSchema.parseAsync(body);

    const updated = await prisma.location.update({
      where: { id: params.id },
      data,
    });

    return NextResponse.json({
      message: "Location updated successfully",
      data: updated,
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

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const deleted = await prisma.location.delete({
      where: { id: params.id },
    });
    return NextResponse.json({
      message: "Location deleted successfully",
      data: deleted,
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
