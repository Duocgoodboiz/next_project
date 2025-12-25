import React, { useState } from "react";
import {
  ArrowLeft,
  Plus,
  Search,
  Eye,
  MousePointer2,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { ReferralLinkDetail, LinkStatus } from "@/lib/types/affiliate";

interface Props {
  links: ReferralLinkDetail[];
  onBack: () => void;

  onViewDetail: (linkId: string) => void;
}

export const AffiliateLinksFullList = ({
  links,
  onBack,
  onViewDetail,
}: Props) => {
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLinks = links.filter((link) => {
    const matchesStatus =
      filterStatus === "All" || link.status === filterStatus;

    const linkTitle = (link as unknown as { title?: string }).title;
    const safeName = (link.name || linkTitle || "").toLowerCase();
    const safeId = (link.id || "").toLowerCase();
    const searchLower = searchTerm.toLowerCase();

    const matchesSearch =
      safeName.includes(searchLower) || safeId.includes(searchLower);
    return matchesStatus && matchesSearch;
  });

  const getCount = (status: string) => {
    if (status === "All") return links.length;
    return links.filter((l) => l.status === status).length;
  };

  const getStatusColor = (status: LinkStatus) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 border-green-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Paused":
        return "bg-gray-100 text-gray-700 border-gray-200";
      case "Rejected":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-start gap-3">
          <button
            onClick={onBack}
            className="mt-1 p-2 hover:bg-white hover:shadow-sm rounded-full transition-all text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Affiliate Links
            </h1>
            <p className="text-gray-500 text-sm">
              Manage and track your referral links
            </p>
          </div>
        </div>
        <Button
          variant="primary"
          shape="rounded"
          className="bg-[#0d724f] hover:bg-[#0a5c3f] text-white gap-2 px-5 h-10 font-medium shadow-sm transition-all hover:shadow-md"
        >
          <Plus size={18} /> Create Link
        </Button>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            label: "Total Clicks",
            value: "892",
            icon: <MousePointer2 className="w-5 h-5 text-blue-500" />,
          },
          {
            label: "Total Conversions",
            value: "115",
            icon: <TrendingUp className="w-5 h-5 text-green-500" />,
          },
          {
            label: "Total Earnings",
            value: "$748.20",
            icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">
                {stat.label}
              </p>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            </div>
            <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* SEARCH & FILTER */}
      <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-row items-center gap-3 p-1">
          <div className="relative w-75 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search links..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border-none bg-transparent focus:outline-none focus:ring-0 text-sm text-gray-700 placeholder:text-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="h-6 w-px bg-gray-200 shrink-0"></div>
          <div className="flex-1 flex flex-row items-center gap-2 overflow-x-auto scrollbar-hide">
            {["All", "Active", "Pending", "Paused", "Rejected"].map((tab) => {
              const isActive = filterStatus === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setFilterStatus(tab)}
                  style={{
                    backgroundColor: isActive ? "#0d724f" : "",
                    color: isActive ? "#ffffff" : "",
                  }}
                  className={`
                                px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap shrink-0
                                ${
                                  isActive
                                    ? "shadow-sm"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }
                            `}
                >
                  {tab === "All" ? "All Links" : tab} ({getCount(tab)})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* LINKS LIST */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-bold text-gray-900 mb-6 text-lg">
          Your Affiliate Links
        </h3>
        <div className="flex flex-col gap-6">
          {filteredLinks.map((item) => {
            const safeName =
              item.name ||
              (item as unknown as { title?: string }).title ||
              "Untitled Link";
            return (
              <div
                key={item.id}
                className="rounded-xl border border-gray-200 p-6 hover:border-[#0d724f]/30 hover:shadow-md transition-all duration-200 group bg-white"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#0d724f] transition-colors">
                      {safeName}
                    </h4>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200">
                      {item.category}
                    </span>
                  </div>

                  {/* --- NÚT VIEW DETAIL ĐÃ ĐƯỢC GẮN SỰ KIỆN TẠI ĐÂY --- */}
                  <Button
                    variant="outline"
                    shape="rounded"
                    className="text-xs h-8 px-3 gap-2 border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => onViewDetail(item.id)}
                  >
                    <Eye size={14} /> View Details
                  </Button>
                  {/* --------------------------------------------------- */}
                </div>
                {/* ... Các phần hiển thị thông số khác giữ nguyên ... */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-5 border-t border-gray-100">
                  <div>
                    <p className="text-[11px] text-gray-500 font-bold mb-1">
                      CLICKS
                    </p>
                    <p className="text-xl font-bold">{item.clicks}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 font-bold mb-1">
                      CONVERSIONS
                    </p>
                    <p className="text-xl font-bold">{item.conversions}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 font-bold mb-1">
                      EARNINGS
                    </p>
                    <p className="text-xl font-bold text-emerald-600">
                      {item.earnings}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 font-bold mb-1">
                      CREATED
                    </p>
                    <p className="text-sm font-medium mt-1">{item.createdAt}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
