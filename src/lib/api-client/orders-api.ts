// src/lib/api-client/orders-api.ts
import { Order, OrderDetail } from "@/lib/types/order";

export const ordersApi = {
  getOrders: async (): Promise<Order[]> => {
    try {
      const res = await fetch("/api/orders");
      if (!res.ok) throw new Error("Failed to fetch orders");
      return await res.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getOrderDetail: async (id: string): Promise<OrderDetail | null> => {
    try {
      const res = await fetch(`/api/orders/${id}`);

      if (!res.ok) {
        if (res.status === 404) return null;

        throw new Error("Failed to fetch order detail");
      }

      return await res.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
