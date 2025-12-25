import React from "react";
import { Share2 } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { TrafficSource } from "@/lib/types/affiliate";

const getIcon = (source: string) => {
  switch (source) {
    case "Facebook":
      return <FaFacebook className="w-4 h-4 text-blue-600" />;
    case "Twitter":
      return <FaTwitter className="w-4 h-4 text-sky-500" />;
    case "Instagram":
      return <FaInstagram className="w-4 h-4 text-pink-600" />;
    default:
      return <Share2 className="w-4 h-4 text-gray-500" />;
  }
};

export default function TrafficSourcesCard({
  sources,
}: {
  sources: TrafficSource[];
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-fit">
      <h3 className="font-bold text-gray-900 mb-5">Top Traffic Sources</h3>
      <div className="space-y-4">
        {sources.map((item) => (
          <div
            key={item.source}
            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3 text-gray-700 font-medium text-sm">
              {getIcon(item.source)} {item.source}
            </div>
            <div className="text-xs text-gray-500 font-medium">
              <span className="text-gray-900 font-bold">{item.clicks}</span>{" "}
              Clicks ·{" "}
              <span className="text-gray-900 font-bold">
                {item.conversions}
              </span>{" "}
              Conv
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
