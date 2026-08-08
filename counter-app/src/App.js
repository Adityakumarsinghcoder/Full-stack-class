import React, { useState } from "react";
import "./App.css";

function App() {

  // Creates state variable count
  const [count, setCount] = useState(0);

  // Increase count
  const increment = () => {
    setCount(count + 1);
  };

  // Decrease count
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset count
  const reset = () => {
    setCount(0);
  };

  return (

    <div className="container">

      <h1>React Counter</h1>

      <h2
        style={{
          color: count < 0 ? "red" : "green"
        }}
      >
        {count}
      </h2>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>

    </div>

  );
}

export default App;