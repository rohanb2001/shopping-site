import { useState } from "react";
import classes from "./counter.module.css";

function Counter() {
  const [count, setCount] = useState(1);

  function handleIncrement(event) {
    event.preventDefault();
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement(event) {
    event.preventDefault();
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <div className={classes.counter}>
        <div>
          <button
            onClick={handleDecrement}
            className={count < 2 && `${classes.disable}`}
          >
            -
          </button>
          <h5>{count}</h5>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
