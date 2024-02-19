import "./App.css";
import CalScreen from "../src/Components/CallScreen/CalScreen";
import CallButtons from "./Components/CalButtons/CallButtons";

function App() {
  return (
    <div className="cal-container">
      <CalScreen />
      <CallButtons />
    </div>
  );
}

export default App;
