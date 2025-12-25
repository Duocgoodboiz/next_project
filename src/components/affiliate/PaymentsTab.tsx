import React from "react";
import { paymentHistoryData } from "@/lib/data/mock/affiliate/affiliate";

export const PaymentsTab = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Payment History</h3>

      <div className="flex flex-col gap-4">
        {paymentHistoryData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-5 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors bg-white"
          >
            <div className="flex flex-col gap-1">
              <p className="font-medium text-gray-900 text-base">{item.date}</p>
              <p className="text-sm text-gray-500 font-normal">{item.method}</p>
            </div>

            <div className="flex flex-col items-end gap-1">
              <p className="font-medium text-gray-900 text-base">
                {item.amount}
              </p>

              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600">
                {item.status}
              </span>
            </div>
          </div>
        ))}

        {paymentHistoryData.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No payment history available.
          </div>
        )}
      </div>
    </div>
  );
};
