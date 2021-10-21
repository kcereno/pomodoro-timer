import "./App.scss";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Timer from "./components/Timer/Timer";

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Timer />
      <Footer />
    </div>
  );
}
