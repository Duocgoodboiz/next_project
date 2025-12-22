"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { RxDashboard } from "react-icons/rx";
import { FiBox } from "react-icons/fi";
import {
  HiOutlineLocationMarker,
  HiOutlineHeart,
  HiOutlineTicket,
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineTicket as HiTicketIcon,
} from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

import { text } from "@/config/text";
import { ROUTES } from "@/lib/constants";
import styles from "./Sidebar.module.css";
import affiliateStyles from "./AffiliateCard.module.css";

// Khối Affiliate (Quảng cáo)
const AffiliateCard = () => {
  const t = text.dashboard.affiliate;
  return (
    <div className={affiliateStyles.card}>
      <div className={affiliateStyles.textSection}>
        <h4 className={affiliateStyles.title}>
          <HiOutlineTicket /> {t.title}
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
    <aside className={styles.container}>
      {/* Header Sidebar */}
      <div className={styles.headerSection}>
        <h2 className={styles.headerTitle}>My Account</h2>
        <div className={styles.subTitle}>
          <HiTicketIcon /> Tickets
        </div>
      </div>

      {/* Menu Navigation */}
      <nav className={styles.nav}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={clsx(styles.item, isActive && styles.active)}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Khối Affiliate  */}
      <div style={{ marginTop: "24px", marginBottom: "24px" }}>
        <AffiliateCard />
      </div>

      {/* Logout Button */}
      <div className={styles.nav}>
        <button
          className={styles.item}
          onClick={() => alert("Logout logic here")}
        >
          <HiOutlineLogout size={20} />
          {t.logout}
        </button>
      </div>
    </aside>
  );
};
