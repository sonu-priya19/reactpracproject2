import React, { useReducer } from 'react';
import './style.css';

const reducer = (count, action) => {
  return action;
};

const UseMyReducer = () => {
  const initialData = 10;
  const [count, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <h1>Counter: {count}</h1>

      <div className="button-container">
        <button
          className="button2"
          onClick={() => dispatch(count + 1)}
        >
          <span></span><span></span><span></span><span></span>
          INCR
        </button>

        <button
          className="button2"
          onClick={() => dispatch(count - 1)}
        >
          <span></span><span></span><span></span><span></span>
          DECR
        </button>
      </div>
    </>
  );
};

export default UseMyReducer;
