import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Ticket, TicketStatus } from "@/lib/types/ticket";

interface TicketHeaderProps {
  ticket: Ticket;
}

export const TicketHeader = ({ ticket }: TicketHeaderProps) => {
  const router = useRouter();

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

  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-3">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100 text-(--erp-text-sub) hover:text-(--erp-text-main) transition-colors group"
          title="Back to Tickets"
        >
          <ArrowLeft
            size={24}
            className="group-hover:-translate-x-1 transition-transform"
          />
        </button>

        <h1 className="text-3xl font-bold text-(--erp-text-main)">
          {ticket.subject}
        </h1>
      </div>

      <div className="flex items-center gap-4 text-base ml-12">
        <span className="text-(--erp-text-sub) font-mono text-base">
          #{ticket.id}
        </span>

        <span
          className={`px-3 py-1 rounded-md text-sm font-semibold border ${getStatusClasses(
            ticket.status
          )}`}
        >
          {ticket.status}
        </span>
        <span className="px-3 py-1 rounded-md text-sm font-semibold border bg-gray-50 text-gray-600 border-gray-200">
          {ticket.priority} Priority
        </span>
      </div>
    </div>
  );
};
