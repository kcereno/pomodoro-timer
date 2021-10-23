import { useContext } from "react";
import AppContext from "../../../store/AppContext";

import styles from "./TimerSettings.module.css";

export default function TimerSettings() {
  const { timer } = useContext(AppContext);
  const { setting, time, updateSetting } = timer;

  function clickHandler(e){
    const newSetting = e.target.value
    updateSetting(newSetting)
  }

  console.log(setting)

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
