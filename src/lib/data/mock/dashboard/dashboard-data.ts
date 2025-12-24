import { DashboardData } from "@/lib/types/dashboard";

export const MOCK_DASHBOARD_DATA: DashboardData = {
  stats: {
    activeOrders: 3,
    completedOrders: 24,
    rewardPoints: 1240,
  },
  recentProducts: [
    {
      id: 1,
      name: "Premium Leather Wallet",
      rating: 5,
      reviews: 128,
      price: 49.99,
      image: "/Premium Leather Wallet.jpg",
    },
    {
      id: 2,
      name: "Wireless Charging Pad",
      rating: 4.5,
      reviews: 89,
      price: 29.99,
      image: "/Wireless Charging Pad.jpg",
    },
    {
      id: 3,
      name: "Coffee Mug Set",
      rating: 4,
      reviews: 256,
      price: 24.99,
      image: "/Coffee Mug Set.jpg",
    },
    {
      id: 4,
      name: "Portable Phone Stand",
      rating: 4.5,
      reviews: 167,
      price: 19.99,
      image: "/Portable Phone Stand.jpg",
    },
  ],
  cart: {
    items: [
      {
        id: 101,
        name: "Wireless Bluetooth Headset",
        price: 79.99,
        qty: 1,
        image: "/Wireless Bluetooth.jpg",
      },
      {
        id: 102,
        name: "Smart Watch Series 7",
        price: 399.99,
        qty: 1,
        image: "/Smart Watch Seri.jpg",
      },
    ],
    subtotal: 479.98,
  },
};
