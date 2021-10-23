import { useContext } from "react";
import AppContext from "../../../store/AppContext";
import "./TimerClock.module.css";

export default function TimerClock() {

  const { timerTime, timerIsRunning } = useContext(AppContext);

  const convertSeconds = (secs) => {
    let minutes = Math.floor(secs / 60);
    let seconds = secs % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };

  let time = convertSeconds(timerTime);

  return <p>{time}</p>;
}
