import { DailyPerformance } from "@/lib/types";

export default function PerformanceChart({
  data,
}: {
  data: DailyPerformance[];
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-6">
        Performance Over Time (Last 7 Days)
      </h3>

      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-4 text-sm">
            {/* Ngày tháng */}
            <div className="w-12 font-medium text-gray-500">{item.date}</div>

            {/* Thanh Progress Bars */}
            <div className="flex-1 space-y-1.5">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden w-full max-w-[70%]">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${item.clickPercentage}%` }}
                ></div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden w-full max-w-[50%]">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: `${item.conversionPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Số liệu chi tiết */}
            <div className="text-right flex items-center gap-4 text-xs sm:text-sm">
              <span className="text-gray-500 font-medium w-16 text-right">
                {item.clicks} clicks
              </span>
              <span className="text-gray-500 font-medium w-24 text-right">
                {item.conversions} conv
              </span>
              <span className="text-emerald-600 font-bold w-16 text-right">
                {item.earnings}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-6 text-xs font-medium text-gray-500">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div> Clicks
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>{" "}
          Conversions
        </div>
      </div>
    </div>
  );
}
