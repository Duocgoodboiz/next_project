import { useState, useEffect } from "react";
import { affiliateApi } from "@/lib/api-client/affiliate-api";
import {
  AffiliateStat,
  ReferralLinkDetail,
  PaymentOverview,
  PerformanceItem,
} from "@/lib/types/affiliate";

export const useAffiliate = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [generalStats, setGeneralStats] = useState<AffiliateStat[]>([]);
  const [links, setLinks] = useState<ReferralLinkDetail[]>([]);
  const [payment, setPayment] = useState<PaymentOverview | null>(null);
  const [performance, setPerformance] = useState<PerformanceItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const data = await affiliateApi.getDashboardData();

        setGeneralStats(data.stats);
        setLinks(data.links);
        setPayment(data.payment);
        setPerformance(data.performance);
      } catch (err) {
        console.error("Error fetching affiliate data:", err);
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    loading,
    error,
    generalStats,
    links,
    payment,
    performance,
  };
};
