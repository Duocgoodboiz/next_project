import { Ticket, TicketMessage } from "@/lib/types/ticket";

interface TicketDetailResponse {
  ticket: Ticket;
  messages: TicketMessage[];
}

export const ticketsApi = {
  getTickets: async (): Promise<Ticket[]> => {
    try {
      const res = await fetch("/api/tickets");
      if (!res.ok) throw new Error("Failed to fetch tickets");
      return await res.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getTicketDetail: async (id: string): Promise<TicketDetailResponse | null> => {
    try {
      const res = await fetch(`/api/tickets/${id}`);
      if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error("Failed to fetch ticket detail");
      }
      return await res.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
