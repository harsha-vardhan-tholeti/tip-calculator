import React from "react";

function Bill({ bill, setBill }) {
  const handleBill = (e) => {
    setBill(e.target.value);
  };

  return (
    <div>
      <h2>How much was the bill?</h2>
      <input type="number" value={bill} onChange={handleBill} />
    </div>
  );
}

export default Bill;
