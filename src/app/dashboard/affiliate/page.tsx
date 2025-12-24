"use client";

import { useAffiliate } from "@/hooks/affiliate/useAffiliate";
import StatsGrid from "@/components/affiliate/StatsGrid";
import BalanceSection from "@/components/affiliate/BalanceSection";
import PerformanceList from "@/components/affiliate/PerformanceList";
import ReferralLinksTab from "@/components/affiliate/ReferralLinksTab";
import { cn } from "@/lib/constants/utils";
import MarketingTab from "@/components/affiliate/MarketingTab";
import PaymentsTab from "@/components/affiliate/PaymentsTab";

export default function AffiliatePage() {
  const {
    activeTab,
    setActiveTab,
    tabs,
    stats,
    balance,
    performance,
    referralLinks,
  } = useAffiliate();

  return (
    <div className="space-y-6 w-full pb-10">
      <div className="max-w-4xl px-4 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Affiliate Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track your earnings and manage links.
          </p>
        </div>

        <StatsGrid stats={stats} />

        <div className="flex gap-1 bg-gray-100 p-1.5 rounded-lg w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-2.5 text-sm font-medium rounded-md transition-all",
                activeTab === tab
                  ? "bg-white text-gray-900 shadow-sm font-semibold"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-200/50"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        {/* Tab 1 */}
        {activeTab === "Dashboard" && (
          <div className="max-w-4xl px-4 space-y-6">
            <BalanceSection balance={balance} />
            <PerformanceList data={performance} />
          </div>
        )}

        {/* Tab 2 */}
        {activeTab === "Referral Links" && (
          <div className="max-w-4xl px-4">
            <ReferralLinksTab links={referralLinks} />
          </div>
        )}

        {/* Tab 3 */}
        {activeTab === "Marketing" && (
          <div className="max-w-7xl px-4">
            <MarketingTab />
          </div>
        )}
        {activeTab === "Payments" && (
          <div className="max-w-4xl px-4">
            <PaymentsTab />
          </div>
        )}
      </div>
    </div>
  );
}
