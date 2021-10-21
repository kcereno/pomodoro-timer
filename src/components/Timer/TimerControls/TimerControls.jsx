import { useContext } from "react";
import AppContext from "../../../store/AppContext";
import styles from "./TimerControls.module.scss";

export default function TImerControls() {
  const { toggleTimer, timerIsRunning } = useContext(AppContext);

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

  const controls = timerIsRunning ? pauseEndButton : startButton;

  return <div>{controls}</div>;
}
