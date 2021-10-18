import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Timer from "./components/Timer/Timer";

function App() {
  return (
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
  );
}

export default App;
