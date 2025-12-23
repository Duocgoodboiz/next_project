export interface DailyPerformance {
  date: string;
  clicks: number;
  conversions: number;
  earnings: string;
  clickPercentage: number;
  conversionPercentage: number;
}

export interface TrafficSource {
  source: string;
  clicks: number;
  conversions: number;
}

export interface LinkDetailData {
  id: number;
  linkId: string;
  name: string;
  description: string;
  url: string;
  originalUrl: string;
  status: "Active" | "Pending" | "Paused" | "Rejected";
  category: string;
  approvalInfo: {
    approvedBy: string;
    date: string;
  };
  stats: {
    totalClicks: number;
    conversions: number;
    earnings: string;
    conversionRate: string;
  };
  commissionRate: string;
  createdAt: string;
  lastClick: string;
  performanceHistory: DailyPerformance[];
  trafficSources: TrafficSource[];
}
