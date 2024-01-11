import { useState } from "react";
import "./App.css";
import ServiceInput from "./components/service-input/ServiceInput";
import Bill from "./components/bill/Bill";
import Button from "./components/button/Button";
import TipResult from "./components/tip-result.js/TipResult";

function App() {
  const [bill, setBill] = useState("");
  const [myPercent, setMyPercent] = useState(0);
  const [friendPercent, setFriendPercent] = useState(0);
  const handleClear = () => {
    setBill("");
    setMyPercent(0);
    setFriendPercent(0);
  };
  return (
    <>
      <Bill bill={bill} setBill={setBill} />
      <ServiceInput setPercent={setMyPercent} />
      <ServiceInput setPercent={setFriendPercent} friend={true} />
      <TipResult
        bill={bill}
        myPercent={myPercent}
        friendPercent={friendPercent}
      />
      <Button children={"Reset"} handleClear={handleClear} />
    </>
  );
}

export default App;
