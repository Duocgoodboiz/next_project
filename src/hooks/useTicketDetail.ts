// src/hooks/useTicketDetail.ts
import { useState, useEffect } from "react";
import { Ticket, TicketMessage } from "@/lib/types/ticket";
import { MOCK_TICKETS } from "@/lib/data/mock/tickets/tickets-data";
import { MOCK_TICKET_MESSAGES } from "@/lib/data/mock/tickets/ticket-detail-data";

export const useTicketDetail = (ticketId: string) => {
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [messages, setMessages] = useState<TicketMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundTicket =
        MOCK_TICKETS.find((t) => t.id === ticketId) || MOCK_TICKETS[0];
      setTicket(foundTicket);
      setMessages(MOCK_TICKET_MESSAGES);

      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
      setTicket(null);
      setMessages([]);
      setIsLoading(true);
    };
  }, [ticketId]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg: TicketMessage = {
      id: `msg-${Date.now()}`,
      senderId: "user-current",
      senderName: "You",
      senderRole: "customer",
      content: newMessage,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");
  };

  return {
    ticket,
    messages,
    newMessage,
    isLoading,
    setNewMessage,
    handleSendMessage,
  };
};
