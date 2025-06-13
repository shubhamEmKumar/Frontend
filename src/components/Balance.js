import React from "react";

const Balance = ({ balance }) => (
  <div className="balance">
    <div className="balance-label">Current Balance</div>
    <div className="balance-amount">${balance.toFixed(2)}</div>
  </div>
);

export default Balance;
