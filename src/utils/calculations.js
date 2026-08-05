export const calculateStats = (account, trades) => {
  const totalPnL = trades.reduce((sum, trade) => sum + trade.pnl, 0);

  const currentBalance = account.startingBalance + totalPnL;

  const winningTrades = trades.filter((trade) => trade.pnl > 0);
  const losingTrades = trades.filter((trade) => trade.pnl < 0);

  const winRate =
    trades.length > 0
      ? ((winningTrades.length / trades.length) * 100).toFixed(1)
      : 0;

  const largestWinningTrade = winningTrades.length
    ? Math.max(...winningTrades.map((trade) => trade.pnl))
    : 0;

  const largestLosingTrade = losingTrades.length
    ? Math.min(...losingTrades.map((trade) => trade.pnl))
    : 0;

  // Drawdown Calculation
  const currentDrawdown = Math.max(
    0,
    account.startingBalance - currentBalance
  );

  const remainingDrawdown =
    account.maximumDrawdown - currentDrawdown;

  // Today's Loss
  const currentDayLoss = Math.abs(
    losingTrades.reduce((sum, trade) => sum + trade.pnl, 0)
  );

  const remainingDailyLoss =
    account.dailyLossLimit - currentDayLoss;

  let riskStatus = "Safe";

  if (remainingDrawdown <= 2000 || remainingDailyLoss <= 1000) {
    riskStatus = "At Risk";
  } else if (remainingDrawdown <= 5000 || remainingDailyLoss <= 2500) {
    riskStatus = "Approaching Limit";
  }

  return {
    totalPnL,
    currentBalance,
    winningTrades: winningTrades.length,
    losingTrades: losingTrades.length,
    winRate,
    largestWinningTrade,
    largestLosingTrade,
    currentDrawdown,
    remainingDrawdown,
    currentDayLoss,
    remainingDailyLoss,
    riskStatus,
  };
};