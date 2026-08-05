const TradeTable = ({ trades }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">Trading Performance</h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Asset</th>
            <th className="text-left py-3">Position</th>
            <th className="text-right py-3">P&L</th>
          </tr>
        </thead>

        <tbody>
          {trades.map((trade) => (
            <tr key={trade.id} className="border-b last:border-none">
              <td className="py-4">{trade.asset}</td>

              <td className="py-4">{trade.type}</td>

              <td
                className={`py-4 text-right font-semibold ${
                  trade.pnl > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {trade.pnl > 0 ? "+" : ""}
                ${trade.pnl.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeTable;