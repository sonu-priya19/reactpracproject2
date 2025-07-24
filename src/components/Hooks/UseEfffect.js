import React, { useEffect, useState } from 'react';
import './style.css'; // Adjust path if needed

const UseEffect = () => {
  const [count, setCount] = useState(15);

  // Just a sample useEffect logic (optional)
  useEffect(() => {
    document.title = `chats(${count})`;
  }
  );
  return (
    <div className="use-state-container">
      <h1>Counter: {count}</h1>

      <div className="button-container">
        <button className="button2" onClick={() => setCount(count + 1)}>
          <span></span><span></span><span></span><span></span>
          INCR
        </button>
      </div>
    </div>
  );
};

export default UseEffect; // ✅ Export your component, not useEffect hook
