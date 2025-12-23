export enum TicketStatus {
  Open = "Open",
  Waiting = "Waiting for Customer",
  Resolved = "Resolved",
  Closed = "Closed",
}

export enum TicketPriority {
  High = "High Priority",
  Medium = "Medium Priority",
  Low = "Low Priority",
}

export interface Ticket {
  id: string;
  subject: string;
  status: TicketStatus;
  category: string;
  orderId?: string;
  priority: TicketPriority;
  createdDate: string;
  updatedDate: string;
  messagesCount: number;
}
export interface TicketMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: "customer" | "agent" | "admin";
  content: string;
  timestamp: string;
  attachments?: { name: string; url: string; type: "file" | "image" }[];
}
