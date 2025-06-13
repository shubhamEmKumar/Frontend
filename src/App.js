import React, { useState } from "react";
import Balance from "./components/Balance";
import Transactions from "./components/Transactions";
import Transfer from "./components/Transfer";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([]);

  const handleTransfer = (amount, recipient, type) => {
    if (amount <= 0) return;
    if (type === "send" && amount > balance) return;

    const newAmount = type === "send" ? -amount : amount;

    setBalance((b) => b + newAmount);

    setTransactions([
      ...transactions,
      {
        id: Date.now(),
        recipient,
        amount: newAmount,
        type,
      },
    ]);
  };

  return (
    <div className="app">
      <div className="left-column">
        <h1>Banking App</h1>
        <Balance balance={balance} />
        <Transfer onTransfer={handleTransfer} />
      </div>

      <div className="right-column">
        <Transactions transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
