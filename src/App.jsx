import EquityChart from "./components/EquityChart.jsx";
import RiskIndicator from "./components/RiskIndicator.jsx";
import SummaryCard from "./components/SummaryCard";
import TradeTable from "./components/TradeTable.jsx";
import { account, trades } from "./data/trade.js";
import { calculateStats } from "./utils/calculations.js";

function App() {
  const stats = calculateStats(account, trades);

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mb-10">
  <h1 className="text-5xl font-bold text-slate-800">
    Trader Risk Dashboard
  </h1>

  <p className="text-gray-500 mt-2">
    Monitor trading performance and account risk in real time.
  </p>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Current Balance"
          value={`$${stats.currentBalance.toLocaleString()}`}
          color="text-green-600"
        />

        <SummaryCard
          title="Total P&L"
          value={`+$${stats.totalPnL.toLocaleString()}`}
          color="text-green-600"
        />

        <SummaryCard
          title="Win Rate"
          value={`${stats.winRate}%`}
          color="text-blue-600"
        />

        <SummaryCard
          title="Current Drawdown"
          value={`$${stats.currentDrawdown.toLocaleString()}`}
          color="text-red-600"
        />
      </div>

      <RiskIndicator
  currentDrawdown={stats.currentDrawdown}
  remainingDrawdown={stats.remainingDrawdown}
  currentDayLoss={stats.currentDayLoss}
  remainingDailyLoss={stats.remainingDailyLoss}
  riskStatus={stats.riskStatus}
/>


      <TradeTable trades={trades} />
      <EquityChart
    trades={trades}
    startingBalance={account.startingBalance}
/>

    </div>

    
  );
}

export default App;