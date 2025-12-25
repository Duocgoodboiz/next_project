// src/app/api/addresses/route.ts
import { NextResponse } from "next/server";
import { getAddresses } from "@/lib/data/mock/addresses/addresses-data";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const data = getAddresses();
  return NextResponse.json(data);
}
