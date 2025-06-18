import React, { useState } from "react";
import Balance from "./components/Balance";
import Transactions from "./components/Transactions";
import Transfer from "./components/Transfer";
import Notification from "./components/Notification";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([]);
  const [notification, setNotification] = useState(null);

  const handleTransfer = (amount, recipient, type) => {
    if (amount <= 0) {
      setNotification({
        message: "Amount must be greater than 0",
        type: "error",
      });
      return;
    }
    if (type === "send" && amount > balance) {
      setNotification({ message: "Insufficient balance", type: "error" });
      return;
    }

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

    // Show success notification
    setNotification({
      message: `Successfully ${
        type === "send" ? "sent" : "received"
      } $${amount} ${type === "send" ? "to" : "from"} ${recipient}`,
      type: "success",
    });
  };

  return (
    <div className="app">
      <Notification
        message={notification?.message}
        type={notification?.type}
        onClose={() => setNotification(null)}
      />
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
