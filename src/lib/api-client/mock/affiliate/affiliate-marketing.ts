import {
  MarketingBanner,
  MarketingResource,
} from "@/lib/types/affiliate/affiliate-marketing";

export const MARKETING_BANNERS: MarketingBanner[] = [
  {
    id: "1",
    title: "728×90 Banner",
    size: "728x90",
    type: "horizontal",
    colorClass: "bg-emerald-600",
  },
  {
    id: "2",
    title: "300×250 Banner",
    size: "300x250",
    type: "rectangle",
    colorClass: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
];

export const MARKETING_RESOURCES: MarketingResource[] = [
  {
    id: "1",
    title: "Product Link",
    description: `"Check out these amazing products at Store.com - Use my link for exclusive deals!"`,
    type: "text",
  },
  {
    id: "2",
    title: "Email Template",
    description: "Professional email template for sharing with your network.",
    type: "email",
  },
];
