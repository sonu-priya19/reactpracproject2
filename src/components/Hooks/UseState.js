import React, { useState } from 'react';
import './style.css'; // Adjust path if needed

const UseState = () => {
  const [count, setCount] = useState(15);

  return (
    <div className="use-state-container">
      <h1>Counter: {count}</h1>

      <div className="button-container">
        <button className="button2" onClick={() => setCount(count + 1)}>
          <span></span><span></span><span></span><span></span>
          INCR
        </button>

        <button className="button2" onClick={() => setCount(count - 1)}>
          <span></span><span></span><span></span><span></span>
          DECR
        </button>
      </div>
    </div>
  );
};

export default UseState;
