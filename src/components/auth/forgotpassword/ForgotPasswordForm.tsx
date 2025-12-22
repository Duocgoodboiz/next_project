"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  HiOutlineMail,
  HiArrowLeft,
  HiOutlineShieldCheck,
} from "react-icons/hi";

import { TextInput } from "@/components/common/TextInput";
import { Button } from "@/components/common/Button";
import { text } from "@/config";
import styles from "./ForgotPasswordForm.module.css";

export const ForgotPasswordForm = () => {
  const t = text.auth;
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Đã gửi email reset! (Demo)");
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* CARD FORM CHÍNH */}
      <div className={styles.card}>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <TextInput
            label={t.email_label}
            placeholder={t.email_placeholder}
            type="email"
            icon={<HiOutlineMail />}
            required
          />

          <p className={styles.description}>{t.reset_desc}</p>

          <Button type="submit" variant="primary" isLoading={loading}>
            {t.reset_btn}
          </Button>

          <div className={styles.backLinkWrapper}>
            <Link href="/login" className={styles.backLink}>
              <HiArrowLeft /> {t.back_to_login}
            </Link>
          </div>
        </form>
      </div>

      {/* SECURITY NOTICE BOX  */}
      <div className={styles.securityCard}>
        <div className={styles.iconBox}>
          <HiOutlineShieldCheck />
        </div>
        <div className={styles.securityContent}>
          <h4 className={styles.securityTitle}>{t.security_title}</h4>
          <p className={styles.securityText}>{t.security_desc}</p>
        </div>
      </div>
    </>
  );
};
