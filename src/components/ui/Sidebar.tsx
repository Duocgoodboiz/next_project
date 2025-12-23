"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { RxDashboard } from "react-icons/rx";
import { FiBox } from "react-icons/fi";
import { MessageSquare, Users } from "lucide-react";
import {
  HiOutlineLocationMarker,
  HiOutlineHeart,
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineTicket as HiTicketIcon,
} from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

import { text } from "@/config/text";
import { ROUTES } from "@/lib/constants/constants";
import styles from "./Sidebar.module.css";
import affiliateStyles from "./AffiliateCard.module.css";

// Khối Affiliate (Banner)
const AffiliateCard = () => {
  const t = text.dashboard.affiliate;
  return (
    <div className={affiliateStyles.card}>
      <div className={affiliateStyles.textSection}>
        <h4 className={affiliateStyles.title}>
          <HiTicketIcon /> {t.title}
        </h4>
        <p className={affiliateStyles.desc}>{t.desc}</p>
      </div>
      <button className={affiliateStyles.button}>
        {t.btn} <BsArrowRight />
      </button>
    </div>
  );
};

export const Sidebar = () => {
  const t = text.dashboard.menu;
  const pathname = usePathname();

  const menuItems = [
    {
      label: t.dashboard,
      path: ROUTES.DASHBOARD,
      icon: <RxDashboard size={20} />,
    },
    { label: t.orders, path: ROUTES.ORDERS, icon: <FiBox size={20} /> },
    {
      label: t.addresses,
      path: ROUTES.ADDRESSES,
      icon: <HiOutlineLocationMarker size={20} />,
    },
    {
      label: t.wishlist,
      path: ROUTES.WISHLIST,
      icon: <HiOutlineHeart size={20} />,
    },
    {
      label: t.tickets,
      path: ROUTES.TICKETS,
      icon: <HiTicketIcon size={20} />,
    },
    {
      label: t.profile,
      path: ROUTES.PROFILE,
      icon: <HiOutlineUser size={20} />,
    },
  ];

  return (
    // 1. Container chính: Fix cứng chiều cao 100vh, KHÔNG scroll (overflow: hidden)
    <aside
      className={styles.container}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        justifyContent: "space-between", // Phân bố đều nội dung
      }}
    >
      {/* --- PHẦN TRÊN: HEADER + MENU --- */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Header */}
        <div
          className={styles.headerSection}
          style={{ flexShrink: 0, paddingBottom: "10px" }}
        >
          <h2 className={styles.headerTitle}>My Account</h2>
          <div className={styles.subTitle}>
            <MessageSquare size={14} /> Tickets
          </div>
        </div>

        <nav
          className={styles.nav}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            overflow: "hidden",
            justifyContent: "flex-start",
            paddingTop: "0",
          }}
        >
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={clsx(styles.item, isActive && styles.active)}
                style={{ flexShrink: 0 }} // Đảm bảo item không bị bóp méo quá mức
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* --- PHẦN DƯỚI: BANNER + FOOTER --- */}
      <div style={{ flexShrink: 0, marginTop: "auto" }}>
        {/* Banner Affiliate */}
        {/* Giảm padding/margin tối đa để tiết kiệm diện tích */}
        <div style={{ padding: "0 16px", marginBottom: "8px" }}>
          <AffiliateCard />
        </div>

        {/* Footer Links (Logout + Affiliate) */}
        <div
          className={styles.nav}
          style={{ gap: "2px", paddingBottom: "16px" }}
        >
          <button
            className={styles.item}
            onClick={() => alert("Logout logic here")}
          >
            <HiOutlineLogout size={20} />
            {t.logout}
          </button>

          <Link href="/dashboard/affiliate" className={styles.item}>
            <Users size={20} />
            Affiliate
          </Link>
        </div>
      </div>
    </aside>
  );
};
