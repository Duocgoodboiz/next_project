"use client";
import React, { useEffect, useState } from "react";
import { Eye, Calendar } from "lucide-react";
import Link from "next/link";

// Config & Types
import { text } from "@/config/text";
import { Order, OrderStatus } from "@/lib/types/order";

// API & Hooks
import { ordersApi } from "@/lib/api-client/orders-api"; // Import API client mới
import { useOrders } from "@/hooks/useOrders";

// Components & Styles
import styles from "@/components/orders/OrderList.module.css";
import { TabsFilter } from "@/components/common/TabsFilter";

export default function OrdersPage() {
  const t = text.orders;

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { activeTab, setActiveTab, filteredOrders, counts } = useOrders(orders);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const data = await ordersApi.getOrders();
        setOrders(data);
      } catch (error) {
        console.error("Failed to load orders", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

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

  if (loading) {
    return <div className="p-8">Loading orders...</div>;
  }

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
