// src/components/tickets/TicketFilterBar.tsx
"use client";
import React from "react";
import { Search } from "lucide-react";
import { TabsFilter } from "@/components/common/TabsFilter";
import { TICKET_TEXT } from "@/config/text/tickets";

interface TicketFilterBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const TicketFilterBar = ({
  searchQuery,
  setSearchQuery,
  tabs,
  activeTab,
  onTabChange,
}: TicketFilterBarProps) => {
  return (
    <div className="bg-white p-4 rounded-(--radius-card) border border-(--erp-border) mb-6 flex flex-col md:flex-row items-center gap-2 shadow-sm">
      {/* Search Input Block */}
      <div className="relative w-full md:w-50 shrink-0 h-10">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-(--erp-text-sub) z-10"
        />
        <input
          type="text"
          placeholder={TICKET_TEXT.TOOLBAR.SEARCH_PLACEHOLDER}
          className="w-full h-full pl-10 pr-4 rounded-xl border-none bg-gray-50 text-sm outline-none focus:ring-0 transition-all placeholder:text-(--erp-text-placeholder)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex-1 w-full overflow-x-auto overflow-y-hidden no-scrollbar flex items-center ">
        <div className="min-w-max flex items-center">
          <TabsFilter
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={onTabChange}
            className="mb-0!"
          />
        </div>
      </div>
    </div>
  );
};
