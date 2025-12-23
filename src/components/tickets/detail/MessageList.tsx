import React from "react";
import { TicketMessage } from "@/lib/types/ticket";
import { MessageItem } from "./MessageItem";

interface MessageListProps {
  messages: TicketMessage[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="p-6 bg-gray-50/50 flex flex-col gap-6 min-h-100">
      {messages.map((msg) => (
        <MessageItem key={msg.id} message={msg} />
      ))}
    </div>
  );
};
