import React, { useState } from "react";

const AppContext = React.createContext({});

export const AppContextProvider = (props) => {
  const INITIAL_SETTING = "pomodoro";
  const INITIAL_SECONDS = 1500;

  const [setting, setSetting] = useState(INITIAL_SETTING);
  const [timerStarted, setTimerStarted] = useState(false);
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  const AppContextValue = {
    setting,
    setSetting,
    timerStarted,
    setTimerStarted,
    seconds,
    setSeconds,
  };

  return (
    <AppContext.Provider value={AppContextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
