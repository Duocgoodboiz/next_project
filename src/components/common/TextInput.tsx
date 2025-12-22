import React from "react";
import styles from "./TextInput.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  rightSection?: React.ReactNode;
}

export const TextInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, icon, rightSection, ...props }, ref) => {
    return (
      <div className={styles.container}>
        {label && <label className={styles.label}>{label}</label>}

        <div className={styles.wrapper}>
          {icon && <div className={styles.iconLeft}>{icon}</div>}

          <input ref={ref} className={styles.input} {...props} />

          {rightSection && (
            <div className={styles.rightAction}>{rightSection}</div>
          )}
        </div>
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
