import React, { useState } from "react";
import "./Transfer.css";

const Transfer = ({ onTransfer }) => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [error, setError] = useState("");
  const [transactionType, setTransactionType] = useState("send");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !recipient) {
      setError("Please fill in all fields");
      return;
    }
    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount");
      return;
    }
    onTransfer(parseFloat(amount), recipient, transactionType);
    setAmount("");
    setRecipient("");
    setError("");
  };

  return (
    <form className="transfer-form" onSubmit={handleSubmit}>
      <h3>Money Transfer</h3>
      <div className="transaction-type">
        <button
          type="button"
          className={`type-button ${
            transactionType === "send" ? "active" : ""
          }`}
          onClick={() => setTransactionType("send")}
        >
          Send Money
        </button>

        <button
          type="button"
          className={`type-button ${
            transactionType === "receive" ? "active" : ""
          }`}
          onClick={() => setTransactionType("receive")}
        >
          Receive Money
        </button>
      </div>
      <input
        type="text"
        placeholder={transactionType === "send" ? "Recipient" : "Sender"}
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {error && <div className="error-message">{error}</div>}

      <button type="submit" disabled={!amount || !recipient}>
        {transactionType === "send" ? "Send" : "Request"}
      </button>
    </form>
  );
};

export default Transfer;
