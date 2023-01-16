import { useState } from "react";
import "./counter.css";
function Counter() {
  const [total, setTotal] = useState(0);
  const [counters, setCounters] = useState([]);
  function create() {
    var newCounter = {
      id: counters.length + 1,
      count: 0,
      started: false,
      intervalId: "",
    };
    setCounters([...counters, newCounter]);
    console.log(newCounter);
  }
  const StartStop = (id, intervalId) => {
    let singleItem = counters.filter((item) => {
      if (item.id === id) {
        return item;
      }
    });
    if (singleItem[0].started === false) {
      intervalId = setInterval(() => {
        singleItem[0].count++;
        singleItem[0].started = true;
        singleItem[0].intervalId = intervalId;
        setTotal(counters.reduce((total, counter) => total + counter.count, 0));
      }, 1000);
    } else if (singleItem[0].started === true) {
      clearInterval(intervalId);
      singleItem[0].started = false;
      singleItem[0].intervalId = null;
    }
  };
  return (
    <div className="counter">
      <div className="counter-add">
        <button type="button" className="add-button" onClick={create}>
          Add Counter
        </button>
        <div className="total-reset-container">
          <div className="total-container">{total}</div>
        </div>
      </div>
      <div className="counter-main">
        {counters.map((item) => (
          <div key={item.id} className="counter-container">
            <div className="counter-header">Counter {item.id}</div>
            <div className="counter-output">{item.count}</div>
            <div className="btn__container">
              {!item.started ? (
                <span
                  onClick={() =>
                    StartStop(item.id, item.intervalId, item.started)
                  }
                  className="start-button"
                >
                  Start
                </span>
              ) : (
                <span
                  onClick={() =>
                    StartStop(item.id, item.intervalId, item.started)
                  }
                  className="stop-button"
                >
                  Stop
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Counter;
