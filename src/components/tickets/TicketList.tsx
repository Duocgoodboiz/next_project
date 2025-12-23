// src/components/tickets/TicketList.tsx
"use client";
import React from "react";
import { Search } from "lucide-react";
import { Ticket } from "@/lib/types/ticket";
import { TICKET_TEXT } from "@/config/text/tickets";
import { TicketItem } from "./TicketItem"; // Import Item con

interface TicketListProps {
  tickets: Ticket[];
}

export const TicketList = ({ tickets }: TicketListProps) => {
  return (
    <div className="bg-white border border-(--erp-border) rounded-(--radius-card) shadow-(--shadow-card) overflow-hidden">
      {/* Header List */}
      <div className="px-6 py-4 border-b border-(--erp-border) font-bold text-(--erp-text-main) bg-gray-50/50">
        {TICKET_TEXT.LIST.HEADER}
      </div>

      {/* List Items */}
      {tickets.length > 0 ? (
        <div className="divide-y divide-(--erp-border)">
          {tickets.map((ticket) => (
            <TicketItem key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 text-center">
          <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-gray-200">
            <Search size={24} className="text-gray-400" />
          </div>
          <h3 className="text-(--erp-text-main) font-semibold mb-1">
            {TICKET_TEXT.EMPTY.TITLE}
          </h3>
          <p className="text-(--erp-text-sub) text-sm">
            {TICKET_TEXT.EMPTY.DESC}
          </p>
        </div>
      )}
    </div>
  );
};
