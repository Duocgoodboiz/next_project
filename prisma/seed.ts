import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient, OrderStatus } from "@/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString, ssl: true });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const SAMPLE_ADDRESS = {
  name: "John Doe",
  address: "123 Main Street",
  city: "San Francisco, CA 94102",
  country: "United States",
};

const SAMPLE_PAYMENT = {
  type: "Credit Card",
  last4: "4242",
};

const MOCK_ORDERS_LIST = [
  {
    id: "ORD-001",
    status: OrderStatus.Processing,
    dateString: "2024-01-15",
    itemsName: "Wireless Headphones",
    totalItems: 3,
    price: 159.47,
    items: [
      {
        name: "Wireless Headphones",
        image: "/images/p1.jpg",
        price: 79.99,
        quantity: 1,
      },
      {
        name: "Phone Case",
        image: "/images/p2.jpg",
        price: 19.99,
        quantity: 2,
      },
      {
        name: "USB-C Cable",
        image: "/images/p3.jpg",
        price: 14.99,
        quantity: 1,
      },
    ],
    timeline: [
      {
        status: "Order Placed",
        date: "2024-01-15T10:30:00Z",
        isCompleted: true,
        isCurrent: false,
      },
      {
        status: "Processing",
        date: "2024-01-15T14:45:00Z",
        isCompleted: true,
        isCurrent: true,
      },
      { status: "Shipped", date: null, isCompleted: false, isCurrent: false },
      { status: "Delivered", date: null, isCompleted: false, isCurrent: false },
    ],
  },
  {
    id: "ORD-002",
    status: OrderStatus.Completed,
    dateString: "2024-01-10",
    itemsName: "Smart Watch Series 8",
    totalItems: 1,
    price: 399.99,
    items: [
      {
        name: "Smart Watch Series 8",
        image: "/images/p4.jpg",
        price: 399.99,
        quantity: 1,
      },
    ],
    timeline: [
      {
        status: "Order Placed",
        date: "2024-01-10T09:00:00Z",
        isCompleted: true,
        isCurrent: false,
      },
      {
        status: "Processing",
        date: "2024-01-10T10:00:00Z",
        isCompleted: true,
        isCurrent: false,
      },
      {
        status: "Shipped",
        date: "2024-01-11T14:00:00Z",
        isCompleted: true,
        isCurrent: false,
      },
      {
        status: "Delivered",
        date: "2024-01-12T16:00:00Z",
        isCompleted: true,
        isCurrent: true,
      },
    ],
  },
  {
    id: "ORD-003",
    status: OrderStatus.Completed,
    dateString: "2024-01-05",
    itemsName: "Coffee Mug Set",
    totalItems: 2,
    price: 44.98,
    items: [
      {
        name: "Coffee Mug Set",
        image: "/images/p5.jpg",
        price: 22.49,
        quantity: 2,
      },
    ],
    timeline: [
      {
        status: "Delivered",
        date: "2024-01-07T10:00:00Z",
        isCompleted: true,
        isCurrent: true,
      },
    ],
  },
  {
    id: "ORD-004",
    status: OrderStatus.Cancelled,
    dateString: "2023-12-28",
    itemsName: "Portable Charger",
    totalItems: 1,
    price: 29.99,
    items: [
      {
        name: "Portable Charger",
        image: "/images/p6.jpg",
        price: 29.99,
        quantity: 1,
      },
    ],
    timeline: [
      {
        status: "Cancelled",
        date: "2023-12-29T08:00:00Z",
        isCompleted: true,
        isCurrent: true,
      },
    ],
  },
];

async function main() {
  console.log("Start seeding...");

  // Xóa dữ liệu cũ
  await prisma.orderTimeline.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();

  for (const orderData of MOCK_ORDERS_LIST) {
    // Tính toán subtotal giả lập
    const subtotal = orderData.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping = 10.0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    await prisma.order.create({
      data: {
        id: orderData.id,
        status: orderData.status,
        createdAt: new Date(orderData.dateString),
        trackingNumber: `TRK-${Date.now()}-${orderData.id}`,
        estimatedDelivery: "3-5 Business Days",
        subtotal: parseFloat(subtotal.toFixed(2)),
        shipping: shipping,
        tax: parseFloat(tax.toFixed(2)),
        total: parseFloat(total.toFixed(2)),

        shippingAddress: SAMPLE_ADDRESS,
        billingAddress: SAMPLE_ADDRESS,
        paymentMethod: SAMPLE_PAYMENT,

        items: {
          create: orderData.items.map((item) => ({
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: item.quantity,
          })),
        },

        timeline: {
          create: orderData.timeline.map((t) => ({
            status: t.status,
            date: t.date ? new Date(t.date) : new Date(),
            isCompleted: t.isCompleted,
            isCurrent: t.isCurrent,
          })),
        },
      },
    });
    console.log(`✅ Created order: ${orderData.id}`);
  }

  console.log("🏁 Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
