import { User } from "./user";

export interface LoginPayload {
  email: string;
  password?: string;
  remember?: boolean;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}
