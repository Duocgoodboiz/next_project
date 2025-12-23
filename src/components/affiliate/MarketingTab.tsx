import React from "react";
import { Download, Copy, FileText, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/common/Button";
import {
  MARKETING_BANNERS,
  MARKETING_RESOURCES,
} from "@/lib/api-client/mock/affiliate/affiliate-marketing";

export default function MarketingTab() {
  return (
    <div className="space-y-6">
      {/* 1. CONTAINER GRID: Bắt đầu ở đây */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* --- CỘT TRÁI: BANNER ADS --- */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full flex flex-col">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Banner Ads</h2>

          {/* Thêm space-y-6 và flex-1 để căn đều */}
          <div className="space-y-6 flex-1">
            {MARKETING_BANNERS.map((banner) => (
              <div
                key={banner.id}
                className="p-5 rounded-xl border border-gray-200 w-full"
              >
                <div
                  className={`flex items-center justify-center text-white font-bold text-lg rounded-lg mb-5 shadow-sm ${banner.colorClass}`}
                  style={{
                    height: banner.type === "horizontal" ? "90px" : "125px",
                    width: banner.type === "rectangle" ? "210px" : "100%",
                    maxWidth: "100%",
                  }}
                >
                  {banner.title}
                </div>
                <div className="flex flex-row items-center gap-3">
                  <Button
                    variant="outline"
                    className="w-fit h-9 px-4 text-xs font-semibold gap-2 rounded-lg border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </Button>
                  <Button
                    variant="outline"
                    className="w-fit h-9 px-4 text-xs font-semibold gap-2 rounded-lg border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    <Code2 className="w-3.5 h-3.5" /> Copy Code
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- CỘT PHẢI: TEXT LINKS --- */}
        {/* LƯU Ý: Phần này phải nằm TRONG thẻ div grid phía trên */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full flex flex-col">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Text Links</h2>

          <div className="space-y-6 flex-1">
            {MARKETING_RESOURCES.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl border border-gray-200 w-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.type === "text" ? (
                    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 border border-emerald-100">
                      <FileText className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600 border border-purple-100">
                      <Mail className="w-4 h-4" />
                    </div>
                  )}
                  <h4 className="font-bold text-gray-900 text-sm">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                  {item.description}
                </p>
                <div>
                  {item.type === "text" ? (
                    <Button
                      variant="outline"
                      className="w-full h-9 px-4 text-xs font-semibold gap-2 rounded-lg border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copy Text
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full h-9 px-4 text-xs font-semibold gap-2 rounded-lg border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      <Download className="w-3.5 h-3.5" /> Download
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 2. KẾT THÚC GRID: Đóng thẻ div grid ở tận cùng này mới đúng */}
    </div>
  );
}
