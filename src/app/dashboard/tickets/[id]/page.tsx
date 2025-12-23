"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useTicketDetail } from "@/hooks/useTicketDetail";
import { TicketHeader } from "@/components/tickets/detail/TicketHeader";
import { MessageList } from "@/components/tickets/detail/MessageList";
import { ReplyBox } from "@/components/tickets/detail/ReplyBox";
import { TicketSidebar } from "@/components/tickets/detail/TicketSidebar";

export default function TicketDetailPage() {
  const params = useParams();
  const ticketId = params.id as string;

  // Lấy data và logic từ Hook
  const {
    ticket,
    messages,
    newMessage,
    setNewMessage,
    handleSendMessage,
    isLoading,
  } = useTicketDetail(ticketId);

  if (isLoading || !ticket) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="text-(--erp-text-sub) text-sm animate-pulse">
          Loading ticket details...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto font-sans p-0">
      {/* 1. Header Section */}
      <TicketHeader ticket={ticket} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white border border-(--erp-border) rounded-(--radius-card) shadow-(--shadow-card) overflow-hidden flex flex-col">
            <div className="p-4 border-b border-(--erp-border) font-semibold text-(--erp-text-main) bg-white">
              Conversation
            </div>

            <MessageList messages={messages} />

            <ReplyBox
              value={newMessage}
              onChange={setNewMessage}
              onSend={handleSendMessage}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <TicketSidebar ticket={ticket} />
        </div>
      </div>
    </div>
  );
}
