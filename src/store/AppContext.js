import React, { useState } from "react";

const AppContext = React.createContext({
  timer: "",
  timerControls: {},
  updateClockTime: () => {},
});

export const AppContextProvider = (props) => {
  const [setting, setSetting] = useState("pomodoro");
  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  function updateSetting(newSetting) {

    if (newSetting === "pomodoro") {
      setTime(1500);
    } else if (newSetting === "shortBreak") {
      setTime(300);
    } else {
      setTime(900)
    }

    setSetting(newSetting)
  }

  const AppContextValue = {
    timer: {
      setting,
      time,
      isRunning,
      updateSetting,
    },
    timerControls: {
      start: () => {},
      pause: () => {},
      end: () => {},
    },
  };

  return (
    <AppContext.Provider value={AppContextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
