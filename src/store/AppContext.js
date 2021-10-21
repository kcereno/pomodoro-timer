import React, { useState } from "react";

const AppContext = React.createContext({
  timerSetting: "",
  updateSetting: () => {},
  timerTime: 0,
  updateTimerTime: () => {},
  timerIsRunning: null,
  startTimer: () => {},
  pauseTimer: () => {},
  endClock: () => {},
});

export const AppContextProvider = (props) => {
  const [setting, setSetting] = useState("pomodoro");
  const [time, setTime] = useState(1500);
  const [timerIsRunning, setTimerIsRunning] = useState(false);

  const updateSetting = (newSetting) => {
    setSetting(newSetting);

    if (newSetting === "pomodoro") {
      setTime(1500);
    } else if (newSetting === "shortBreak") {
      setTime(300);
    } else {
      setTime(900);
    }
  };

  const toggleTimer = () => {
    const startTimer = () => setTime((prevVal) => prevVal - 1);

    if (!timerIsRunning) {
      setInterval(() => {
        startTimer();
      }, 1000);
    } else {
      clearInterval(startTimer);
    }

    setTimerIsRunning((prevVal) => !prevVal);
  };

  const AppContextValue = {
    timerSetting: setting,
    timerTime: time,
    updateSetting,
    toggleTimer,
    timerIsRunning,
  };

  return (
    <AppContext.Provider value={AppContextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
