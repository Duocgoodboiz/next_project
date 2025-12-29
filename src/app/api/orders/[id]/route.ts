import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";

interface RouteParams {
  params: {
    id: string;
  };
}

// GET
export async function GET(request: Request, { params }: RouteParams) {
  const { id } = params;

  try {
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        items: true,
        timeline: {
          orderBy: { date: "asc" },
        },
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const responseData = {
      ...order,
      date: format(order.createdAt, "MMMM d, yyyy"),
      shippingAddress: order.shippingAddress,
      billingAddress: order.billingAddress,
      paymentMethod: order.paymentMethod,

      // Map Timeline
      timeline: order.timeline.map((t) => ({
        status: t.status,
        date: format(t.date, "yyyy-MM-dd, h:mm a"),
        isCompleted: t.isCompleted,
        isCurrent: t.isCurrent,
      })),
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}

// PATCH: Cập nhật trạng thái đơn hàng
export async function PATCH(request: Request, { params }: RouteParams) {
  const { id } = params;
  try {
    const body = await request.json();
    const { status } = body;

    const updatedOrder = await prisma.order.update({
      where: { id },
      data: {
        status: status,
        timeline: {
          create: {
            status: status,
            isCompleted: true,
            isCurrent: true,
            date: new Date(),
          },
        },
      },
    });

    // Reset các timeline cũ isCurrent = false

    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.error("Lỗi chi tiết:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

// DELETE
export async function DELETE(request: Request, { params }: RouteParams) {
  const { id } = params;
  try {
    await prisma.order.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Lỗi chi tiết:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
