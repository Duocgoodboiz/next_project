"use client";
import React, { useEffect, useState } from "react";
import { FiBox, FiCheckCircle, FiGift } from "react-icons/fi";
import { text } from "@/config/text";
import { dashboardApi } from "@/lib/api-client/dashboard-api";
import { DashboardData } from "@/lib/types/dashboard";
import {
  StatCard,
  ProductCard,
  CartWidget,
} from "@/components/dashboard/DashboardWidgets";

export default function DashboardPage() {
  const t = text.dashboard;

  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await dashboardApi.getOverview();
        setData(response);
      } catch (err) {
        console.error("Error in DashboardPage:", err);
        setError("Failed to load dashboard data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="p-8 flex justify-center items-center h-64">
        <div className="text-lg text-gray-500">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-[30px] font-bold text-[#111827] mb-2 leading-9">
          {t.overview.title}
        </h1>
        <p className="text-gray-500">{t.overview.welcome}</p>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          label={t.overview.stat_active}
          value={data.stats.activeOrders}
          icon={<FiBox />}
        />
        <StatCard
          label={t.overview.stat_completed}
          value={data.stats.completedOrders}
          icon={<FiCheckCircle />}
        />
        <StatCard
          label={t.overview.stat_points}
          value={data.stats.rewardPoints.toLocaleString()}
          icon={<FiGift />}
        />
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <h3 className="text-lg font-bold mb-6">{t.recent_viewed.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.recentProducts.map((prod) => (
              <ProductCard key={prod.id} data={prod} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <CartWidget data={data.cart} />
          </div>
        </div>
      </div>
    </div>
  );
}
