import React from "react";
import styles from "./AuthHeader.module.css";

interface Props {
  title: string;
  subtitle: string;
}

export const AuthHeader = ({ title, subtitle }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>W</div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};
