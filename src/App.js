import './App.css';
import React, { useRef } from "react";
import { createRoot } from 'react-dom/client';

function App() {

  const inputRef = useRef(null);


  const TimeInput = () => {
    const [value, setValue] = React.useState("03:00");
    const onChange = (event) => {
      setValue(event.target.value);
    };

    const onBlur = (event) => {
      const value = event.target.value;
      const seconds = Math.max(0, getSecondsFromHHMMSS(value));

      const time = toHHMMSS(seconds);
      setValue(time);
    };

    const getSecondsFromHHMMSS = (value) => {
      const [str1, str2, str3] = value.split(":");

      const val1 = Number(str1);
      const val2 = Number(str2);
      const val3 = Number(str3);

      if (!isNaN(val1) && isNaN(val2) && isNaN(val3)) {
        return val1;
      }

      if (!isNaN(val1) && !isNaN(val2) && isNaN(val3)) {
        return val1 * 60 + val2;
      }

      if (!isNaN(val1) && !isNaN(val2) && !isNaN(val3)) {
        return val1 * 60 * 60 + val2 * 60 + val3;
      }

      return 0;
    };

    const toHHMMSS = (secs) => {
      const secNum = parseInt(secs.toString(), 10);
      const hours = Math.floor(secNum / 3600);
      const minutes = Math.floor(secNum / 60) % 60;
      const seconds = secNum % 60;

      return [hours, minutes, seconds]
        .map((val) => (val < 10 ? `0${val}` : val))
        .filter((val, index) => val !== "00" || index > 0)
        .join(":")
        .replace(/^0/, "");
    };

    

    return (
      <div className="container">
        <input id="timerInput" ref={inputRef} type="text" onChange={onChange} onBlur={onBlur} value={value} />
        <br></br>
        <div className="buttons">
          <button onClick={handleStartClick} className="start">Start</button>
          <button onClick={() => null} className="reset">Pause</button>
          <button onClick={() => null} className="start">Continue</button>
          <button onClick={() => null} className="reset">Reset</button>
        </div>
      </div>
    );
  };

  const handleStartClick = () => {
    const selectedTimeValue = inputRef.current.value;
    console.log(selectedTimeValue);
  }

  const root = createRoot(document.getElementById('root'));
  root.render(<TimeInput />);

}

export default App;
