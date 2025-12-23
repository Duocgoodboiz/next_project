// src/app/dashboard/orders/[id]/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  HiDownload,
  HiOutlineCube,
  HiCheck,
  HiOutlineTruck,
  HiArrowLeft,
  HiOutlineCalendar,
  HiOutlineChatAlt2,
} from "react-icons/hi";
import { BiPackage } from "react-icons/bi";

// Import Config & Data
import { getOrderDetail } from "@/lib/api-client/mock/orders/order-detail-data";
import { ordersText } from "@/config/text/orders";

// Import Style & Component
import styles from "@/components/orders/OrderDetails.module.css";
import { Button } from "@/components/common/Button";

export default function OrderDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.id as string;
  const order = getOrderDetail(orderId);

  const getTimelineIcon = (status: string) => {
    if (status.includes("Placed")) return <HiOutlineCube size={18} />;
    if (status.includes("Processing")) return <BiPackage size={18} />;
    if (status.includes("Shipped")) return <HiOutlineTruck size={18} />;
    return <HiCheck size={18} />;
  };

  if (!order) return <div className="p-8 text-center">Order not found</div>;

  return (
    <div className={styles.container}>
      {/* === HEADER === */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <button
            onClick={() => router.back()}
            className={styles.backButton}
            title={ordersText.HEADER.BACK}
          >
            <HiArrowLeft size={20} />
          </button>
          <div>
            <h1 className={styles.pageTitle}>{ordersText.HEADER.TITLE}</h1>
            <p className={styles.orderLabel}>
              {ordersText.HEADER.ORDER_PREFIX} {order.id}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          shape="rounded"
          icon={<HiDownload size={18} />}
        >
          {ordersText.HEADER.BTN_INVOICE}
        </Button>
      </div>

      {/* === BẮT ĐẦU GRID LAYOUT === */}
      <div className={styles.gridParams}>
        {/* ===  (LEFT COLUMN) === */}
        <div className="left-column">
          {/* 1. TIMELINE & TRACKING */}
          <div className={styles.card}>
            <div className={styles.cardHeaderFlex}>
              <h3 className={styles.cardTitle}>
                {ordersText.STATUS_CARD.TITLE}
              </h3>
              <span
                className={`${styles.statusBadge} ${styles.badgeProcessing}`}
              >
                {order.status}
              </span>
            </div>

            <div className="mt-4">
              {order.timeline.map((step, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineLine}></div>
                  <div
                    className={`${styles.timelineIcon} ${
                      step.isCompleted || step.isCurrent
                        ? styles.iconCompleted
                        : ""
                    } ${step.isCurrent ? styles.iconCurrent : ""}`}
                  >
                    {getTimelineIcon(step.status)}
                  </div>
                  <div>
                    <p className={styles.timelineStatus}>{step.status}</p>
                    <p className={styles.timelineDate}>{step.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.trackingFooter}>
              <div>
                <span className={styles.trackingLabel}>
                  {ordersText.STATUS_CARD.TRACKING_LABEL}
                </span>
                <span className={styles.trackingValue}>
                  {order.trackingNumber}
                </span>
              </div>
              <Button variant="primary" shape="pill">
                {ordersText.STATUS_CARD.BTN_TRACK}
              </Button>
            </div>
          </div>

          {/* 2. ORDER ITEMS LIST */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{ordersText.ITEMS_CARD.TITLE}</h3>

            <div className={styles.itemsContainer}>
              {order.items.map((item) => (
                <div key={item.id} className={styles.itemRow}>
                  <div className={styles.itemGroupLeft}>
                    <div className={styles.itemImageWrapper}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    </div>
                    <div>
                      <h4 className={styles.itemName}>{item.name}</h4>
                      <p className={styles.itemMeta}>
                        {ordersText.ITEMS_CARD.QTY_PREFIX} {item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className={styles.itemPriceGroup}>
                    <p className={styles.itemTotal}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    {item.quantity > 0 && (
                      <span className={styles.itemUnitPrice}>
                        ${item.price.toFixed(2)} each
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className={styles.summarySection}>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>
                  {ordersText.ITEMS_CARD.SUMMARY.SUBTOTAL}
                </span>
                <span className={styles.summaryValue}>
                  ${order.subtotal.toFixed(2)}
                </span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>
                  {ordersText.ITEMS_CARD.SUMMARY.SHIPPING}
                </span>
                <span className={styles.summaryValue}>
                  ${order.shipping.toFixed(2)}
                </span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>
                  {ordersText.ITEMS_CARD.SUMMARY.TAX}
                </span>
                <span className={styles.summaryValue}>
                  ${order.tax.toFixed(2)}
                </span>
              </div>

              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>
                  {ordersText.ITEMS_CARD.SUMMARY.TOTAL}
                </span>
                <span className={styles.totalValue}>
                  ${order.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* 3. NEED HELP BLOCK */}
          <div className={styles.helpCard}>
            <div className={styles.helpFlex}>
              <div className={styles.helpIconWrapper}>
                <HiOutlineChatAlt2 />
              </div>
              <div className={styles.helpContent}>
                <h4 className={styles.helpTitle}>
                  {ordersText.HELP_CARD.TITLE}
                </h4>
                <p className={styles.helpText}>
                  {ordersText.HELP_CARD.DESCRIPTION}
                </p>
                <div className={styles.contactBtnWrapper}>
                  <Button variant="outline" shape="pill">
                    {ordersText.HELP_CARD.BTN_CONTACT}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===  (SIDEBAR) === */}
        <div className="right-column">
          {/* Order Info */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle} style={{ marginBottom: "20px" }}>
              {ordersText.SIDEBAR.INFO_TITLE}
            </h3>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>
                <HiOutlineCalendar size={18} />
                {ordersText.SIDEBAR.DATE_LABEL}
              </div>
              <p className={styles.infoValue}>{order.date}</p>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>
                <HiOutlineTruck size={18} />
                {ordersText.SIDEBAR.DELIVERY_LABEL}
              </div>
              <p className={styles.infoValue}>{order.estimatedDelivery}</p>
            </div>
          </div>

          {/* Shipping Address */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle} style={{ marginBottom: "20px" }}>
              {ordersText.SIDEBAR.SHIPPING_TITLE}
            </h3>
            <div className="text-sm text-gray-600 leading-6">
              <p className="font-semibold text-gray-900 mb-1">
                {order.shippingAddress.name}
              </p>
              <p>{order.shippingAddress.address}</p>
              <p>
                {order.shippingAddress.city}, {order.shippingAddress.country}
              </p>
            </div>
          </div>

          {/* Billing Address */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle} style={{ marginBottom: "20px" }}>
              {ordersText.SIDEBAR.BILLING_TITLE}
            </h3>
            <div className="text-sm text-gray-600 leading-6">
              <p className="font-semibold text-gray-900 mb-1">
                {order.billingAddress.name}
              </p>
              <p>{order.billingAddress.address}</p>
              <p>
                {order.billingAddress.city}, {order.billingAddress.country}
              </p>
            </div>
          </div>

          {/* Payment Method */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle} style={{ marginBottom: "20px" }}>
              {ordersText.SIDEBAR.PAYMENT_TITLE}
            </h3>
            <div className={styles.paymentBlock}>
              <div className={styles.visaBadge}>VISA</div>
              <div>
                <p className={styles.paymentTextMain}>
                  {ordersText.SIDEBAR.ENDING_IN} {order.paymentMethod.last4}
                </p>
                <p className={styles.paymentTextSub}>
                  {ordersText.SIDEBAR.EXPIRY_PREFIX} 12/28
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
