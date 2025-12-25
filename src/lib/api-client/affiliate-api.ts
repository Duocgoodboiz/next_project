import {
  AffiliateStat,
  ReferralLinkDetail,
  PaymentOverview,
  PerformanceItem,
} from "@/lib/types/affiliate";

interface AffiliateDashboardResponse {
  success: boolean;
  data: {
    stats: AffiliateStat[];
    links: ReferralLinkDetail[];
    payment: PaymentOverview;
    performance: PerformanceItem[];
  };
}

export const affiliateApi = {
  getDashboardData: async (): Promise<AffiliateDashboardResponse["data"]> => {
    const res = await fetch("/api/affiliate/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch affiliate data");
    }

    const json: AffiliateDashboardResponse = await res.json();
    return json.data;
  },
};
