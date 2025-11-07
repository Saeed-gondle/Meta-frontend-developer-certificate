import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Handle number and decimal button clicks
  const handleInput = (value) => {
    setInput(input + value);
  };

  // Handle operation buttons
  const handleOperation = (operation) => {
    if (input === "") return;

    try {
      switch (operation) {
        case "add":
          const sum = parseFloat(result || 0) + parseFloat(input);
          setResult(sum);
          setInput("");
          break;
        case "subtract":
          const difference = parseFloat(result || input) - parseFloat(input);
          setResult(difference);
          setInput("");
          break;
        case "multiply":
          const product = parseFloat(result || 1) * parseFloat(input);
          setResult(product);
          setInput("");
          break;
        case "divide":
          if (parseFloat(input) === 0) {
            alert("Cannot divide by zero");
            return;
          }
          const quotient = parseFloat(result || input) / parseFloat(input);
          setResult(quotient);
          setInput("");
          break;
        default:
          break;
      }
    } catch (error) {
      alert("Invalid operation");
    }
  };

  // Reset input field
  const resetInput = () => {
    setInput("");
  };

  // Reset result
  const resetResult = () => {
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>Simplest Working Calculator</h1>

        {/* Result Display */}
        <div className="display result-display">{result}</div>

        {/* Input Display */}
        <input
          type="text"
          className="display input-display"
          value={input}
          readOnly
        />

        {/* Number Buttons */}
        <div className="number-pad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button
              key={num}
              className="number-btn"
              onClick={() => handleInput(num.toString())}
            >
              {num}
            </button>
          ))}
          <button className="number-btn" onClick={() => handleInput(".")}>
            .
          </button>
        </div>

        {/* Operation Buttons */}
        <div className="operation-buttons">
          <button
            className="operation-btn"
            onClick={() => handleOperation("add")}
          >
            add
          </button>
          <button
            className="operation-btn"
            onClick={() => handleOperation("subtract")}
          >
            subtract
          </button>
          <button
            className="operation-btn"
            onClick={() => handleOperation("multiply")}
          >
            multiply
          </button>
          <button
            className="operation-btn"
            onClick={() => handleOperation("divide")}
          >
            divide
          </button>
          <button className="reset-btn input-reset" onClick={resetInput}>
            reset input
          </button>
          <button className="reset-btn result-reset" onClick={resetResult}>
            reset result
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
