import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Timer from "./components/Timer/Timer";
import AppContext from "./store/app-context";

function App() {
  
  const [mode, setMode] = useState("pomodoro");

  let appStates = {
    mode,
    setMode,
  };

  return (
    <AppContext.Provider value={appStates}>
      <div className="App">
        <div className="container">
          <NavBar />
          <Timer />
          <div className="tracker">
            <h1>tracker</h1>
          </div>
          <div className="footer">
            <h1>footer</h1>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
