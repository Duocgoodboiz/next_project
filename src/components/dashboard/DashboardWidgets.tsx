import React from "react";
import { HiOutlineShoppingCart, HiStar } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { text } from "@/config/text";
import { Product, Cart } from "@/lib/types/dashboard";
import styles from "./DashboardWidgets.module.css";
import Image from "next/image";

interface StatProps {
  label: string;
  value: number | string;
  icon: React.ReactNode;
}
export const StatCard = ({ label, value, icon }: StatProps) => (
  <div className={styles.statCard}>
    <div>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statValue}>{value}</div>
    </div>
    <div className={styles.statIconBox}>{icon}</div>
  </div>
);

interface ProductProps {
  data: Product;
}
export const ProductCard = ({ data }: ProductProps) => (
  <div className={styles.productCard}>
    <Image
      src={data.image}
      alt={data.name}
      width={200}
      height={200}
      className={styles.productImg}
      unoptimized
    />
    <div className={styles.productInfo}>
      <h4 className={styles.productName}>{data.name}</h4>
      <div className={styles.productMeta}>
        <HiStar /> <HiStar /> <HiStar /> <HiStar />{" "}
        <HiStar style={{ color: "#e5e7eb" }} />
        <span className={styles.reviewCount}>({data.reviews})</span>
      </div>
    </div>

    <div className={styles.priceRow}>
      <span className={styles.price}>${data.price}</span>
      <button className={styles.addBtn}>
        <HiOutlineShoppingCart size={18} />
      </button>
    </div>
  </div>
);

interface CartProps {
  data: Cart;
}
export const CartWidget = ({ data }: CartProps) => {
  const t = text.dashboard.cart_widget;

  return (
    <div className={styles.cartCard}>
      <h3 className={styles.cartTitle}>
        <HiOutlineShoppingCart className={styles.cartIcon} />
        {t.title}
      </h3>

      <div>
        {data.items.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <Image
              src={item.image}
              alt={item.name}
              width={48}
              height={48}
              className={styles.cartItemImg}
            />
            <div className={styles.cartItemInfo}>
              <p className={styles.cartItemName}>{item.name}</p>
              <p className={styles.cartItemPrice}>
                {item.qty} x ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.subtotalRow}>
        <span style={{ color: "#6b7280", fontSize: "14px", fontWeight: "500" }}>
          Subtotal:
        </span>
        <span>${data.subtotal}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.checkoutBtn}>
          Checkout <BsArrowRight size={16} />
        </button>
        <button className={styles.viewCartBtn}>View Cart</button>
      </div>
    </div>
  );
};
