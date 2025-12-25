"use client";

import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/common/Button";
import { useTickets } from "@/hooks/useTickets";
import { TICKET_CATEGORIES } from "@/lib/constants/tickets";
import { TICKET_TEXT } from "@/config/text/tickets";
import { TicketFilterBar } from "@/components/tickets/TicketFilterBar";
import { TicketList } from "@/components/tickets/TicketList";

export default function TicketsPage() {
  const {
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    filteredTickets,
    getCount,
    isLoading,
  } = useTickets();

  const tabData = TICKET_CATEGORIES.map((cat) => ({
    id: cat,
    label: `${cat} (${getCount(cat)})`,
  }));

  if (isLoading) {
    return (
      <div className="p-12 text-center text-gray-500">Loading tickets...</div>
    );
  }

  return (
    <div className="w-full max-w-300 font-sans p-0">
      {/* 1. Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-(--erp-text-main) mb-1">
            {TICKET_TEXT.HEADER.TITLE}
          </h1>
          <p className="text-(--erp-text-sub)">{TICKET_TEXT.HEADER.SUBTITLE}</p>
        </div>
        <Button variant="primary" shape="rounded" icon={<Plus size={18} />}>
          {TICKET_TEXT.HEADER.BTN_NEW}
        </Button>
      </div>

      {/* 2. Filter Bar */}
      <TicketFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        tabs={tabData}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* 3. Ticket List */}
      <TicketList tickets={filteredTickets} />
    </div>
  );
}
