import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const userHeader = req.headers.get("x-user");
  if (!userHeader) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const currentUser = JSON.parse(userHeader);

  try {
    await prisma.user.delete({
      where: {
        id: currentUser.id,
      },
    });
    return NextResponse.json({ message: "User deleted successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}