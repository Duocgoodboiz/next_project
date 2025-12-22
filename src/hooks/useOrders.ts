import { useState, useMemo } from "react";
import { Order, OrderStatus } from "@/lib/types/order";

export const useOrders = (initialOrders: Order[]) => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredOrders = useMemo(() => {
    if (activeTab === "All") return initialOrders;
    return initialOrders.filter((order) => order.status === activeTab);
  }, [activeTab, initialOrders]);

  const counts = useMemo(() => {
    return {
      all: initialOrders.length,
      processing: initialOrders.filter(
        (o) => o.status === OrderStatus.Processing
      ).length,
      completed: initialOrders.filter((o) => o.status === OrderStatus.Completed)
        .length,
      cancelled: initialOrders.filter((o) => o.status === OrderStatus.Cancelled)
        .length,
    };
  }, [initialOrders]);

  return {
    activeTab,
    setActiveTab,
    filteredOrders,
    counts,
  };
};
