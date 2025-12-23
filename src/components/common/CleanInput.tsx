import React from "react";

interface CleanInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export const CleanInput = ({
  label,
  required,
  className,
  ...props
}: CleanInputProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Label: In đậm (Semibold), size 14px */}
      <label className="text-sm font-semibold text-(--erp-text-main)">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        className="w-full text-[15px] font-normal text-(--erp-text-main) placeholder-gray-400 border-none outline-none p-0 focus:ring-0 bg-transparent transition-colors"
        autoComplete="off"
        {...props}
      />
    </div>
  );
};
