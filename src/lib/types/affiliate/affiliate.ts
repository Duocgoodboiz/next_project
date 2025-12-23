import { LucideIcon } from "lucide-react";

// 1. Thẻ thống kê nhỏ trên cùng
export interface AffiliateStat {
  label: string;
  value: string;
  trend?: string;
  icon: LucideIcon;
  color: string;
}

// 2. Dữ liệu hiệu suất chiến dịch (Recent Performance)
export interface CampaignPerformance {
  id: number;
  name: string;
  clicks: number;
  conversions: number;
  earned: string;
}

// 3. Dữ liệu số dư (Balance)
export interface AffiliateBalance {
  pending: string;
  available: string;
}
//referral link
export interface ReferralLinkItem {
  id: number;
  name: string;
  url: string;
  clicks: number;
  conversions: number;
  earned: string;
}
export type LinkStatus = "Active" | "Pending" | "Paused" | "Rejected";

export interface DetailedReferralLink {
  id: number;
  linkId: string; // VD: AFL-001
  name: string;
  status: LinkStatus;
  category: string; // VD: General, Seasonal
  url: string;
  clicks: number;
  conversions: number;
  earned: string;
  createdAt: string; // VD: Jan 1, 2024
}

export interface LinksPageStats {
  totalClicks: number;
  totalConversions: number;
  totalEarnings: string;
}
