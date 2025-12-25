import { WishlistItem } from "@/lib/types/wishlist";

export const wishlistApi = {
  getWishlist: async (): Promise<WishlistItem[]> => {
    try {
      const res = await fetch("/api/wishlist");

      if (!res.ok) {
        throw new Error("Failed to fetch wishlist");
      }

      return await res.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },
};
