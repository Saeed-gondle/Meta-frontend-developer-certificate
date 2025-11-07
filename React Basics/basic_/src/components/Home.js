import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <main className="main">
      <section className="welcome-section">
        <h2>Welcome to React!</h2>
        <p>
          This is my first React application where I'm testing basic features.
        </p>
      </section>

      {/* Testing State */}
      <section className="counter-section">
        <h3>Counter Feature</h3>
        <p>
          Button clicked: <strong>{count}</strong> times
        </p>
        <button onClick={handleClick}>Click Me!</button>
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </section>

      {/* Testing Input and State */}
      <section className="input-section">
        <h3>Input Feature</h3>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name && (
          <p>
            Hello, <strong>{name}</strong>! 👋
          </p>
        )}
      </section>

      {/* Testing Conditional Rendering */}
      <section className="conditional-section">
        <h3>Conditional Rendering</h3>
        {count > 5 ? (
          <p className="success">
            Great job! You clicked more than 5 times! 🎉
          </p>
        ) : (
          <p>Keep clicking to see a message!</p>
        )}
      </section>
    </main>
  );
}

export default Home;
