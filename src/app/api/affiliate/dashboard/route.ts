import { NextResponse } from "next/server";

import {
  affiliateStatsData,
  referralLinksData,
  paymentData,
  recentPerformanceData,
} from "@/lib/data/mock/affiliate/affiliate";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({
    success: true,
    data: {
      stats: affiliateStatsData,
      links: referralLinksData,
      payment: paymentData,
      performance: recentPerformanceData,
    },
  });
}
