import {
  CreateOrderInput,
  Order,
  OrderDetail,
  OrderStatus,
} from "@/lib/types/order";

export const ordersApi = {
  getOrders: async (): Promise<Order[]> => {
    const res = await fetch("/api/orders", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed");
    return await res.json();
  },

  getOrderDetail: async (id: string): Promise<OrderDetail | null> => {
    const res = await fetch(`/api/orders/${id}`, { cache: "no-store" });
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error("Failed");
    }
    return await res.json();
  },

  // === THÊM MỚI ===
  createOrder: async (data: CreateOrderInput) => {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Create failed");
    return await res.json();
  },

  updateStatus: async (id: string, status: OrderStatus) => {
    const res = await fetch(`/api/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error("Update failed");
    return await res.json();
  },

  deleteOrder: async (id: string) => {
    const res = await fetch(`/api/orders/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Delete failed");
    return true;
  },
};
