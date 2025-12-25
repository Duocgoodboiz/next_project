import { useState, useEffect } from "react";
import { Ticket, TicketMessage } from "@/lib/types/ticket";
import { ticketsApi } from "@/lib/api-client/tickets-api";

export const useTicketDetail = (ticketId: string) => {
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [messages, setMessages] = useState<TicketMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!ticketId) return;

      try {
        setIsLoading(true);
        const data = await ticketsApi.getTicketDetail(ticketId);

        if (data) {
          setTicket(data.ticket);
          setMessages(data.messages);
        }
      } catch (error) {
        console.error("Error fetching ticket detail:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetail();
  }, [ticketId]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Simulate sending messages
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
