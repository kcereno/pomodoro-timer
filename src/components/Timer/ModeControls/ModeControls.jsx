import { useState } from "react";
import styles from "./ModeControls.module.css";

export default function ModeControls() {
  const [mode, setMode] = useState("pomodoro");

  const buttonClickHandler = (e) => {
    let mode = e.target.value;
    setMode(mode);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        <button
          className={mode === "pomodoro" && styles.active}
          onClick={buttonClickHandler}
          value="pomodoro"
        >
          Pomodoro
        </button>
        <button
          className={mode === "shortBreak" && styles.active}
          onClick={buttonClickHandler}
          value="shortBreak"
        >
          Short Break
        </button>
        <button
          className={mode === "longBreak" && styles.active}
          onClick={buttonClickHandler}
          value="longBreak"
        >
          Long Break
        </button>
      </div>
    </div>
  );
}
