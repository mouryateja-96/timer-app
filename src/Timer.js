import React, { useState, useEffect } from "react";
import './App.css';

const Timer = ({ targetTime }) => {
  console.log(targetTime);
  const [seconds, setSeconds] = useState(targetTime);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const int = setInterval(() => {
      console.log(`${Date.now()} - paused: ${paused}`);
      if (!paused) {
        setSeconds(s => s - 1);
      }
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, [paused]);

  function startTimer() {
    setPaused(false);
  }
  function pauseTimer() {
    setPaused(true);
  }
  function resetTimer() {
    setPaused(true);
    setSeconds(targetTime);
    window.location.reload(false);
  }

  return (
    <div className="container">
      <input readOnly={true} id="timerInput" type="text" value={`${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`} />
      <br></br>
      <div className="buttons">
        <button className={paused ? "start" : "pause"} onClick={paused ? startTimer : pauseTimer}>
          {paused ? "Start" : "Pause"}
        </button>
        <button className="reset" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;