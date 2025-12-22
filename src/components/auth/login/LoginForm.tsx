"use client";
import React, { useState } from "react";

import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TextInput } from "@/components/common/TextInput";
import { useAuth } from "@/hooks/auth/useAuth";
import { text } from "@/config";
import { LoginPayload } from "@/lib/types/login";
import Link from "next/link";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const t = text.auth;
  const { login, loading } = useAuth();

  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState<LoginPayload>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className={styles.card}>
      {/* FORM */}
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Email Input */}
        <TextInput
          label={t.email_label}
          placeholder={t.email_placeholder}
          type="email"
          icon={<HiOutlineMail />}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        {/* Password Input */}
        <TextInput
          label={t.password_label}
          placeholder={t.password_placeholder}
          type={showPass ? "text" : "password"}
          icon={<HiOutlineLockClosed />}
          rightSection={
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className={styles.rightAction}
              tabIndex={-1} // Không focus vào nút này khi tab
            >
              {showPass ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          }
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />

        {/* Remember & Forgot Password */}
        <div className={styles.optionsRow}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} />
            {t.remember_me}
          </label>
          <Link href="/forgot-password" className={styles.forgotLink}>
            {t.forgot_password}
          </Link>
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? "Processing..." : t.submit_btn}
        </button>
      </form>

      {/* SOCIAL LOGIN SECTION */}
      <div className={styles.socialSection}>
        <div className={styles.divider}>
          <span className={styles.dividerText}>{t.social_divider}</span>
        </div>
        <div className={styles.socialGrid}>
          <button type="button" className={styles.socialBtn}>
            <FaGoogle className={styles.iconGoogle} /> Google
          </button>
          <button type="button" className={styles.socialBtn}>
            <FaFacebook className={styles.iconFacebook} /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
};
