import React from "react";
import { clsx } from "clsx";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "outline" | "social";
type ButtonShape = "rounded" | "pill";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button = ({
  children,
  variant = "primary",
  shape = "rounded",
  isLoading = false,
  icon,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.btn, styles[variant], styles[shape], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {icon && <span className={styles.iconWrapper}>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};
export default Button;
