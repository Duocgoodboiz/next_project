import { Order, OrderStatus } from "@/lib/types/order";

export const MOCK_ORDERS: Order[] = [
  {
    id: "ORD-001",
    status: OrderStatus.Processing,
    date: "Jan 15, 2024",
    itemsName: "Wireless Headphones",
    totalItems: 3,
    price: 149.97,
  },
  {
    id: "ORD-002",
    status: OrderStatus.Completed,
    date: "Jan 10, 2024",
    itemsName: "Smart Watch Series 8",
    totalItems: 1,
    price: 399.99,
  },
  {
    id: "ORD-003",
    status: OrderStatus.Completed,
    date: "Jan 5, 2024",
    itemsName: "Coffee Mug Set",
    totalItems: 2,
    price: 44.98,
  },
  {
    id: "ORD-004",
    status: OrderStatus.Cancelled,
    date: "Dec 28, 2023",
    itemsName: "Portable Charger",
    totalItems: 1,
    price: 29.99,
  },
];
