import { AffiliateBalance } from "@/lib/types/affiliate/affiliate";
import { Button } from "@/components/common/Button";

export default function BalanceSection({
  balance,
}: {
  balance: AffiliateBalance;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Pending Card */}
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
        <h3 className="text-gray-500 font-medium mb-2">Pending Commissions</h3>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {balance.pending}
        </div>
        <p className="text-sm text-gray-400 mb-6">
          Will be paid on next payout date
        </p>
        <Button variant="outline" className="mx-auto">
          View Details
        </Button>
      </div>

      {/* Available Card */}
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
        <h3 className="text-gray-500 font-medium mb-2">
          Available for Withdrawal
        </h3>
        <div className="text-4xl font-bold text-emerald-600 mb-2">
          {balance.available}
        </div>
        <p className="text-sm text-gray-400 mb-6">Ready to withdraw</p>
        <Button className="mx-auto bg-emerald-700 hover:bg-emerald-800 text-white">
          Request Payout
        </Button>
      </div>
    </div>
  );
}
