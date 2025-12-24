"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Copy,
  CheckCircle2,
  MousePointer2,
  TrendingUp,
  DollarSign,
  BarChart3,
  Link as LinkIcon,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { MOCK_LINK_DETAIL } from "@/lib/data/mock/affiliate/affiliate-detail";
import PerformanceChart from "@/components/affiliate/detail/PerformanceChart";
import TrafficSourcesCard from "@/components/affiliate/detail/TrafficSourcesCard";
import LinkSidebar from "@/components/affiliate/detail/LinkSidebar";

export default function LinkDetailPage() {
  const data = MOCK_LINK_DETAIL;

  return (
    <div className="max-w-6xl mx-auto pb-12 space-y-6">
      {/* Header Navigation */}
      <div className="flex items-center gap-3 mb-2">
        <Link
          href="/affiliate/links"
          className="text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
        <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200 uppercase flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> {data.status}
        </span>
      </div>

      {/* Main Info Card */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <p className="text-gray-500 mb-4">{data.description}</p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          <div className="flex-1 w-full bg-gray-50 border border-gray-200 rounded-lg px-4 h-10 flex items-center gap-3">
            <LinkIcon className="w-4 h-4 text-gray-400 shrink-0" />
            <code className="text-emerald-700 font-medium font-mono text-sm flex-1 break-all truncate">
              {data.url}
            </code>
          </div>

          <Button className="w-fit bg-emerald-700 hover:bg-emerald-800 text-white gap-2 px-4 h-10 text-sm font-medium rounded-lg shadow-sm shadow-emerald-100 shrink-0 whitespace-nowrap">
            <Copy className="w-4 h-4" /> Copy Link
          </Button>
        </div>

        <p className="text-xs text-gray-400 font-mono">
          Link ID: {data.linkId}
        </p>

        <div className="mt-6 bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
          <div>
            <h4 className="font-bold text-emerald-900 text-sm">
              Link Approved
            </h4>
            <p className="text-xs text-emerald-700 mt-1">
              Approved by {data.approvalInfo.approvedBy} on{" "}
              {data.approvalInfo.date}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatsCard
          label="Total Clicks"
          value={data.stats.totalClicks}
          icon={MousePointer2}
          color="text-blue-600"
          bg="bg-blue-50"
        />
        <StatsCard
          label="Conversions"
          value={data.stats.conversions}
          icon={TrendingUp}
          color="text-purple-600"
          bg="bg-purple-50"
        />
        <StatsCard
          label="Earnings"
          value={data.stats.earnings}
          icon={DollarSign}
          color="text-emerald-600"
          bg="bg-emerald-50"
        />
        <StatsCard
          label="Conv. Rate"
          value={data.stats.conversionRate}
          icon={BarChart3}
          color="text-pink-600"
          bg="bg-pink-50"
        />
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <PerformanceChart data={data.performanceHistory} />
          <TrafficSourcesCard sources={data.trafficSources} />
        </div>
        <div className="lg:col-span-1">
          <LinkSidebar data={data} />
        </div>
      </div>
    </div>
  );
}

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  bg: string;
}

function StatsCard({ label, value, icon: Icon, color, bg }: StatsCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-full">
      <div className={`w-fit p-2.5 rounded-xl ${bg} ${color} mb-3`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-wide mt-1">
          {label}
        </p>
      </div>
    </div>
  );
}
