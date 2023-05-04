import React from "react";

import "./Toast.css";

function Toast({ isVisible, message }) {
  return isVisible && <div className="toast">{message}</div>;
}

export default Toast;
