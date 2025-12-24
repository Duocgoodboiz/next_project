// src/app/api/orders/route.ts
import { NextResponse } from "next/server";
import { MOCK_ORDERS } from "@/lib/data/mock/orders/orders-data";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(MOCK_ORDERS);
}
