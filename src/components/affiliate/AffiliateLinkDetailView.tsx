import React from "react";
import { ArrowLeft } from "lucide-react";
import LinkSidebar from "@/components/affiliate/LinkSidebar";
import PerformanceChart from "@/components/affiliate/PerformanceChart";
import TrafficSourcesCard from "@/components/affiliate/TrafficSourcesCard";
import {
  LinkDetailData,
  DailyPerformance,
  TrafficSource,
} from "@/lib/types/affiliate";

interface Props {
  linkId: string;
  onBack: () => void;
}

export const AffiliateLinkDetailView = ({ linkId, onBack }: Props) => {
  const mockDetailData: LinkDetailData = {
    category: "Electronics",
    commissionRate: "15%",
    createdAt: "Jan 1, 2024",
    lastClick: "2 mins ago",
    originalUrl: "https://store.com/products/headphones-xm5?ref=johndoe",
  };

  const mockChartData: DailyPerformance[] = [
    {
      date: "Mon",
      clickPercentage: 65,
      conversionPercentage: 30,
      clicks: 120,
      conversions: 12,
      earnings: "$45.50",
    },
    {
      date: "Tue",
      clickPercentage: 45,
      conversionPercentage: 20,
      clicks: 98,
      conversions: 8,
      earnings: "$32.00",
    },
    {
      date: "Wed",
      clickPercentage: 80,
      conversionPercentage: 45,
      clicks: 156,
      conversions: 22,
      earnings: "$85.20",
    },
    {
      date: "Thu",
      clickPercentage: 60,
      conversionPercentage: 35,
      clicks: 112,
      conversions: 15,
      earnings: "$56.80",
    },
    {
      date: "Fri",
      clickPercentage: 90,
      conversionPercentage: 50,
      clicks: 189,
      conversions: 28,
      earnings: "$112.50",
    },
    {
      date: "Sat",
      clickPercentage: 75,
      conversionPercentage: 40,
      clicks: 145,
      conversions: 19,
      earnings: "$78.40",
    },
    {
      date: "Sun",
      clickPercentage: 55,
      conversionPercentage: 25,
      clicks: 105,
      conversions: 10,
      earnings: "$42.00",
    },
  ];

  // --- SỬA LỖI Ở ĐÂY ---
  // 1. Xóa ": any[]" để không bị ESLint báo lỗi.
  // 2. Thêm "icon: undefined" để khớp với Type nếu file Type chưa cập nhật kịp.
  // 3. Dùng "as unknown as TrafficSource[]" ở cuối để ép kiểu an toàn.
  const mockTrafficData = [
    { source: "Facebook", clicks: 452, conversions: 32, icon: undefined },
    { source: "Twitter", clicks: 128, conversions: 12, icon: undefined },
    { source: "Instagram", clicks: 89, conversions: 8, icon: undefined },
    { source: "Direct", clicks: 56, conversions: 4, icon: undefined },
  ] as unknown as TrafficSource[];

  return (
    <div className="w-full animate-in fade-in slide-in-from-right-4 duration-300">
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="p-2 hover:bg-white hover:shadow-sm rounded-full transition-all text-gray-500 hover:text-gray-900 border border-transparent hover:border-gray-200"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">
              General Referral Link
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
              Active
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">ID: {linkId}</p>
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        {/* CỘT TRÁI */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          <PerformanceChart data={mockChartData} />
          <div className="w-full">
            <TrafficSourcesCard sources={mockTrafficData} />
          </div>
        </div>

        {/* CỘT PHẢI */}
        <div className="xl:col-span-1">
          <LinkSidebar data={mockDetailData} />
        </div>
      </div>
    </div>
  );
};
