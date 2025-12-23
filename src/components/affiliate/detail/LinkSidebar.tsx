import { Edit, PauseCircle, Trash2, Mail, Share2 } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/common/Button";
import { LinkDetailData } from "@/lib/types/affiliate/affiliate-detail";

export default function LinkSidebar({ data }: { data: LinkDetailData }) {
  return (
    <div className="space-y-6">
      {/* 1. Link Details Box */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4">Link Details</h3>
        <div className="space-y-4 text-sm">
          <div>
            <p className="text-xs text-gray-500 mb-1">Category</p>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-bold">
              {data.category}
            </span>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Commission Rate</p>
            <p className="font-bold text-gray-900">{data.commissionRate}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Created</p>
            <p className="font-medium text-gray-900">{data.createdAt}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Last Click</p>
            <p className="font-medium text-gray-900">{data.lastClick}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Original URL</p>
            <p className="text-emerald-600 truncate font-medium">
              {data.originalUrl}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Actions Box */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4">Actions</h3>
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-start gap-3 rounded-xl h-10 border-gray-200"
          >
            <Edit className="w-4 h-4 text-gray-500" /> Edit Link
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start gap-3 rounded-xl h-10 border-gray-200"
          >
            <PauseCircle className="w-4 h-4 text-gray-500" /> Pause Link
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start gap-3 rounded-xl h-10 border-red-100 text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4" /> Delete Link
          </Button>
        </div>
      </div>

      {/* 3. Share Box */}
      <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
            <Share2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-emerald-900">Share Your Link</h3>
        </div>
        <p className="text-xs text-emerald-700/80 mb-4 leading-relaxed">
          Maximize your earnings by sharing this link on your social networks.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button className="bg-white text-blue-600 border border-blue-100 hover:bg-blue-50 h-9 text-xs">
            <FaFacebook className="w-3.5 h-3.5 mr-2" /> Facebook
          </Button>
          <Button className="bg-white text-sky-500 border border-sky-100 hover:bg-sky-50 h-9 text-xs">
            <FaTwitter className="w-3.5 h-3.5 mr-2" /> Twitter
          </Button>
          <Button className="bg-white text-pink-600 border border-pink-100 hover:bg-pink-50 h-9 text-xs">
            <FaInstagram className="w-3.5 h-3.5 mr-2" /> Instagram
          </Button>
          <Button className="bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 h-9 text-xs">
            <Mail className="w-3.5 h-3.5 mr-2" /> Email
          </Button>
        </div>
      </div>
    </div>
  );
}
