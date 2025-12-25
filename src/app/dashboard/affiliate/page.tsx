"use client";

import React, { useState } from "react";
import { useAffiliate } from "@/hooks/useAffiliate";
import { AffiliateStats } from "@/components/affiliate/AffiliateStats";
import { DashboardTab } from "@/components/affiliate/DashboardTab";
import { ReferralLinksTab } from "@/components/affiliate/ReferralLinksTab";
import { MarketingTab } from "@/components/affiliate/MarketingTab";
import { PaymentsTab } from "@/components/affiliate/PaymentsTab";
import { AffiliateLinksFullList } from "@/components/affiliate/AffiliateLinksFullList";
import { AffiliateLinkDetailView } from "@/components/affiliate/AffiliateLinkDetailView";
import { TabType } from "@/lib/types/affiliate";

export default function AffiliatePage() {
  const { loading, generalStats, links, payment, performance } = useAffiliate();
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");

  const [viewMode, setViewMode] = useState<
    "default" | "all-links" | "link-detail"
  >("default");
  const [selectedLinkId, setSelectedLinkId] = useState<string | null>(null);

  const handleViewDetail = (linkId: string) => {
    console.log("Viewing detail for:", linkId);
    setSelectedLinkId(linkId);
    setViewMode("link-detail");
  };

  if (loading)
    return <div className="p-8 text-center">Loading affiliate data...</div>;

  // --- MÀN HÌNH 1: CHI TIẾT LINK ---
  if (viewMode === "link-detail" && selectedLinkId) {
    return (
      <div
        className="w-full  p-0 animate-in fade-in duration-300"
        style={{ maxWidth: "1200px" }}
      >
        <AffiliateLinkDetailView
          linkId={selectedLinkId}
          onBack={() => setViewMode("all-links")}
        />
      </div>
    );
  }

  // --- MÀN HÌNH 2: DANH SÁCH FULL (VIEW ALL) ---
  if (viewMode === "all-links") {
    return (
      <div
        className="w-full  p-0 animate-in fade-in duration-300"
        style={{ maxWidth: "893px" }}
      >
        <AffiliateLinksFullList
          links={links}
          onBack={() => setViewMode("default")}
          onViewDetail={handleViewDetail}
        />
      </div>
    );
  }

  // --- MÀN HÌNH 3: DASHBOARD CHÍNH (DEFAULT) ---
  const tabs: { id: TabType; label: string }[] = [
    { id: "dashboard", label: "Dashboard" },
    { id: "referral-links", label: "Referral Links" },
    { id: "marketing", label: "Marketing" },
    { id: "payments", label: "Payments" },
  ];

  return (
    <div
      className="w-full  p-0 transition-all duration-300"
      style={{ maxWidth: "893px" }}
    >
      {/* Header & Stats */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Affiliate Dashboard
        </h1>
        <p className="text-gray-500 text-sm">
          Track your earnings and manage your affiliate links.
        </p>
      </div>

      <AffiliateStats stats={generalStats} />

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-white text-gray-900 shadow-sm ring-1 ring-gray-200"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-100">
        {activeTab === "dashboard" && payment && (
          <DashboardTab payment={payment} performance={performance} />
        )}

        {activeTab === "referral-links" && (
          <ReferralLinksTab
            links={links}
            onViewAll={() => setViewMode("all-links")}
          />
        )}

        {activeTab === "marketing" && <MarketingTab />}

        {activeTab === "payments" && <PaymentsTab />}
      </div>
    </div>
  );
}
