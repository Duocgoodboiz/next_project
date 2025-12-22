import { OrderDetail, OrderStatus } from "@/lib/types/order";

export const getOrderDetail = (id: string): OrderDetail | null => {
  return {
    id: id,
    status: OrderStatus.Processing,
    date: "January 15, 2024",
    estimatedDelivery: "January 20, 2024",
    trackingNumber: "TRK123456789",

    items: [
      {
        id: "p1",
        name: "Wireless Headphones",
        image: "/Premium Wireless Headphones.jpg",
        price: 79.99,
        quantity: 1,
      },
      {
        id: "p2",
        name: "Phone Case",
        image: "/Portable Phone Stand.jpg",
        price: 19.99,
        quantity: 2,
      },
      {
        id: "p3",
        name: "USB-C Cable",
        image: "/Smart Watch Seri.jpg",
        price: 14.99,
        quantity: 1,
      },
    ],

    subtotal: 134.96,
    shipping: 10.0,
    tax: 14.51,
    total: 159.47,

    shippingAddress: {
      name: "John Doe",
      address: "123 Main Street",
      city: "San Francisco, CA 94102",
      country: "United States",
    },
    billingAddress: {
      name: "John Doe",
      address: "123 Main Street",
      city: "San Francisco, CA 94102",
      country: "United States",
    },
    paymentMethod: {
      type: "Credit Card",
      last4: "4242",
    },

    timeline: [
      {
        status: "Order Placed",
        date: "2024-01-15, 10:30 AM",
        isCompleted: true,
        isCurrent: false,
      },
      {
        status: "Processing",
        date: "2024-01-15, 2:45 PM",
        isCompleted: true,
        isCurrent: true,
      },
      {
        status: "Shipped",
        date: "Pending",
        isCompleted: false,
        isCurrent: false,
      },
      {
        status: "Delivered",
        date: "Pending",
        isCompleted: false,
        isCurrent: false,
      },
    ],
  };
};
