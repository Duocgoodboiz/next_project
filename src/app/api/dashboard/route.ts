// src/app/api/dashboard/route.ts
import { NextResponse } from "next/server";
import { MOCK_DASHBOARD_DATA } from "@/lib/data/mock/dashboard/dashboard-data";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(MOCK_DASHBOARD_DATA);
}
