import { NextResponse } from "next/server";
import { MOCK_WISHLIST } from "@/lib/data/mock/wishlist/wishlist-data";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(MOCK_WISHLIST);
}
