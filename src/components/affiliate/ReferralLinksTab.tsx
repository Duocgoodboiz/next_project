import { Copy, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/common/Button";
import { ReferralLinkItem } from "@/lib/types";
import Link from "next/link";

export default function ReferralLinksTab({
  links,
}: {
  links: ReferralLinkItem[];
}) {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="font-semibold text-gray-900 text-base">
            Your Referral Links
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Manage and share your links to earn.
          </p>
        </div>

        <Link href="/affiliate/links" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto h-9 text-xs bg-emerald-700 hover:bg-emerald-800 text-white gap-2 px-4 shadow-sm shadow-emerald-100">
            <ExternalLink className="w-3.5 h-3.5" /> View All Links
          </Button>
        </Link>
      </div>

      <div className="p-5 grid grid-cols-1 gap-5">
        {links.map((link) => (
          <div
            key={link.id}
            className="w-full border border-gray-100 rounded-xl p-4 sm:p-5 hover:border-emerald-200 transition-all hover:shadow-md bg-gray-50/30 flex flex-col"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <h4
                className="font-medium text-gray-900 text-base line-clamp-1"
                title={link.name}
              >
                {link.name}
              </h4>
              <div className="flex gap-2 shrink-0">
                <Button
                  variant="outline"
                  className="h-8 text-xs font-normal gap-2 px-3 bg-white hover:bg-gray-50 text-gray-600"
                >
                  <Copy className="w-3.5 h-3.5" />{" "}
                  <span className="hidden sm:inline">Copy</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-8 text-xs font-normal gap-2 px-3 bg-white hover:bg-gray-50 text-gray-600"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>

            {/* URL Box */}
            <div className="bg-white p-3 rounded-lg mb-5 border border-gray-200 shadow-sm">
              <code className="text-sm text-gray-600 font-mono break-all font-normal block">
                {link.url}
              </code>
            </div>

            {/* Stats Footer (đẩy xuống đáy thẻ bằng mt-auto) */}
            <div className="mt-auto grid grid-cols-3 gap-2 text-center border-t border-gray-200 pt-4">
              <div>
                <div className="font-bold text-gray-900 text-base sm:text-lg">
                  {link.clicks}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide mt-1 font-medium">
                  Clicks
                </div>
              </div>
              <div className="border-l border-gray-200">
                <div className="font-bold text-gray-900 text-base sm:text-lg">
                  {link.conversions}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide mt-1 font-medium">
                  Sales
                </div>
              </div>
              <div className="border-l border-gray-200">
                <div className="font-bold text-emerald-600 text-base sm:text-lg">
                  {link.earned}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide mt-1 font-medium">
                  Earned
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
