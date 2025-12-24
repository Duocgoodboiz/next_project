import React from "react";
import { PAYMENT_HISTORY } from "@/lib/data/mock/affiliate/affiliate-payments";
import { PaymentRecord } from "@/lib/types";
import { cn } from "@/lib/constants/utils";

export default function PaymentsTab() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Payment History</h2>
      <div className="flex flex-col space-y-4">
        {PAYMENT_HISTORY.map((payment) => (
          <PaymentItem key={payment.id} payment={payment} />
        ))}
      </div>
    </div>
  );
}

function PaymentItem({ payment }: { payment: PaymentRecord }) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(payment.amount);

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
      <div className="space-y-1">
        <p className="font-medium text-gray-900 text-base">{payment.date}</p>
        <p className="text-sm text-gray-500">{payment.method}</p>
      </div>

      <div className="text-right space-y-1">
        <p className="font-medium text-gray-900 text-base">{formattedAmount}</p>
        <div className="flex justify-end">
          <StatusBadge status={payment.status} />
        </div>
      </div>
    </div>
  );
}

// Sub-component
function StatusBadge({ status }: { status: string }) {
  const styles =
    status === "Paid"
      ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
      : status === "Pending"
      ? "bg-yellow-50 text-yellow-600 border border-yellow-100"
      : "bg-red-50 text-red-600 border border-red-100";

  return (
    <span
      className={cn(
        "px-2.5 py-0.5 rounded text-[11px] font-medium uppercase tracking-wide",
        styles
      )}
    >
      {status}
    </span>
  );
}
