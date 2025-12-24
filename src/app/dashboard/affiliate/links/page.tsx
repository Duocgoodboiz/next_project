"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Search,
  CheckCircle,
  Clock,
  PauseCircle,
  XCircle,
  MousePointer2,
  TrendingUp,
  DollarSign,
  Eye,
  Link as LinkIcon,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { LinkStatus } from "@/lib/types";
import { cn } from "@/lib/constants/utils";
import { useAffiliateLinks } from "@/hooks/affiliate/useAffiliateLinks";

export default function AffiliateLinksPage() {
  const {
    stats,
    filteredLinks,
    filterStatus,
    setFilterStatus,
    searchQuery,
    setSearchQuery,
    getStatusCount,
  } = useAffiliateLinks();

  // Helper: Màu sắc cho Status Badge
  const getStatusColor = (status: LinkStatus) => {
    switch (status) {
      case "Active":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "Pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-100";
      case "Paused":
        return "bg-gray-50 text-gray-700 border-gray-100";
      case "Rejected":
        return "bg-red-50 text-red-700 border-red-100";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  // Helper: Icon cho Status
  const getStatusIcon = (status: LinkStatus) => {
    switch (status) {
      case "Active":
        return <CheckCircle className="w-3 h-3 mr-1" />;
      case "Pending":
        return <Clock className="w-3 h-3 mr-1" />;
      case "Paused":
        return <PauseCircle className="w-3 h-3 mr-1" />;
      case "Rejected":
        return <XCircle className="w-3 h-3 mr-1" />;
    }
  };

  return (
    <div className="space-y-8 w-[70%] pb-12">
      {/* === HEADER === */}
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Link
            href="/affiliate"
            className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors mt-1 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Affiliate Links
            </h1>
            <p className="text-base text-gray-500 mt-1">
              Manage and track your referral links
            </p>
          </div>
        </div>

        <Button className="bg-emerald-700 hover:bg-emerald-800 text-white gap-2 shadow-sm h-10 px-5 text-sm font-medium w-auto ml-auto rounded-xl">
          <Plus className="w-4 h-4" /> Create Link
        </Button>
      </div>

      {/* === TOP STATS CARDS === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-all">
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
              Total Clicks
            </p>
            <h3 className="text-4xl font-bold text-gray-900 mt-2">
              {stats.totalClicks}
            </h3>
          </div>
          <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
            <MousePointer2 className="w-7 h-7" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-all">
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
              Total Conversions
            </p>
            <h3 className="text-4xl font-bold text-gray-900 mt-2">
              {stats.totalConversions}
            </h3>
          </div>
          <div className="p-4 bg-purple-50 text-purple-600 rounded-xl">
            <TrendingUp className="w-7 h-7" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-all">
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
              Total Earnings
            </p>
            <h3 className="text-4xl font-bold text-emerald-600 mt-2">
              {stats.totalEarnings}
            </h3>
          </div>
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-xl">
            <DollarSign className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* === FILTER & SEARCH BAR === */}
      <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search links by name, ID, or URL..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 text-sm border-none outline-none focus:ring-0 text-gray-900 placeholder:text-gray-400 bg-transparent"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar p-1 border-t md:border-t-0 md:border-l border-gray-100 pt-2 md:pt-0">
          {["All Links", "Active", "Pending", "Paused", "Rejected"].map(
            (status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-xl whitespace-nowrap transition-colors flex items-center gap-2",
                  filterStatus === status
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-transparent"
                )}
              >
                {status}
                <span
                  className={`text-[10px] py-0.5 px-2 rounded-lg font-bold ${
                    filterStatus === status
                      ? "bg-emerald-800 text-emerald-100"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {getStatusCount(status)}
                </span>
              </button>
            )
          )}
        </div>
      </div>

      {/* === LINKS LIST === */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900 ml-1">
          Your Affiliate Links
        </h3>

        {filteredLinks.map((link) => (
          <div
            key={link.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:border-emerald-100 hover:shadow-md transition-all group"
          >
            {/* Header Card */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-900 text-xl">
                    {link.name}
                  </h3>
                  <span
                    className={cn(
                      "text-[10px] px-3 py-1 rounded-full border flex items-center font-bold uppercase tracking-wide",
                      getStatusColor(link.status)
                    )}
                  >
                    {getStatusIcon(link.status)} {link.status}
                  </span>
                  <span className="text-[10px] px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200 font-bold uppercase tracking-wide">
                    {link.category}
                  </span>
                </div>
                <p className="text-sm text-gray-400 font-mono">
                  Link ID: {link.linkId}
                </p>
              </div>

              <Link href={`/affiliate/links/${link.id}`}>
                <Button
                  variant="outline"
                  className="h-9 text-sm font-bold gap-2 bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 w-fit ml-auto shadow-sm transition-all rounded-xl px-4"
                >
                  <Eye className="w-4 h-4" /> View Details
                </Button>
              </Link>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-8 flex items-center gap-4 group-hover:bg-emerald-50/30 group-hover:border-emerald-100/50 transition-colors">
              <LinkIcon className="w-5 h-5 text-gray-400" />
              <code className="text-base text-emerald-700 font-medium break-all flex-1 font-mono">
                {link.url}
              </code>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-6">
              <div>
                <p className="font-bold text-gray-900 text-2xl">
                  {link.clicks}
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-500 font-bold mt-1.5">
                  Clicks
                </p>
              </div>
              <div className="md:border-l border-gray-100 md:pl-8">
                <p className="font-bold text-gray-900 text-2xl">
                  {link.conversions}
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-500 font-bold mt-1.5">
                  Conversions
                </p>
              </div>
              <div className="md:border-l border-gray-100 md:pl-8">
                <p className="font-bold text-emerald-600 text-2xl">
                  {link.earned}
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-500 font-bold mt-1.5">
                  Earnings
                </p>
              </div>
              <div className="md:border-l border-gray-100 md:pl-8">
                <p className="font-medium text-gray-900 text-base mt-1">
                  {link.createdAt}
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-500 font-bold mt-1.5">
                  Created Date
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {filteredLinks.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200">
            <div className="bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-gray-400" />
            </div>
            <p className="text-gray-900 font-medium text-lg">No links found</p>
            <p className="text-gray-500 text-sm mt-1">
              Try adjusting your search or filters.
            </p>
            <Button
              variant="outline"
              className="mt-5 rounded-xl"
              onClick={() => {
                setFilterStatus("All Links");
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
