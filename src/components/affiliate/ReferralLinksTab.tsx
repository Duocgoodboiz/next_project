import React from "react";
import { Copy, Share2, ExternalLink } from "lucide-react";
import { ReferralLinkDetail } from "@/lib/types/affiliate";
import { Button } from "@/components/common/Button";

interface Props {
  links: ReferralLinkDetail[];
  onViewAll?: () => void;
}

export const ReferralLinksTab = ({ links, onViewAll }: Props) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      {/* Header: Title & Button */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-medium text-gray-900">
          Your Referral Links
        </h3>
        <Button
          variant="primary"
          shape="rounded"
          className="bg-[#0d724f] hover:bg-[#0a5c3f] text-white px-5 h-10 text-sm font-medium transition-colors flex items-center gap-2"
          onClick={onViewAll}
        >
          <ExternalLink size={16} />
          View All Links
        </Button>
      </div>

      {/* List Campaigns */}
      <div className="flex flex-col gap-6">
        {links.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-xl p-6 transition-all hover:shadow-sm bg-white"
          >
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <h4 className="font-semibold text-gray-900 text-base">
                {item.name}
              </h4>
              <div className="flex gap-3">
                <button
                  onClick={() => handleCopy(item.url)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <Copy size={16} className="text-gray-500" />
                  Copy
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                  <Share2 size={16} className="text-gray-500" />
                  Share
                </button>
              </div>
            </div>

            {/* Row 2 */}
            <div className="bg-gray-50 p-4 rounded-lg border border-transparent mb-6">
              <p className="text-sm text-gray-600 font-mono truncate select-all">
                {item.url}
              </p>
            </div>

            {/* Row 3 - Flex Row Stats */}
            <div className="flex flex-row items-center w-full pt-4 border-t border-gray-100">
              <div className="flex-1 text-center">
                <p className="text-xl font-bold text-gray-900 mb-1">
                  {item.clicks}
                </p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Clicks
                </p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-xl font-bold text-gray-900 mb-1">
                  {item.conversions}
                </p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Conversions
                </p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-xl font-bold text-emerald-600 mb-1">
                  {item.earnings}
                </p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Earnings
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
