import React from "react";
import { CheckCircle, XCircle, MessageSquare } from "lucide-react";
import { Ticket } from "@/lib/types/ticket";

interface TicketSidebarProps {
  ticket: Ticket;
}

export const TicketSidebar = ({ ticket }: TicketSidebarProps) => {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. INFO CARD */}
      <div className="bg-white border border-(--erp-border) rounded-(--radius-card) shadow-(--shadow-card) p-6">
        {/* 1.25x: text-base -> text-lg font-bold */}
        <h3 className="font-bold text-(--erp-text-main) mb-5 text-lg">
          Ticket Information
        </h3>
        <div className="space-y-5">
          <div>
            {/* 1.25x: text-xs -> text-sm */}
            <label className="text-sm text-(--erp-text-sub) uppercase font-bold block mb-1.5">
              Category
            </label>
            {/* 1.25x: text-sm -> text-base */}
            <div className="inline-block px-3 py-1 bg-gray-100 text-(--erp-text-main) rounded-md text-base font-medium">
              {ticket.category}
            </div>
          </div>
          {ticket.orderId && (
            <div>
              <label className="text-sm text-(--erp-text-sub) uppercase font-bold block mb-1.5">
                Related Order
              </label>
              <a
                href="#"
                className="text-(--erp-primary) hover:underline text-base font-semibold transition-colors"
              >
                {ticket.orderId}
              </a>
            </div>
          )}
          <div>
            <label className="text-sm text-(--erp-text-sub) uppercase font-bold block mb-1.5">
              Created
            </label>
            <div className="text-base text-(--erp-text-main) font-medium">
              {ticket.createdDate}
            </div>
          </div>
          <div>
            <label className="text-sm text-(--erp-text-sub) uppercase font-bold block mb-1.5">
              Last Updated
            </label>
            <div className="text-base text-(--erp-text-main) font-medium">
              {ticket.updatedDate}
            </div>
          </div>
        </div>
      </div>

      {/* 2. ACTIONS CARD */}
      <div className="bg-white border border-(--erp-border) rounded-(--radius-card) shadow-(--shadow-card) p-6">
        <h3 className="font-bold text-(--erp-text-main) mb-5 text-lg">
          Actions
        </h3>
        <div className="space-y-3.5">
          {/* 1.25x: text-sm -> text-base */}
          <button className="w-full flex items-center justify-center gap-2.5 p-3 border border-(--erp-border) rounded-lg text-base font-medium text-(--erp-text-sub) hover:bg-gray-50 hover:text-(--erp-text-main) transition-colors">
            <CheckCircle size={18} /> Mark as Resolved
          </button>
          <button className="w-full flex items-center justify-center gap-2.5 p-3 border border-(--erp-border) rounded-lg text-base font-medium text-(--erp-text-sub) hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors">
            <XCircle size={18} /> Close Ticket
          </button>
        </div>
      </div>

      {/* 3. HELP CARD */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-(--radius-card) p-6">
        <div className="flex items-start gap-3.5 mb-3">
          <div className="p-2.5 bg-emerald-100 rounded-lg text-emerald-600 shrink-0">
            <MessageSquare size={22} />
          </div>
          <div>
            <h4 className="font-bold text-emerald-900 text-base">
              Need More Help?
            </h4>
            <p className="text-sm text-emerald-700 mt-1.5 leading-relaxed">
              Check our knowledge base for instant answers to common questions.
            </p>
          </div>
        </div>
        <button className="mt-3 w-full bg-white text-emerald-700 border border-emerald-200 py-2.5 rounded-lg text-base font-medium hover:bg-emerald-50 transition-colors">
          Browse Help Articles
        </button>
      </div>
    </div>
  );
};
