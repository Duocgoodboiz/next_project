export type PaymentStatus = "Paid" | "Pending" | "Failed";

export interface PaymentRecord {
  id: string;
  date: string;
  method: string;
  amount: number;
  status: PaymentStatus;
}
