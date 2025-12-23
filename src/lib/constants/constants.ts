export const API_ROUTES = {
  AUTH: {
    LOGIN: "/auth/login",
  },
} as const;

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  MANAGER = "manager",
}

export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  BANNED = "banned",
}
export const ROUTES = {
  DASHBOARD: "/dashboard",
  ORDERS: "/dashboard/orders",
  ADDRESSES: "/dashboard/addresses",
  WISHLIST: "/dashboard/wishlist",
  TICKETS: "/dashboard/tickets",
  PROFILE: "/dashboard/profile",
  AFFILIATE: "/dashboard/affiliate",
};
