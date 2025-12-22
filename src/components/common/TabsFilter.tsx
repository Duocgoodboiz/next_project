import React from "react";
import styles from "./TabsFilter.module.css";
export interface TabItem {
  id: string;
  label: string;
}

interface TabsFilterProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

export const TabsFilter = ({
  tabs,
  activeTab,
  onTabChange,
  className,
}: TabsFilterProps) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`${styles.tabBtn} ${
            activeTab === tab.id ? styles.active : styles.inactive
          }`}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
