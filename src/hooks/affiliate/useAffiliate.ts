"use client";

import { useState } from "react";
import {
  AFFILIATE_STATS,
  AFFILIATE_BALANCE,
  RECENT_PERFORMANCE,
  REFERRAL_LINKS,
} from "@/lib/data/mock/affiliate/affiliate";

export function useAffiliate() {
  const [activeTab, setActiveTab] = useState("Referral Links");
  const tabs = ["Dashboard", "Referral Links", "Marketing", "Payments"];

  return {
    activeTab,
    setActiveTab,
    tabs,
    stats: AFFILIATE_STATS,
    balance: AFFILIATE_BALANCE,
    performance: RECENT_PERFORMANCE,
    referralLinks: REFERRAL_LINKS,
  };
}
export type LinkStatus = "Active" | "Pending" | "Paused" | "Rejected";

export interface DetailedReferralLink {
  id: number;
  linkId: string;
  name: string;
  status: LinkStatus;
  category: string;
  url: string;
  clicks: number;
  conversions: number;
  earned: string;
  createdAt: string;
}

export interface LinksPageStats {
  totalClicks: number;
  totalConversions: number;
  totalEarnings: string;
}
