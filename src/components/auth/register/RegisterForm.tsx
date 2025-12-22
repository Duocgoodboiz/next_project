"use client";
import React, { useState } from "react";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { TextInput } from "@/components/common/TextInput";
import { Button } from "@/components/common/Button";
import { text } from "@/config";
import styles from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const t = text.auth;
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  // Xử lý Submit giả lập
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Đăng ký thành công! (Demo)");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className={styles.card}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Full Name */}
        <TextInput
          label={t.fullname_label}
          placeholder={t.fullname_placeholder}
          icon={<HiOutlineUser />}
          required
        />

        {/* Email */}
        <TextInput
          label={t.email_label}
          placeholder={t.email_placeholder}
          type="email"
          icon={<HiOutlineMail />}
          required
        />

        {/* Password */}
        <TextInput
          label={t.password_label}
          placeholder={t.password_placeholder}
          type={showPass ? "text" : "password"}
          icon={<HiOutlineLockClosed />}
          rightSection={
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                display: "flex",
                color: "#9ca3af",
              }}
            >
              {showPass ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          }
          required
        />

        {/* Confirm Password */}
        <TextInput
          label={t.confirm_password_label}
          placeholder={t.confirm_password_placeholder}
          type="password"
          icon={<HiOutlineLockClosed />}
          required
        />

        {/* Terms Checkbox */}
        <div className={styles.termsRow}>
          <input type="checkbox" className={styles.checkbox} required />
          <span>
            {t.agree_terms}{" "}
            <a href="#" className={styles.link}>
              {t.terms_link}
            </a>{" "}
            and{" "}
            <a href="#" className={styles.link}>
              {t.privacy_link}
            </a>
          </span>
        </div>

        <Button type="submit" variant="primary" isLoading={loading}>
          {t.register_btn}
        </Button>
      </form>

      <div className={styles.socialSection}>
        <div className={styles.divider}>
          <span className={styles.dividerText}>
            {t.register_social_divider}
          </span>
        </div>
        <div className={styles.socialGrid}>
          <Button
            type="button"
            variant="social"
            icon={<FaGoogle className={styles.iconGoogle} />}
          >
            {t.google_btn}
          </Button>
          <Button
            type="button"
            variant="social"
            icon={<FaFacebook className={styles.iconFacebook} />}
          >
            {t.facebook_btn}
          </Button>
        </div>
      </div>
    </div>
  );
};
