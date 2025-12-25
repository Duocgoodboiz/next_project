// src/components/affiliate/DashboardTab.tsx
import React from "react";
import { Button } from "@/components/common/Button";
import { PaymentOverview, PerformanceItem } from "@/lib/types/affiliate";

interface Props {
  payment: PaymentOverview;
  performance: PerformanceItem[];
}

export const DashboardTab = ({ payment, performance }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      {/* 2 Big Cards: Pending & Available */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Pending */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <h4 className="text-gray-500 font-medium mb-4">
            Pending Commissions
          </h4>
          <p className="text-4xl font-bold text-gray-900 mb-2">
            {payment.pending}
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Will be paid on next payout date
          </p>
          <Button variant="outline" shape="rounded" className="px-6">
            View Details
          </Button>
        </div>

        {/* Card 2: Available */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <h4 className="text-gray-500 font-medium mb-4">
            Available for Withdrawal
          </h4>
          <p className="text-4xl font-bold text-emerald-600 mb-2">
            {payment.available}
          </p>
          <p className="text-sm text-gray-400 mb-6">Ready to withdraw</p>
          <Button
            variant="primary"
            shape="rounded"
            className="bg-[#0d724f] hover:bg-[#0a5c3f] text-white px-6"
          >
            Request Payout
          </Button>
        </div>
      </div>

      {/* Recent Performance List */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          Recent Performance
        </h3>
        <div className="flex flex-col gap-4">
          {performance.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="mb-2 sm:mb-0">
                <p className="font-semibold text-gray-900">{item.title}</p>
                <div className="flex gap-3 text-xs text-gray-500 mt-1">
                  <span>{item.clicks}</span>
                  <span>{item.conversions}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-medium text-emerald-600">
                  {item.earnings}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
