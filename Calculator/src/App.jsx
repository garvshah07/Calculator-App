import "./App.css";
import CalScreen from "../src/Components/CallScreen/CalScreen";
import CallButtons from "./Components/CalButtons/CallButtons";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const buttonHandler = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const totalValue = calVal + buttonText;
      setCalVal(totalValue);
    }
  };

  return (
    <div className="container">
      <div className="cal-container">
        <CalScreen calVal={calVal} />
        <CallButtons onCallButtonHandler={buttonHandler} />
      </div>
    </div>
  );
}

export default App;
