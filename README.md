 Trader Risk Dashboard

A responsive React dashboard built for the Tradescape Full Stack Developer Assignment. The dashboard helps traders quickly understand their account performance and risk status by deriving all metrics from trade data instead of hardcoded values.

---
 Live Demo

**Deployment in progress...**

---

 GitHub Repository

https://github.com/Reshoo18/Trade_Risk_dashboard

---

 Tech Stack

- React (Vite)
- Tailwind CSS
- Recharts
- Lucide React
- JavaScript (ES6)

---

 Features

- Dynamic Account Summary
- Risk Indicator
- Trading Performance Table
- Equity Curve (Additional Feature)
- Responsive Design
- Reusable React Components

---

 Calculated Metrics

- Current Balance
- Total P&L
- Winning Trades
- Losing Trades
- Win Rate
- Largest Winning Trade
- Largest Losing Trade
- Current Drawdown
- Remaining Drawdown
- Current Day Loss
- Remaining Daily Loss

All metrics are calculated dynamically from the trade data.

---

 Run Locally

```bash
git clone https://github.com/Reshoo18/Trade_Risk_dashboard.git
```

```bash
cd Trade_Risk_dashboard
```

```bash
npm install
```

```bash
npm run dev
```

---

 Folder Structure

```text
src/
│
├── components/
│   ├── SummaryCard.jsx
│   ├── RiskIndicator.jsx
│   ├── TradeTable.jsx
│   ├── EquityChart.jsx
│
├── data/
│   └── trades.js
│
├── utils/
│   └── calculations.js
│
├── App.jsx
└── main.jsx
```

---

# Product Questions

### 1. What is drawdown in trading?

Drawdown is the reduction in account value from its highest point to its lowest point before recovery. It helps traders understand how much capital has been lost and how close they are to their risk limits.

### 2. Why is remaining drawdown more important than current P&L?

Current P&L only shows today's profit or loss, whereas remaining drawdown tells the trader how much loss is still allowed before violating the account rules. It is a more useful metric for risk management.

### 3. If you had another day to improve this dashboard, what would you add?

- Asset-wise filtering
- Dark Mode
- Better chart interactions
- Real-time API integration
- Export reports (CSV/PDF)

---



**Reshoo Ranjan**

Full Stack Developer (MERN Stack)
