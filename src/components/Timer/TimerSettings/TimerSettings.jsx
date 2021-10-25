import { useContext } from "react";
import AppContext from "../../../store/AppContext";

import styles from "./TimerSettings.module.css";

export default function TimerSettings() {
  const { setting, setSetting, setSeconds, setTimerStarted } =
    useContext(AppContext);

  function updateSetting(newSetting) {
    let newSeconds;

    if (newSetting === "pomodoro") {
      newSeconds = 1500;
    } else if (newSetting === "shortBreak") {
      newSeconds = 300;
    } else {
      newSeconds = 900;
    }

    setSetting(newSetting);
    setSeconds(newSeconds);
    setTimerStarted(false);
  }

  function clickHandler(e) {
    const newSetting = e.target.value;
    updateSetting(newSetting);
  }

  return (
    <div className={styles.container}>
      <button
        className={setting === "pomodoro" ? styles.active : null}
        onClick={clickHandler}
        value="pomodoro"
      >
        Pomodoro
      </button>
      <button
        className={setting === "shortBreak" ? styles.active : null}
        onClick={clickHandler}
        value="shortBreak"
      >
        Short Break
      </button>
      <button
        className={setting === "LongBreak" ? styles.active : null}
        onClick={clickHandler}
        value="LongBreak"
      >
        Long Break
      </button>
    </div>
  );
}
