<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
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
>>>>>>> 380df8d8d100b55aa402877312f6b4a15f904ffb
