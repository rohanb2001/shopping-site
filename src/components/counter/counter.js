import classes from "./counter.module.css";

function Counter({ count, handleDecrement, handleIncrement }) {
  return (
    <>
      <div className={classes.counter}>
        <div>
          <button
            onClick={handleDecrement}
            className={count < 2 ? `${classes.disable}` : undefined}
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
