import React, { useState, useEffect } from "react";

import "./Dice.css";

function Dice() {
  const [num, setNum] = useState(1);
  const [tick, setTick] = useState(0);
  const tickTimes = 40;

  useEffect(
    () => {
      if (tick > tickTimes) {
        return;
      }

      const next = Math.floor(Math.random() * 6) + 1;
      requestAnimationFrame(() => {
        setNum(next);
        setTick(t => t + 1);
      });
    },
    [tick]
  );

  const roll = () => {
    setTick(0);
  };

  return (
    <div className="App">
      <div class="num">{num}</div>
      <button onClick={roll}>Roll</button>
      <p>click to roll again</p>
    </div>
  );
}

export default Dice;