import { NextResponse } from "next/server";
import { MOCK_TICKETS } from "@/lib/data/mock/tickets/tickets-data";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(MOCK_TICKETS);
}
