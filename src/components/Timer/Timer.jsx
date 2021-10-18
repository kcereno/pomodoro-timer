import ModeControls from "./ModeControls/ModeControls";
import styles from "./Timer.module.css";

export default function Timer() {
  return (
    <div className={styles.container}>
     <ModeControls />
        <div className={styles.clock}>
          <h1>Timer</h1>
        </div>
        <div className={styles.clockControls}>
          <h1>Timer Controls</h1>
        </div>
      </div>

  );
}
