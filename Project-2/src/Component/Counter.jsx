import React, { useEffect, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect is running");
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
        <center>

        <h1>Counter</h1>

    <div className="main">
      <button className="decrement" onClick={decrement}><i class="ri-arrow-down-line"></i></button>
      <span className="count">{count}</span>
      <button className="increment" onClick={increment}><i class="ri-arrow-up-line increment-i"></i></button>
    </div>

    <button className="reset-button" onClick={reset}>Reset</button>
    </center>

    </div>

  );
}
