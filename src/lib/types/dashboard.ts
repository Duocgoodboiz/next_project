export interface OrderStats {
  activeOrders: number;
  completedOrders: number;
  rewardPoints: number;
}

export interface Product {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
}

export interface DashboardData {
  stats: OrderStats;
  recentProducts: Product[];
  cart: Cart;
}
