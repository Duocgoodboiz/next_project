// src/components/tickets/TicketItem.tsx
"use client";
import React from "react";
import { HelpCircle, Eye } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Ticket, TicketStatus, TicketPriority } from "@/lib/types/ticket";
import { TICKET_TEXT } from "@/config/text/tickets";
import Link from "next/link";

interface TicketItemProps {
  ticket: Ticket;
}

export const TicketItem = ({ ticket }: TicketItemProps) => {
  // Helper: Status Colors
  const getStatusClasses = (status: TicketStatus) => {
    switch (status) {
      case TicketStatus.Open:
        return "bg-blue-50 text-blue-600 border-blue-100";
      case TicketStatus.Waiting:
        return "bg-yellow-50 text-yellow-600 border-yellow-100";
      case TicketStatus.Resolved:
        return "bg-green-50 text-green-600 border-green-100";
      case TicketStatus.Closed:
        return "bg-gray-100 text-gray-500 border-gray-200";
      default:
        return "bg-gray-50 text-gray-500";
    }
  };

  // Helper: Priority Colors
  const getPriorityClass = (priority: TicketPriority) => {
    switch (priority) {
      case TicketPriority.High:
        return "text-red-500 font-medium";
      case TicketPriority.Medium:
        return "text-amber-500 font-medium";
      case TicketPriority.Low:
        return "text-emerald-500 font-medium";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 hover:bg-(--item-hover) transition-colors duration-200">
      {/* LEFT CONTENT */}
      <div className="flex-1 flex flex-col gap-1.5 min-w-0">
        {/* Row 1: Subject + Status */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[15px] font-semibold text-(--erp-text-main) truncate max-w-full">
            {ticket.subject}
          </span>
          <span
            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded border ${getStatusClasses(
              ticket.status
            )}`}
          >
            {ticket.status}
          </span>
        </div>

        {/* Row 2: Meta Info */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-(--erp-text-sub)">
          <div className="flex items-center gap-1.5">
            <HelpCircle size={14} className="text-gray-400" />
            <span className="font-mono text-xs text-(--erp-text-sub)">
              {ticket.id}
            </span>
          </div>

          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-700">
            {ticket.category}
          </span>

          {ticket.orderId && (
            <>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="text-xs">
                {TICKET_TEXT.LIST.COL_ORDER}{" "}
                <span className="font-mono">{ticket.orderId}</span>
              </span>
            </>
          )}

          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className={getPriorityClass(ticket.priority)}>
            {ticket.priority}
          </span>
        </div>

        {/* Row 3: Dates */}
        <div className="flex items-center gap-4 text-xs text-gray-400 mt-1">
          <span>
            {TICKET_TEXT.LIST.CREATED} {ticket.createdDate}
          </span>
          <span className="hidden sm:inline">
            {TICKET_TEXT.LIST.UPDATED} {ticket.updatedDate}
          </span>
          <span className="text-(--erp-text-main) font-medium">
            {ticket.messagesCount} {TICKET_TEXT.LIST.MSG_PREFIX}
          </span>
        </div>
      </div>

      {/* RIGHT CONTENT: Button */}
      <div className="shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
        <Link
          href={`/dashboard/tickets/${ticket.id}`}
          className="block w-full sm:w-auto"
        >
          <Button
            variant="outline"
            shape="rounded"
            className="h-9! px-4! text-xs! w-full sm:w-auto border-gray-200 hover:border-gray-300 hover:bg-white text-(--erp-text-main)"
            icon={<Eye size={14} />}
          >
            {TICKET_TEXT.LIST.BTN_VIEW}
          </Button>
        </Link>
      </div>
    </div>
  );
};
