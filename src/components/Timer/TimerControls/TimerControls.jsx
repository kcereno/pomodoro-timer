import styles from "./TimerControls.module.scss";

export default function TImerControls() {
  const startButton = <button className={styles.startButton}>Start</button>;

  const pauseEndButton = (
    <div className={styles.pauseEndButtons}>
      <button>Pause</button>
      <button>End</button>
    </div>
  );

  return (
    <div>
      {/* {startButton} */}
      {pauseEndButton}
    </div>
  );
}
