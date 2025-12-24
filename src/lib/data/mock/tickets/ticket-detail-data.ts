import { TicketMessage } from "@/lib/types/ticket";

export const MOCK_TICKET_MESSAGES: TicketMessage[] = [
  {
    id: "msg-1",
    senderId: "user-current",
    senderName: "You",
    senderRole: "customer",
    content:
      "Hello, I placed an order 3 days ago (Order #ORD-12345) but I haven't received any tracking information yet. The estimated delivery date is approaching and I'm getting concerned.",
    timestamp: "Jan 15, 2024, 05:30 PM",
  },
  {
    id: "msg-2",
    senderId: "agent-001",
    senderName: "Sarah Johnson",
    senderRole: "agent",
    content:
      "Hello! Thank you for contacting us. I apologize for the delay in getting you the tracking information. Let me look into your order right away.",
    timestamp: "Jan 15, 2024, 06:15 PM",
  },
  {
    id: "msg-3",
    senderId: "agent-001",
    senderName: "Sarah Johnson",
    senderRole: "agent",
    content:
      "Good news! I've located your order. It was shipped yesterday and is currently in transit. Your tracking number is TRK123456789. The package should arrive by January 20th.",
    timestamp: "Jan 15, 2024, 06:25 PM",
    attachments: [{ name: "tracking_details.pdf", url: "#", type: "file" }],
  },
];
