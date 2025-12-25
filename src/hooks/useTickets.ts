import { useState, useMemo, useEffect } from "react";
import { Ticket } from "@/lib/types/ticket";
import { TICKET_CONSTANTS } from "@/lib/constants/tickets";
import { ticketsApi } from "@/lib/api-client/tickets-api";

export const useTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter States
  const [activeTab, setActiveTab] = useState(
    TICKET_CONSTANTS.ALL_CATEGORIES_KEY
  );
  const [searchQuery, setSearchQuery] = useState("");

  // 1. Fetch Data
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setIsLoading(true);
        const data = await ticketsApi.getTickets();
        setTickets(data);
      } catch (error) {
        console.error("Error loading tickets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  // 2. Logic Filter
  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const matchCategory =
        activeTab === TICKET_CONSTANTS.ALL_CATEGORIES_KEY ||
        ticket.category === activeTab;

      const query = searchQuery.toLowerCase();
      const matchSearch =
        ticket.subject.toLowerCase().includes(query) ||
        ticket.id.toLowerCase().includes(query);

      return matchCategory && matchSearch;
    });
  }, [tickets, activeTab, searchQuery]);

  const getCount = (category: string) => {
    if (category === TICKET_CONSTANTS.ALL_CATEGORIES_KEY) return tickets.length;
    return tickets.filter((t) => t.category === category).length;
  };

  return {
    isLoading,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    filteredTickets,
    getCount,
  };
};
