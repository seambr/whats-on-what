import React from "react";
import "./CustomButton.css";
function CustomButton({ className, children, color }) {
  return (
    <button
      className={`custom-btn ${className}`}
      style={{ backgroundColor: color }}>
      {children}
    </button>
  );
}

export default CustomButton;
