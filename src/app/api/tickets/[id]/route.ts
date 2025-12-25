import { NextResponse } from "next/server";
import { MOCK_TICKETS } from "@/lib/data/mock/tickets/tickets-data";
import { MOCK_TICKET_MESSAGES } from "@/lib/data/mock/tickets/ticket-detail-data";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { id } = await params;

  console.log("Fetching Ticket ID:", id);

  await new Promise((resolve) => setTimeout(resolve, 500));

  const ticket = MOCK_TICKETS.find((t) => t.id === id);

  if (!ticket) {
    console.log("Ticket not found in MOCK_TICKETS");
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  return NextResponse.json({
    ticket,
    messages: MOCK_TICKET_MESSAGES,
  });
}
