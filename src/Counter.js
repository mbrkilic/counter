import React, { useState } from "react";
import "cirrus-ui";
import logo from "../src/gorsel/icon.png";

const Counter = () => {
  const initialValue = 0; 

  const [num, setNum] = useState(initialValue);
  const increaseCounter = () => {
    setNum(num + 1);
  };

  const decreaseCounter = () => {
    setNum(num - 1);
  };

  const resetCounter = () => {
    setNum(initialValue);
  };
  return (
    <div className="container">
      <div className="u-flex u-center h-100p">
        <div className="intro-card u-shadow-xl frame px-3 py-4">
          <div className="frame__body">
            <div className="u-flex u-center">
              <img src={logo} alt="counter_icon" className="logo" />
            </div>
            <h3 className="u-flex u-center">Counter: {num}</h3>
            <div>
              <button
                className="btn-success hover-grow u-round-xl p-4 u-shadow-xl u-text-center font-bold btn--lg"
                onClick={increaseCounter}
              >
                increase
              </button>
              <button
                className="btn-danger hover-grow u-round-xl p-4 u-shadow-xl u-text-center font-bold btn--lg"
                onClick={decreaseCounter}
                disabled={num===0}
              >
                decrease
              </button>
              <button
                className="outline btn-danger hover-grow u-round-xl p-4 u-shadow-xl u-text-center font-bold btn--lg"
                onClick={resetCounter}
                disabled={num===0}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
