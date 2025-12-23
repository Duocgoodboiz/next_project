"use client";
import React from "react";

import { Eye, Calendar } from "lucide-react";
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
            marginBottom: "8px",
          }}
        >
          {t.title}
        </h1>
        <p style={{ fontSize: "16px", color: "#6b7280" }}>{t.subtitle}</p>
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
            {/* Cột bên trái: Thông tin đơn hàng */}
            <div className={styles.leftColumn}>
              {/* Dòng 1: Order ID + Badge */}
              <div className={styles.rowTop}>
                <span className={styles.orderId}>{item.id}</span>
                <span
                  className={`${styles.statusBadge} ${getStatusClass(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              {/* Dòng 2: Ngày tháng + Tên sản phẩm */}
              <div className={styles.rowMeta}>
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-gray-500" />
                  <span>{item.date}</span>
                </div>

                <span className={styles.dot}>•</span>

                <div className="flex items-center gap-1.5 truncate">
                  <span className={styles.itemName} title={item.itemsName}>
                    {item.itemsName}
                    {item.totalItems > 1 && (
                      <span className="text-gray-400 font-normal ml-1">
                        + {item.totalItems - 1} more
                      </span>
                    )}
                  </span>
                </div>
              </div>

              {/* Dòng 3: Giá tiền */}
              <div className={styles.price}>${item.price}</div>
            </div>

            <div className={styles.rightColumn}>
              <Link
                href={`/dashboard/orders/${item.id}`}
                className={styles.viewBtn}
              >
                <Eye size={16} />
                {t.card.view_details}
              </Link>
            </div>
          </div>
        ))}

        {filteredOrders.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No orders found.
          </div>
        )}
      </div>
    </div>
  );
}
