import {
  AffiliateStat,
  LinkDetailFull,
  LinkStats,
  MarketingBanner,
  MarketingTextLink,
  PaymentHistoryItem,
  PaymentOverview,
  PerformanceItem,
  ReferralLink,
  ReferralLinkDetail,
} from "@/lib/types/affiliate";

export const affiliateStatsData: AffiliateStat[] = [
  { label: "Total Earnings", value: "$2459.50", icon: "dollar" },
  { label: "This Month", value: "$485.30", icon: "chart" },
  { label: "Total Referrals", value: "127", icon: "users" },
  { label: "Conversion Rate", value: "12.5%", icon: "target" },
];

export const referralLinksData: ReferralLink[] = [
  {
    id: "1",
    title: "General Referral Link",
    url: "https://store.com/ref/johndoe",
    clicks: 245,
    conversions: 32,
    earnings: "$185.50",
  },
  {
    id: "2",
    title: "Electronics Campaign",
    url: "https://store.com/electronics?ref=johndoe",
    clicks: 156,
    conversions: 18,
    earnings: "$142.30",
  },
  {
    id: "3",
    title: "Holiday Special",
    url: "https://store.com/holiday?ref=johndoe",
    clicks: 89,
    conversions: 12,
    earnings: "$98.40",
  },
];

export const paymentData: PaymentOverview = {
  pending: "$156.80",
  available: "$328.70",
};

export const recentPerformanceData: PerformanceItem[] = [
  {
    id: "1",
    title: "General Referral Link",
    clicks: "245 clicks",
    conversions: "32 conversions",
    earnings: "$185.50 earned",
  },
  {
    id: "2",
    title: "Electronics Campaign",
    clicks: "156 clicks",
    conversions: "18 conversions",
    earnings: "$142.30 earned",
  },
  {
    id: "3",
    title: "Holiday Special",
    clicks: "89 clicks",
    conversions: "12 conversions",
    earnings: "$98.40 earned",
  },
];
export const marketingBanners: MarketingBanner[] = [
  {
    id: "1",
    size: "728×90 Banner",
    colorClass: "bg-[#007042]",
    type: "banner",
  },
  {
    id: "2",
    size: "300×250 Banner",
    colorClass: "bg-[#007042]",
    type: "banner",
  },
];
export const marketingLinks: MarketingTextLink[] = [
  {
    id: "1",
    title: "Product Link",
    description:
      '"Check out these amazing products at Store.com - Use my link for exclusive deals!"',
    action: "copy",
    type: "text",
  },
  {
    id: "2",
    title: "Email Template",
    description: "Professional email template for sharing with your network.",
    action: "download",
    type: "email",
  },
];
export const paymentHistoryData: PaymentHistoryItem[] = [
  {
    id: "1",
    date: "January 2024",
    method: "PayPal",
    amount: "$485.30",
    status: "Paid",
  },
  {
    id: "2",
    date: "December 2023",
    method: "Bank Transfer",
    amount: "$392.80",
    status: "Paid",
  },
  {
    id: "3",
    date: "November 2023",
    method: "PayPal",
    amount: "$561.20",
    status: "Paid",
  },
  {
    id: "4",
    date: "October 2023",
    method: "PayPal",
    amount: "$298.45",
    status: "Paid",
  },
];
export const mockLinks: ReferralLinkDetail[] = [
  {
    id: "AFL-001",
    name: "General Referral Link",
    status: "Active",
    category: "General",
    url: "https://store.com/ref/johndoe",
    clicks: 245,
    conversions: 32,
    earnings: "$185.50",
    createdAt: "Jan 1, 2024",
  },
  {
    id: "AFL-002",
    name: "Electronics Campaign",
    status: "Active",
    category: "Electronics",
    url: "https://store.com/electronics?ref=johndoe",
    clicks: 156,
    conversions: 18,
    earnings: "$142.30",
    createdAt: "Dec 15, 2023",
  },
  {
    id: "AFL-003",
    name: "Holiday Special Promotion",
    status: "Pending",
    category: "Seasonal",
    url: "https://store.com/holiday?ref=johndoe",
    clicks: 0,
    conversions: 0,
    earnings: "$0.00",
    createdAt: "Jan 20, 2024",
  },
  {
    id: "AFL-004",
    name: "Fashion Collection Link",
    status: "Paused",
    category: "Fashion",
    url: "https://store.com/fashion?ref=johndoe",
    clicks: 67,
    conversions: 8,
    earnings: "$54.20",
    createdAt: "Nov 20, 2023",
  },
  {
    id: "AFL-005",
    name: "Home & Garden Products",
    status: "Rejected",
    category: "Home",
    url: "https://store.com/home?ref=johndoe",
    clicks: 23,
    conversions: 0,
    earnings: "$0.00",
    createdAt: "Jan 12, 2024",
  },
  {
    id: "AFL-006",
    name: "Summer Sale Campaign",
    status: "Active",
    category: "Seasonal",
    url: "https://store.com/summer?ref=johndoe",
    clicks: 312,
    conversions: 45,
    earnings: "$267.80",
    createdAt: "Oct 1, 2023",
  },
];

export const mockStats: LinkStats = {
  clicks: 892,
  conversions: 115,
  earnings: "$748.20",
};
export const mockLinkDetail: LinkDetailFull = {
  id: "AFL-001",
  name: "General Referral Link",
  description: "Main referral link for general product recommendations",
  url: "https://store.com/ref/johndoe",
  originalUrl: "https://store.com/products",
  status: "Active",
  category: "General",
  clicks: 245,
  conversions: 32,
  earnings: "$185.50",
  commissionRate: "15%",
  createdAt: "January 1, 2024 at 05:00 PM",
  approvedDate: "January 1, 2024 at 10:30 PM",
  approvedBy: "Sarah Johnson",
  lastClick: "January 15, 2024 at 09:30 PM",
  chartData: [
    { date: "Jan 15", clicks: 28, conversions: 4, earnings: "$22.50" },
    { date: "Jan 14", clicks: 32, conversions: 5, earnings: "$28.75" },
    { date: "Jan 13", clicks: 19, conversions: 2, earnings: "$15.20" },
    { date: "Jan 12", clicks: 24, conversions: 3, earnings: "$18.90" },
    { date: "Jan 11", clicks: 35, conversions: 6, earnings: "$34.80" },
    { date: "Jan 10", clicks: 21, conversions: 3, earnings: "$19.50" },
    { date: "Jan 9", clicks: 18, conversions: 2, earnings: "$12.40" },
  ],
  trafficSources: [
    { source: "Instagram", clicks: 78, conversions: 12, icon: "instagram" },
    { source: "Facebook", clicks: 65, conversions: 9, icon: "facebook" },
    { source: "Twitter", clicks: 45, conversions: 6, icon: "twitter" },
    { source: "Direct", clicks: 57, conversions: 5, icon: "direct" },
  ],
};
