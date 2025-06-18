import React, { useEffect } from "react";
import "./Notification.css";

function Notification({ message, type = "success", onClose }) {
  useEffect(() => {
    // Auto-hide notification after 3 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [onClose]);

  return message ? (
    <div className={`notification ${type}`}>{message}</div>
  ) : null;
}

export default Notification;
