export interface WishlistItem {
  id: string | number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  inStock: boolean;
  discount?: number;
}
