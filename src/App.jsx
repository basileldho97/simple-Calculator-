import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const clearLast = () => {
    setInput(input.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {["1", "2", "3", "/", "4", "5", "6", "*", "7", "8", "9", "-", ".", "0", "=", "+"].map((symbol) => (
          <button
            key={symbol}
            className={`button ${symbol === "=" ? "equals" : ""}`}
            onClick={() => (symbol === "=" ? calculateResult() : handleClick(symbol))}
          >
            {symbol}
          </button>
        ))}
        <button className="button clear" onClick={clearInput}>
          C
        </button>
        <button className="button backspace" onClick={clearLast}>
          DEL.
        </button>
      </div>
    </div>
  );
};

export default Calculator;
