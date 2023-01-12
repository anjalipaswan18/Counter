import { useState } from "react";
import "./counter.css";
function Counter() {
  const [counters, setCounters] = useState("");

  const addCounter = () => {
    setCounters([...counters]);
  };

  return (
    <div>
      <div className="counter-header">
        <button className="counter-button" onClick={addCounter}>
          Add Counter
        </button>
        <button className="start-stop-button"></button>

        <button className="pluse-button">0</button>
      </div>
    </div>
  );
}

export default Counter;
