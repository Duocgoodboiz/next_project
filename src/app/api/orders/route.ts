import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { OrderItem } from "@/generated/prisma/client";

// GET
export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const formattedOrders = orders.map((order) => {
      const firstItemName = order.items[0]?.name || "Unknown Item";
      const totalItems = order.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return {
        id: order.id,
        status: order.status,
        date: format(order.createdAt, "MMM d, yyyy"),
        itemsName: firstItemName,
        totalItems: totalItems,
        price: order.total,
      };
    });

    return NextResponse.json(formattedOrders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newOrder = await prisma.order.create({
      data: {
        status: "Processing",
        subtotal: body.subtotal,
        shipping: body.shipping,
        tax: body.tax,
        total: body.total,
        shippingAddress: body.shippingAddress,

        billingAddress: body.billingAddress,

        paymentMethod: body.paymentMethod,

        trackingNumber: `TRK-${Date.now()}`,
        estimatedDelivery: "3-5 Business Days",

        items: {
          create: body.items.map((item: OrderItem) => ({
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: item.quantity,
          })),
        },
        timeline: {
          create: [
            { status: "Order Placed", isCompleted: true, isCurrent: false },
            { status: "Processing", isCompleted: true, isCurrent: true },
          ],
        },
      },
    });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
