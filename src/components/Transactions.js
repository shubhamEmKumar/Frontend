import React from "react";
import "./Transactions.css";

const Transactions = ({ transactions }) => (
  <div className="transactions">
    <h3>Transactions History</h3>
    {transactions.length === 0 ? (
      <p>No transactions yet.</p>
    ) : (
      <ul className="transaction-list">
        {transactions.map((tx) => (
          <li key={tx.id} className="transaction-item">
            <span className="transaction-info">
              {tx.type === "send"
                ? `Sent to ${tx.recipient}`
                : `Received from ${tx.recipient}`}
            </span>
            <span
              className={`transaction-amount ${
                tx.amount > 0 ? "positive" : "negative"
              }`}
            >
              {tx.amount > 0 ? "+" : "-"}${Math.abs(tx.amount).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Transactions;
