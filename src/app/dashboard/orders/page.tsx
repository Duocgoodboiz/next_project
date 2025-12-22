// src/app/dashboard/orders/page.tsx
"use client";
import React from "react";
import { HiOutlineEye } from "react-icons/hi";
import { text } from "@/config/text";
import { MOCK_ORDERS } from "@/lib/api-client/mock/orders/orders-data";
import { OrderStatus } from "@/lib/types/order";
import styles from "@/components/orders/OrderList.module.css";
import { TabsFilter } from "@/components/common/TabsFilter";
import { useOrders } from "@/hooks/useOrders";
import Link from "next/link";

export default function OrdersPage() {
  const t = text.orders;
  const { activeTab, setActiveTab, filteredOrders, counts } =
    useOrders(MOCK_ORDERS);

  const tabData = [
    { id: "All", label: `${t.tabs.all} (${counts.all})` },
    {
      id: OrderStatus.Processing,
      label: `${t.tabs.processing} (${counts.processing})`,
    },
    {
      id: OrderStatus.Completed,
      label: `${t.tabs.completed} (${counts.completed})`,
    },
    {
      id: OrderStatus.Cancelled,
      label: `${t.tabs.cancelled} (${counts.cancelled})`,
    },
  ];

  const getStatusClass = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.Processing:
        return styles.statusProcessing;
      case OrderStatus.Completed:
        return styles.statusCompleted;
      case OrderStatus.Cancelled:
        return styles.statusCancelled;
      default:
        return "";
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className="mb-8">
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#111827",
            lineHeight: "36px",
            marginBottom: "8px",
          }}
        >
          {t.title}
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#6b7280",
            lineHeight: "24px",
          }}
        >
          {t.subtitle}
        </p>
      </div>

      <TabsFilter
        tabs={tabData}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className={styles.wrapper}>
        <div className={styles.headerTitle}>Order History</div>

        {filteredOrders.map((item) => (
          <div key={item.id} className={styles.orderRow}>
            <div className={styles.cardHeader}>
              <span className={styles.orderId}>{item.id}</span>
              <span
                className={`${styles.statusBadge} ${getStatusClass(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>

            <div className={styles.infoRow}>
              <span>{item.date}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full mx-2"></span>
              <span className={styles.itemName}>
                {item.itemsName}
                {item.totalItems > 1 && (
                  <span className="text-gray-400 font-normal ml-1">
                    + {item.totalItems - 1} more
                  </span>
                )}
              </span>
            </div>

            <div className={styles.footer}>
              <span className={styles.price}>${item.price}</span>
              <Link
                href={`/dashboard/orders/${item.id}`}
                className={styles.viewBtn}
              >
                <HiOutlineEye size={16} />
                {t.card.view_details}
              </Link>
            </div>
          </div>
        ))}

        {filteredOrders.length === 0 && (
          <div className="text-center text-gray-500 py-8">No orders found.</div>
        )}
      </div>
    </div>
  );
}
