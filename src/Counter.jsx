import { useEffect, useState } from "react";
import "./counter.css";
function Counter() {
  const [total, setTotal] = useState(0);
  const [counters, setCounters] = useState([]);
  function create() {
    setCounters([
      ...counters,
      { id: counters.length + 1, count: 0, started: false },
    ]);
  }
  let intervalId;
  const StartStop = (id) => {
    const NewCounter = counters.map((counter) => {
      if (counter.id === id) {
        counter.started = !counter.started;
        if (counter.started) {
          intervalId = setInterval(() => {
            Increase(counter.id);
          }, 1000);
        } else {
          clearInterval(intervalId);
        }
      }
      return counter;
    });
    setCounters(NewCounter);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const Increase = (id) => {
    const NewCounter = counters.map((counter) => {
      if (counter.id === id) {
        counter.count++;
      }
      return counter;
    });
    setCounters(NewCounter);
    setTotal(NewCounter.reduce((total, counter) => total + counter.count, 0));
    console.log(NewCounter);
  };
  return (
    <div className="counter">
      <div className="counter-add">
        <button type="button" className="add-button" onClick={create}>
          Add Counter
        </button>
      </div>
      <div>
        {counters.map((counter) => (
          <div className="counter-container" key={counter.id}>
            <div className="counter-output">{counter.count}</div>
            <div className="btn__container">
              <div className="counter" key={counter.id}>
                <div className="counter-header">
                  Counter {counter.id}:
                  <button
                    className="start-stop-button"
                    onClick={() => StartStop(counter.id)}
                  >
                    {counter.started ? "Stop" : "Start"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total-container">Total: {total}</div>
    </div>
  );
}
export default Counter;
