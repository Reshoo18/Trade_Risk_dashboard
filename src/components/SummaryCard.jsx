import { TrendingUp } from "lucide-react";

const SummaryCard = ({ title, value, color }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">
          {title}
        </h3>

        <div className="bg-blue-50 p-2 rounded-xl">
          <TrendingUp size={20} className="text-blue-600" />
        </div>
      </div>

      <h2 className={`text-3xl font-bold mt-5 ${color}`}>
        {value}
      </h2>
    </div>
  );
};

export default SummaryCard;