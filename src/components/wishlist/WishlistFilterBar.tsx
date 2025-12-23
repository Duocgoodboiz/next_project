import React from "react";

import { Filter } from "lucide-react";
import { CustomSelect } from "@/components/common/CustomSelect";
import { SORT_OPTIONS, ALL_CATEGORIES_KEY } from "@/config/text/wishlist";

interface WishlistFilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedSort: string;
  onSortChange: (sort: string) => void;
}

export const WishlistFilterBar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedSort,
  onSortChange,
}: WishlistFilterBarProps) => {
  // Tạo options cho Category từ danh sách động
  const categoryOptions = [
    { label: "All Categories", value: ALL_CATEGORIES_KEY },
    ...categories.map((cat) => ({ label: cat, value: cat })),
  ];

  return (
    <div className="bg-white rounded-xl border border-(--erp-border) p-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 shadow-sm">
      {/* Filter Left */}
      <div className="flex items-center gap-3">
        <Filter className="text-(--erp-text-sub)" size={20} />

        <CustomSelect
          label="Filter:"
          value={selectedCategory}
          options={categoryOptions}
          onChange={onCategoryChange}
          minWidth="200px"
        />
      </div>

      {/* Sort Right  */}
      <div className="flex items-center gap-2">
        <CustomSelect
          label="Sort by:"
          value={selectedSort}
          options={SORT_OPTIONS}
          onChange={onSortChange}
          minWidth="180px"
        />
      </div>
    </div>
  );
};
