import React, { useState } from "react";

const AppContext = React.createContext({
  mode: "",
  updateMode: () => {},
  timerStarted: "",
  setTimerStarted: () => {},
  seconds: 0,
});

export const AppContextProvider = (props) => {
  const INITIAL_MODE = "pomodoro";
  const INITIAL_SECONDS = 1500;

  const [mode, setMode] = useState(INITIAL_MODE);
  const [timerStarted, setTimerStarted] = useState(false);
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    let newTimerId = setInterval(() => {
      setSeconds((prevVal) => prevVal - 1);
    }, 1000);
    setTimerId(newTimerId);
  };

  const stopTimer = () => {
    clearInterval(timerId);
    setTimerStarted(false);
  };

  const updateMode = (newMode) => {
    stopTimer();
    let newSeconds;

    if (newMode === "pomodoro") {
      newSeconds = 1500;
    } else if (newMode === "shortBreak") {
      newSeconds = 300;
    } else {
      newSeconds = 900;
    }

    setMode(newMode);
    setSeconds(newSeconds);
    setTimerStarted(false);
  };

  const toggleTimer = () => {
    if (!timerStarted) {
      startTimer();
    } else {
      stopTimer();
    }
    setTimerStarted((prevVal) => !prevVal);
  };

  const endTimer = () => {
    const endAlert = window.confirm(
      "Are you sure you want to finish the round early?"
    );

    if (endAlert) {
      stopTimer();
      if (mode === "pomodoro") {
        updateMode("shortBreak");
      } else {
        updateMode("pomodoro");
      }
    }
  };

  const AppContextValue = {
    mode,
    updateMode,
    timerStarted,
    setTimerStarted,
    seconds,
    setSeconds,
    controls: {
      toggleTimer,
      endTimer,
    },
  };

  return (
    <AppContext.Provider value={AppContextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
