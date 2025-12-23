import { AffiliateStat } from "@/lib/types/affiliate/affiliate";

export default function StatsGrid({ stats }: { stats: AffiliateStat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between"
        >
          <div>
            <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">
              {stat.value}
            </h3>
          </div>
          <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
            <stat.icon className="w-4 h-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
