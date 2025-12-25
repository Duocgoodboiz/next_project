// src/components/affiliate/AffiliateStats.tsx
import React from "react";
import { AffiliateStat } from "@/lib/types/affiliate";
import { DollarSign, TrendingUp, Users, Target } from "lucide-react";

interface Props {
  stats: AffiliateStat[];
}

export const AffiliateStats = ({ stats }: Props) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "dollar":
        return <DollarSign className="w-5 h-5 text-emerald-600" />;
      case "chart":
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case "users":
        return <Users className="w-5 h-5 text-blue-500" />;
      case "target":
        return <Target className="w-5 h-5 text-purple-500" />;
      default:
        return <DollarSign className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-row gap-4 mb-8 w-full ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-25"
        >
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {stat.label}
            </span>
            <div
              className={`p-1.5 rounded-full bg-opacity-10 ${
                stat.icon === "dollar" || stat.icon === "chart"
                  ? "bg-emerald-500"
                  : stat.icon === "users"
                  ? "bg-blue-500"
                  : "bg-purple-500"
              }`}
            >
              {getIcon(stat.icon)}
            </div>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold text-gray-900">
              {stat.value}
            </span>
            {stat.trendValue && (
              <span className="text-xs font-medium text-emerald-600 mb-1">
                {stat.trendValue}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
