import { useState, useMemo } from "react";
import { Ticket } from "@/lib/types/ticket";
import { TICKET_CONSTANTS } from "@/lib/constants/tickets";

export const useTickets = (initialData: Ticket[]) => {
  const [activeTab, setActiveTab] = useState(
    TICKET_CONSTANTS.ALL_CATEGORIES_KEY
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTickets = useMemo(() => {
    return initialData.filter((ticket) => {
      const matchCategory =
        activeTab === TICKET_CONSTANTS.ALL_CATEGORIES_KEY ||
        ticket.category === activeTab;

      // 2. Search
      const query = searchQuery.toLowerCase();
      const matchSearch =
        ticket.subject.toLowerCase().includes(query) ||
        ticket.id.toLowerCase().includes(query);

      return matchCategory && matchSearch;
    });
  }, [initialData, activeTab, searchQuery]);

  const getCount = (category: string) => {
    if (category === TICKET_CONSTANTS.ALL_CATEGORIES_KEY)
      return initialData.length;
    return initialData.filter((t) => t.category === category).length;
  };

  return {
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    filteredTickets,
    getCount,
  };
};
