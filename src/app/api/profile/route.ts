import { NextResponse } from "next/server";
import { MOCK_USER_PROFILE } from "@/lib/data/mock/profile/user";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(MOCK_USER_PROFILE);
}

export async function PUT(request: Request) {
  const body = await request.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(body);
}
