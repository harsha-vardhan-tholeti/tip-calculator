import React from "react";

function Button({ children, handleClear }) {
  return <button onClick={handleClear}>{children}</button>;
}

export default Button;
