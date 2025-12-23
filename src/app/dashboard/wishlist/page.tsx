"use client";

import React from "react";
import { HiOutlineShare } from "react-icons/hi";
import { Button } from "@/components/common/Button";
import { WishlistCard } from "@/components/wishlist/WishlistCard";
import { WishlistFilterBar } from "@/components/wishlist/WishlistFilterBar";
import { useWishlist } from "@/hooks/useWishlist";
import { SORT_KEYS, ALL_CATEGORIES_KEY } from "@/config/text/wishlist";

export default function WishlistPage() {
  const {
    items,
    totalItems,
    isLoading,
    categories,
    filters,
    setCategory,
    setSort,
    clearFilters,
    removeItem,
    addToCart,
  } = useWishlist();

  if (isLoading) {
    return (
      <div className="p-12 text-center text-gray-500">Loading wishlist...</div>
    );
  }

  const isFiltered =
    filters.category !== ALL_CATEGORIES_KEY ||
    filters.sort !== SORT_KEYS.NEWEST;

  return (
    <div className="w-full max-w-300 mx-auto p-0">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-(--erp-text-main) mb-1">
            My Wishlist
          </h1>
          <p className="text-(--erp-text-sub)">
            {totalItems} items saved for later
          </p>
        </div>

        <Button
          variant="outline"
          shape="pill"
          icon={<HiOutlineShare size={18} />}
        >
          Share Wishlist
        </Button>
      </div>

      {/* FILTER BAR */}
      <WishlistFilterBar
        categories={categories}
        selectedCategory={filters.category}
        onCategoryChange={setCategory}
        selectedSort={filters.sort}
        onSortChange={setSort}
      />

      {/* LIST CONTENT */}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
          {items.map((item) => (
            <WishlistCard
              key={item.id}
              item={item}
              onRemove={removeItem}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            No items found
          </h3>
          <p className="text-gray-500 mt-2">
            {isFiltered
              ? "Try changing your filters to see more results."
              : "Browse products and add your favorites here."}
          </p>

          {isFiltered && (
            <button
              onClick={clearFilters}
              className="mt-4 text-(--erp-primary) font-medium hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
