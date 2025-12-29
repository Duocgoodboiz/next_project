// src/lib/types/order.ts

export enum OrderStatus {
  Processing = "Processing",
  Completed = "Completed",
  Cancelled = "Cancelled",
}

// Interface cho danh sách (List View)
export interface Order {
  id: string;
  status: OrderStatus;
  date: string;
  itemsName: string;
  totalItems: number;
  price: number;
}

// --- CÁC TYPE MỚI CHO TRANG CHI TIẾT (DETAIL VIEW) ---

export interface OrderTimeline {
  status: string;
  date: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

export interface OrderItemDetail {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface AddressInfo {
  name: string;
  address: string;
  city: string;
  country: string;
}

export interface PaymentInfo {
  type: string;
  last4: string;
}

export interface OrderDetail {
  id: string;
  status: OrderStatus;
  date: string;
  estimatedDelivery: string;
  trackingNumber: string;

  items: OrderItemDetail[];

  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: AddressInfo;
  billingAddress: AddressInfo;
  paymentMethod: PaymentInfo;
  timeline: OrderTimeline[];
}
export interface CreateOrderInput {
  items: {
    name: string;
    image: string;
    price: number;
    quantity: number;
  }[];
  shippingAddress: AddressInfo;
  billingAddress: AddressInfo;
  paymentMethod: PaymentInfo;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}
