import React, { useState, useRef, useEffect } from "react";
import { HiChevronDown, HiCheck } from "react-icons/hi";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  label?: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  minWidth?: string;
}

export const CustomSelect = ({
  label,
  value,
  options,
  onChange,
  minWidth = "160px",
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || value;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div
        className="flex items-center gap-2 cursor-pointer group py-2 select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label && (
          <span className="text-sm text-(--erp-text-sub)">{label}</span>
        )}

        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-(--erp-text-main) group-hover:text-(--erp-primary) transition-colors">
            {selectedLabel}
          </span>
          <HiChevronDown
            className={`text-(--erp-text-sub) transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            size={16}
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute top-full left-0 z-50 mt-1 bg-white rounded-lg shadow-xl border border-(--erp-border) py-1 animate-in fade-in zoom-in-95 duration-100 origin-top-left overflow-hidden"
          style={{ minWidth: minWidth }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`
                flex items-center justify-between px-3 py-2.5 text-sm cursor-pointer transition-colors
                ${
                  option.value === value
                    ? "bg-gray-50 text-(--erp-primary) font-medium"
                    : "text-(--erp-text-main) hover:bg-gray-50 hover:text-(--erp-text-main)"
                }
              `}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              <span>{option.label}</span>
              {option.value === value && (
                <HiCheck size={16} className="text-(--erp-primary)" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
