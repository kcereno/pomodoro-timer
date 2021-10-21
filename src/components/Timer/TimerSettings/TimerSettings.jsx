import { useContext } from "react";
import AppContext from "../../../store/AppContext";

import styles from "./TimerSettings.module.css";

export default function TimerSettings() {
  const { timerSetting, updateSetting } = useContext(AppContext);

  const clickHandler = (e) => {
    const newSetting = e.target.value;
    updateSetting(newSetting);
  };

  return (
    <div className={styles.container}>
      <button
        className={timerSetting === "pomodoro" ? styles.active : null}
        onClick={clickHandler}
        value="pomodoro"
      >
        Pomodoro
      </button>
      <button
        className={timerSetting === "shortBreak" ? styles.active : null}
        onClick={clickHandler}
        value="shortBreak"
      >
        Short Break
      </button>
      <button
        className={timerSetting === "LongBreak" ? styles.active : null}
        onClick={clickHandler}
        value="LongBreak"
      >
        Long Break
      </button>
    </div>
  );
}
