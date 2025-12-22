import { UserRole, UserStatus } from "@/lib/constants";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
}
