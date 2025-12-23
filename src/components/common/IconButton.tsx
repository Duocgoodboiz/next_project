import React from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "normal" | "danger";
  icon: React.ReactNode;
}

export const IconButton = ({
  variant = "normal",
  icon,
  className,
  ...props
}: IconButtonProps) => {
  const baseStyle =
    "w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--erp-border)] transition-colors cursor-pointer";

  const variants = {
    normal:
      "text-[var(--erp-text-sub)] hover:bg-gray-50 hover:text-[var(--erp-text-main)]",
    danger: "text-red-500 hover:bg-red-50 hover:border-red-100",
  };

  return (
    <button
      type="button"
      className={`${baseStyle} ${variants[variant]} ${className || ""}`}
      {...props}
    >
      {icon}
    </button>
  );
};
