import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, increaseBy } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>count: {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(increaseBy(5));
        }}
      >
        Increase by 5
      </button>
    </div>
  );
};

export default CounterView;
