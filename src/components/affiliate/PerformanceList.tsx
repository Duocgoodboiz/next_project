import { CampaignPerformance } from "@/lib/types/affiliate/affiliate";

export default function PerformanceList({
  data,
}: {
  data: CampaignPerformance[];
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="font-bold text-gray-900">Recent Performance</h3>
      </div>
      <div className="divide-y divide-gray-50">
        {data.map((item) => (
          <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                <div className="flex gap-4 mt-1 text-xs text-gray-500">
                  <span>{item.clicks} clicks</span>
                  <span>{item.conversions} conversions</span>
                </div>
              </div>
              <div className="text-emerald-600 font-bold text-sm">
                {item.earned}{" "}
                <span className="text-gray-400 font-normal">earned</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
