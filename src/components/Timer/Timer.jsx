import styles from "./Timer.module.css";
import TimerClock from "./TimerClock/TimerClock";
import TImerControls from "./TimerControls/TimerControls";
import TimerMode from "./TimerMode/TimerMode";

export default function Timer() {
  return (
    <div className={styles.container}>
      <TimerMode />
      <TimerClock />
      <TImerControls />
    </div>
  );
}
