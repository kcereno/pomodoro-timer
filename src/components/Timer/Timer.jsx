import styles from "./Timer.module.css";
import TimerClock from "./TimerClock/TimerClock";
import TImerControls from "./TimerControls/TimerControls";

import TimerSettings from "./TimerSettings/TimerSettings";

export default function Timer() {
  return (
    <div className={styles.container}>
      <TimerSettings />
      <TimerClock />
      <TImerControls />
    </div>
  );
}
