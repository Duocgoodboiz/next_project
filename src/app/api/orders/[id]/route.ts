import { NextResponse } from "next/server";
import { getOrderDetail } from "@/lib/data/mock/orders/order-detail-data"; // Import hàm get gốc

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: RouteParams) {
  const { id } = params;

  await new Promise((resolve) => setTimeout(resolve, 500));

  const orderDetail = getOrderDetail(id);

  if (!orderDetail) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  return NextResponse.json(orderDetail);
}
