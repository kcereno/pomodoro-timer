import { useContext } from "react";
import AppContext from "../../../store/AppContext";
import styles from "./TimerControls.module.scss";

export default function TimerControls() {
  const { controls, timerStarted } =
    useContext(AppContext);

  const startButton = (
    <button onClick={controls.toggleTimer} className={styles.startButton}>
      Start
    </button>
  );

  const pauseEndButton = (
    <div className={styles.pauseEndButtons}>
      <button onClick={controls.toggleTimer}>Pause</button>
      <button onClick={controls.endTimer}>End</button>
    </div>
  );

  const timerControls = timerStarted ? pauseEndButton : startButton;

  return <div>{timerControls}</div>;
}
