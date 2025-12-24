import { PaymentRecord } from "@/lib/types";
export const PAYMENT_HISTORY: PaymentRecord[] = [
  {
    id: "PAY-001",
    date: "January 2024",
    method: "PayPal",
    amount: 485.3,
    status: "Paid",
  },
  {
    id: "PAY-002",
    date: "December 2023",
    method: "Bank Transfer",
    amount: 392.8,
    status: "Paid",
  },
  {
    id: "PAY-003",
    date: "November 2023",
    method: "PayPal",
    amount: 561.2,
    status: "Paid",
  },
  {
    id: "PAY-004",
    date: "October 2023",
    method: "PayPal",
    amount: 298.45,
    status: "Paid",
  },
];
