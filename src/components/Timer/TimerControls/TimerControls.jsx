import { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import AppContext from "../../../store/AppContext";
import styles from "./TimerControls.module.scss";

export default function TimerControls() {
  const { timerStarted, setTimerStarted, setSeconds, setting } =
    useContext(AppContext);

  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    let newTimerId = setInterval(() => {
      setSeconds((prevVal) => prevVal - 1);
    }, 1000);
    setTimerId(newTimerId);
  };

  const stopTimer = () => {
    clearInterval(timerId);
  };

  const toggleTimer = () => {
    if (!timerStarted) {
      startTimer();
    } else {
      stopTimer();
    }
    setTimerStarted((prevVal) => !prevVal);
  };

  useEffect(()=>{
    stopTimer()
  },[setting])

  const startButton = (
    <button onClick={toggleTimer} className={styles.startButton}>
      Start
    </button>
  );

  const pauseEndButton = (
    <div className={styles.pauseEndButtons}>
      <button onClick={toggleTimer}>Pause</button>
      <button>End</button>
    </div>
  );

  const controls = timerStarted ? pauseEndButton : startButton;

  return <div>{controls}</div>;
}


