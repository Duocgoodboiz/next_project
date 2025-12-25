import React from "react";
import { Download, Copy, FileText, Mail } from "lucide-react";
import { Button } from "@/components/common/Button";

export const MarketingTab = () => {
  const banners = [
    {
      id: 1,
      label: "728×90 Banner",
      style: {
        background:
          "linear-gradient(to right, rgb(13, 114, 79) 0%, oklch(0.627 0.194 149.214) 100%)",
        width: "310px",
        height: "80px",
      },
    },
    {
      id: 2,
      label: "300×250 Banner",
      style: {
        background:
          "linear-gradient(to right, oklch(0.623 0.214 259.815) 0%, oklch(0.558 0.288 302.321) 100%)",
        width: "192px",
        height: "128px",
      },
    },
  ];

  const textLinks = [
    {
      id: 1,
      title: "Product Link",
      content:
        '"Check out these amazing products at Store.com - Use my link for exclusive deals!"',
      action: "copy",
      type: "text",
    },
    {
      id: 2,
      title: "Email Template",
      content: "Professional email template for sharing with your network.",
      action: "download",
      type: "email",
    },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Banner Ads</h3>

        <div className="flex flex-col gap-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="p-4 rounded-xl border border-gray-100"
            >
              {/* Banner Preview Wrapper */}
              <div className="w-full overflow-x-auto pb-2 mb-4 scrollbar-hide">
                <div
                  className="rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0 mx-auto lg:mx-0"
                  style={{
                    background: banner.style.background,
                    width: banner.style.width,
                    height: banner.style.height,
                  }}
                >
                  {banner.label}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  shape="rounded"
                  className="h-9 px-4 text-xs font-medium border-gray-200 hover:bg-gray-50 text-gray-600 gap-2"
                >
                  <Download size={16} />
                  Download
                </Button>
                <Button
                  variant="outline"
                  shape="rounded"
                  className="h-9 px-4 text-xs font-medium border-gray-200 hover:bg-gray-50 text-gray-600 gap-2"
                  onClick={() =>
                    handleCopy(`<img src="..." alt="${banner.label}" />`)
                  }
                >
                  <Copy size={16} />
                  Copy Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Text Links</h3>

        <div className="flex flex-col gap-6">
          {textLinks.map((link) => (
            <div
              key={link.id}
              className="p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                {/* Icon Type */}
                {link.type === "text" ? (
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 border border-emerald-100">
                    <FileText className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600 border border-purple-100">
                    <Mail className="w-4 h-4" />
                  </div>
                )}
                <h4 className="font-semibold text-gray-900 text-sm">
                  {link.title}
                </h4>
              </div>

              <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                {link.content}
              </p>

              <Button
                variant="outline"
                shape="rounded"
                className="w-full h-9 px-4 text-xs font-medium border-gray-200 hover:bg-gray-50 text-gray-600 gap-2"
                onClick={() =>
                  link.action === "copy" ? handleCopy(link.content) : null
                }
              >
                {link.action === "copy" ? (
                  <Copy size={16} />
                ) : (
                  <Download size={16} />
                )}
                {link.action === "copy" ? "Copy Text" : "Download"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
