import React from "react";

function TipResult({ bill, myPercent, friendPercent }) {
  const avgPercent = (myPercent + friendPercent) / 2;
  return (
    <>
      <h1>
        You pay $ {+bill + avgPercent} (${+bill} + ${avgPercent} tip)
      </h1>
    </>
  );
}

export default TipResult;
