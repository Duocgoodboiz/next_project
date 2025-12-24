import {
  AffiliateStat,
  CampaignPerformance,
  AffiliateBalance,
  ReferralLinkItem,
  DetailedReferralLink,
  LinksPageStats,
} from "@/lib/types";
import { DollarSign, TrendingUp, Users, Target } from "lucide-react";

// 1. Stats Data
export const AFFILIATE_STATS: AffiliateStat[] = [
  {
    label: "Total Earnings",
    value: "$2459.50",
    icon: DollarSign,
    color: "text-emerald-600",
  },
  {
    label: "This Month",
    value: "$485.30",
    trend: "up",
    icon: TrendingUp,
    color: "text-emerald-600",
  },
  {
    label: "Total Referrals",
    value: "127",
    icon: Users,
    color: "text-blue-600",
  },
  {
    label: "Conversion Rate",
    value: "12.5%",
    icon: Target,
    color: "text-purple-600",
  },
];

// 2. Balance Data
export const AFFILIATE_BALANCE: AffiliateBalance = {
  pending: "$156.80",
  available: "$328.70",
};

// 3. Performance Data
export const RECENT_PERFORMANCE: CampaignPerformance[] = [
  {
    id: 1,
    name: "General Referral Link",
    clicks: 245,
    conversions: 32,
    earned: "$185.50",
  },
  {
    id: 2,
    name: "Electronics Campaign",
    clicks: 156,
    conversions: 18,
    earned: "$142.30",
  },
  {
    id: 3,
    name: "Holiday Special",
    clicks: 89,
    conversions: 12,
    earned: "$98.40",
  },
];
export const REFERRAL_LINKS: ReferralLinkItem[] = [
  {
    id: 1,
    name: "General Referral Link",
    url: "https://store.com/ref/johndoe",
    clicks: 245,
    conversions: 32,
    earned: "$185.50",
  },
  {
    id: 2,
    name: "Electronics Campaign",
    url: "https://store.com/electronics?ref=johndoe",
    clicks: 156,
    conversions: 18,
    earned: "$142.30",
  },
  {
    id: 3,
    name: "Holiday Special",
    url: "https://store.com/holiday?ref=johndoe",
    clicks: 89,
    conversions: 12,
    earned: "$98.40",
  },
];

// 1. Thống kê tổng quan trang Links
export const LINKS_PAGE_STATS: LinksPageStats = {
  totalClicks: 892,
  totalConversions: 115,
  totalEarnings: "$748.20",
};

// 2. Danh sách chi tiết các Link
export const DETAILED_LINKS: DetailedReferralLink[] = [
  {
    id: 1,
    linkId: "AFL-001",
    name: "General Referral Link",
    status: "Active",
    category: "General",
    url: "https://store.com/ref/johndoe",
    clicks: 245,
    conversions: 32,
    earned: "$185.50",
    createdAt: "Jan 1, 2024",
  },
  {
    id: 2,
    linkId: "AFL-002",
    name: "Electronics Campaign",
    status: "Active",
    category: "Electronics",
    url: "https://store.com/electronics?ref=johndoe",
    clicks: 156,
    conversions: 18,
    earned: "$142.30",
    createdAt: "Dec 15, 2023",
  },
  {
    id: 3,
    linkId: "AFL-003",
    name: "Holiday Special Promotion",
    status: "Pending",
    category: "Seasonal",
    url: "https://store.com/holiday?ref=johndoe",
    clicks: 89,
    conversions: 12,
    earned: "$98.40",
    createdAt: "Jan 10, 2024",
  },
  {
    id: 4,
    linkId: "AFL-004",
    name: "Fashion Collection Link",
    status: "Paused",
    category: "Fashion",
    url: "https://store.com/fashion?ref=johndoe",
    clicks: 67,
    conversions: 8,
    earned: "$54.20",
    createdAt: "Nov 20, 2023",
  },
  {
    id: 5,
    linkId: "AFL-005",
    name: "Home & Garden Products",
    status: "Rejected",
    category: "Home",
    url: "https://store.com/home?ref=johndoe",
    clicks: 23,
    conversions: 0,
    earned: "$0.00",
    createdAt: "Jan 12, 2024",
  },
  {
    id: 6,
    linkId: "AFL-006",
    name: "Summer Sale Campaign",
    status: "Active",
    category: "Seasonal",
    url: "https://store.com/summer?ref=johndoe",
    clicks: 312,
    conversions: 45,
    earned: "$267.80",
    createdAt: "Oct 1, 2023",
  },
];
