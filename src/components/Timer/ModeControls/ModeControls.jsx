import { useContext } from "react";
import AppContext from "../../../store/app-context";
import styles from "./ModeControls.module.css";

export default function ModeControls() {
  const appCtx = useContext(AppContext);
  const { mode, setMode } = appCtx;

  const buttonClickHandler = (e) => {
    let mode = e.target.value;
    setMode(mode);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        <button
          className={mode === "pomodoro" ? styles.active : null}
          onClick={buttonClickHandler}
          value="pomodoro"
        >
          Pomodoro
        </button>
        <button
          className={mode === "shortBreak" ? styles.active : null}
          onClick={buttonClickHandler}
          value="shortBreak"
        >
          Short Break
        </button>
        <button
          className={mode === "longBreak" ? styles.active : null}
          onClick={buttonClickHandler}
          value="longBreak"
        >
          Long Break
        </button>
      </div>
    </div>
  );
}
