// src/lib/constants/wishlist.ts

export const SORT_KEYS = {
  NEWEST: "newest",
  OLDEST: "oldest",
  PRICE_ASC: "price_asc",
  PRICE_DESC: "price_desc",
  RATING: "rating",
};

export const SORT_OPTIONS = [
  { label: "Newest First", value: SORT_KEYS.NEWEST },
  { label: "Oldest First", value: SORT_KEYS.OLDEST },
  { label: "Price: Low to High", value: SORT_KEYS.PRICE_ASC },
  { label: "Price: High to Low", value: SORT_KEYS.PRICE_DESC },
  { label: "Highest Rated", value: SORT_KEYS.RATING },
];

export const ALL_CATEGORIES_KEY = "all";
