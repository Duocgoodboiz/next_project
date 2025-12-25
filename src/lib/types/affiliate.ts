export type TabType = "dashboard" | "referral-links" | "marketing" | "payments";
export type LinkStatus = "Active" | "Pending" | "Paused" | "Rejected";
export type PaymentStatus = "Paid" | "Pending";
export type MarketingAction = "copy" | "download";
export type MarketingLinkType = "text" | "email";
export type BannerType = "banner";
export type StatIconType = "dollar" | "chart" | "users" | "target";
export type SocialIconType =
  | "instagram"
  | "facebook"
  | "twitter"
  | "direct"
  | "other";

export interface AffiliateStat {
  label: string;
  value: string;
  trendValue?: string;
  icon: StatIconType;
}

export interface ReferralLink {
  id: string;
  title: string;
  url: string;
  clicks: number;
  conversions: number;
  earnings: string;
}

export interface PaymentOverview {
  pending: string;
  available: string;
}

export interface PerformanceItem {
  id: string;
  title: string;
  clicks: string;
  conversions: string;
  earnings: string;
}

export interface MarketingBanner {
  id: string;
  size: string;
  colorClass: string;
  type: BannerType;
}

export interface MarketingTextLink {
  id: string;
  title: string;
  description: string;
  action: MarketingAction;
  type: MarketingLinkType;
}

export interface PaymentHistoryItem {
  id: string;
  date: string;
  method: string;
  amount: string;
  status: PaymentStatus;
}
export interface ReferralLinkDetail {
  id: string;
  name: string;
  url: string;
  clicks: number;
  conversions: number;
  earnings: string;
  status: LinkStatus;
  createdAt: string;
  category?: string;
}

export interface LinkStats {
  clicks: number;
  conversions: number;
  earnings: string;
}

export interface TrafficSource {
  source: string;
  clicks: number;
  conversions: number;
  icon: SocialIconType;
}

export interface ChartDataPoint {
  date: string;
  clicks: number;
  conversions: number;
  earnings: string;
}

export interface LinkDetailFull extends ReferralLinkDetail {
  description: string;
  approvedDate: string;
  approvedBy: string;
  commissionRate: string;
  lastClick: string;
  originalUrl: string;
  chartData: ChartDataPoint[];
  trafficSources: TrafficSource[];
}

export interface DashboardData {
  stats: AffiliateStat[];
  referralLinks: ReferralLink[];
  payment: PaymentOverview;
  recentPerformance: PerformanceItem[];
  marketingAssets: {
    banners: MarketingBanner[];
    links: MarketingTextLink[];
  };
  paymentHistory: PaymentHistoryItem[];
}
export interface DailyPerformance {
  date: string;
  clickPercentage: number;
  conversionPercentage: number;
  clicks: number;
  conversions: number;
  earnings: string;
}

export interface LinkDetailData {
  category: string;
  commissionRate: string;
  createdAt: string;
  lastClick: string;
  originalUrl: string;
}

// 2. Dùng cho PerformanceChart
export interface DailyPerformance {
  date: string;
  clickPercentage: number;
  conversionPercentage: number;
  clicks: number;
  conversions: number;
  earnings: string;
}

export interface TrafficSource {
  source: string;
  clicks: number;
  conversions: number;
}
