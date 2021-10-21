import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Timer from "./components/Timer/Timer";

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Timer />
      <h1>Log</h1>
      <h1>Footer</h1>
    </div>
  );
}
