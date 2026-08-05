const RiskIndicator = ({
  currentDrawdown,
  remainingDrawdown,
  currentDayLoss,
  remainingDailyLoss,
  riskStatus,
}) => {
  const statusColor =
    riskStatus === "Safe"
      ? "bg-green-500"
      : riskStatus === "Approaching Limit"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Risk Indicator</h2>

        <span
          className={`px-4 py-2 rounded-full text-white font-semibold ${statusColor}`}
        >
          {riskStatus}
        </span>
      </div>

      <div className="mt-6 space-y-5">
        {/* Drawdown */}
        <div>
          <div className="flex justify-between mb-2">
            <span>Current Drawdown</span>
            <span>${currentDrawdown.toLocaleString()}</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-red-500 h-3 rounded-full"
              style={{
                width: `${(currentDrawdown / 10000) * 100}%`,
              }}
            ></div>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Remaining: ${remainingDrawdown.toLocaleString()}
          </p>
        </div>

    
        <div>
          <div className="flex justify-between mb-2">
            <span>Today's Loss</span>
            <span>${currentDayLoss.toLocaleString()}</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-orange-500 h-3 rounded-full"
              style={{
                width: `${(currentDayLoss / 5000) * 100}%`,
              }}
            ></div>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Remaining: ${remainingDailyLoss.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskIndicator;