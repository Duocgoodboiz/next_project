import { useState, useMemo, useEffect } from "react";
import { WishlistItem } from "@/lib/types/wishlist";
import { MOCK_WISHLIST } from "@/lib/api-client/mock/wishlist/wishlist-data";
import { SORT_KEYS, ALL_CATEGORIES_KEY } from "@/config/text/wishlist";

export const useWishlist = () => {
  // 1. State
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES_KEY);
  const [selectedSort, setSelectedSort] = useState(SORT_KEYS.NEWEST);

  // 2. Fetch Data
  useEffect(() => {
    const loadData = () => {
      setItems(MOCK_WISHLIST);
      setIsLoading(false);
    };
    loadData();
  }, []);

  // 3. Logic Lọc & Sắp xếp
  const processedItems = useMemo(() => {
    let result = [...items];

    // Filter Category
    if (selectedCategory !== ALL_CATEGORIES_KEY) {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Sort Logic
    switch (selectedSort) {
      case SORT_KEYS.NEWEST:
        result.sort((a, b) => Number(b.id) - Number(a.id));
        break;
      case SORT_KEYS.OLDEST:
        result.sort((a, b) => Number(a.id) - Number(b.id));
        break;
      case SORT_KEYS.PRICE_ASC:
        result.sort((a, b) => a.price - b.price);
        break;
      case SORT_KEYS.PRICE_DESC:
        result.sort((a, b) => b.price - a.price);
        break;
      case SORT_KEYS.RATING:
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return result;
  }, [items, selectedCategory, selectedSort]);

  // 4. Lấy danh sách Category
  const uniqueCategories = useMemo(() => {
    const cats = new Set(items.map((item) => item.category));
    return Array.from(cats);
  }, [items]);

  // 5. Actions
  const removeItem = (id: string | number) => {
    if (confirm("Remove this item from wishlist?")) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const addToCart = (id: string | number) => {
    console.log(`Adding item ${id} to cart...`);
    alert("Added to cart successfully!");
  };

  const clearFilters = () => {
    setSelectedCategory(ALL_CATEGORIES_KEY);
    setSelectedSort(SORT_KEYS.NEWEST);
  };

  return {
    // Data
    items: processedItems, // Danh sách đã lọc/sắp xếp
    totalItems: processedItems.length,
    isLoading,
    categories: uniqueCategories,

    // States for UI Controls
    filters: {
      category: selectedCategory,
      sort: selectedSort,
    },

    // Setters for UI Controls
    setCategory: setSelectedCategory,
    setSort: setSelectedSort,
    clearFilters,

    // Actions
    removeItem,
    addToCart,
  };
};
