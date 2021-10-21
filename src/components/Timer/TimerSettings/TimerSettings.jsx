import styles from './TimerSettings.module.css'

export default function TimerSettings() {

    return (
        <div className={styles.container}>
            <button>Pomodoro</button>
            <button>Short Break</button>
            <button>Long Break</button>
        </div>
    )
}