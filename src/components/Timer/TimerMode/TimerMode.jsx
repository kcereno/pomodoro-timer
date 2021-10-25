import { useContext } from "react";
import AppContext from "../../../store/AppContext";

import styles from "./TimerMode.module.css";

export default function TimerMode() {
  const { mode, updateMode } = useContext(AppContext);

  function clickHandler(e) {
    const newMode = e.target.value;
    updateMode(newMode);
  }

  return (
    <div className={styles.container}>
      <button
        className={mode === "pomodoro" ? 'active' : null}
        onClick={clickHandler}
        value="pomodoro"
      >
        Pomodoro
      </button>
      <button
        className={mode === "shortBreak" ? 'active' : null}
        onClick={clickHandler}
        value="shortBreak"
      >
        Short Break
      </button>
      <button
        className={mode === "LongBreak" ? 'active' : null}
        onClick={clickHandler}
        value="LongBreak"
      >
        Long Break
      </button>
    </div>
  );
}
