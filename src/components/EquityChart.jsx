import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const EquityChart = ({ trades, startingBalance }) => {
  let balance = startingBalance;

  const chartData = trades.map((trade, index) => {
    balance += trade.pnl;

    return {
      trade: `T${index + 1}`,
      balance,
    };
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-bold mb-5">Equity Curve</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="trade" />

          <YAxis
            domain={[(dataMin) => dataMin - 500, (dataMax) => dataMax + 500]}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EquityChart;
