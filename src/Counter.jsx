import { useState } from "react";
import "./counter.css";

function Counter() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  function create() {
    setCounters([...counters, { id: counters.length + 1, value: 0 }]);
  }

  function increase(id) {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          return { id, value: counter.value + 1 };
        }
        return counter;
      })
    );
  }

  function reset(id) {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          return { id, value: 0 };
        }
        return counter;
      })
    );
  }

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
            <div className="counter-output">{counter.value}</div>
            <div className="btn__container">
              <button
                className="control__btn"
                onClick={() => increase(counter.id)}
              >
                Start Counter
              </button>
              <button className="reset" onClick={() => reset(counter.id)}>
                Reset
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
