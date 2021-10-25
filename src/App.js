import { useContext } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Timer from "./components/Timer/Timer";
import AppContext from "./store/AppContext";

export default function App() {

  const { mode } = useContext(AppContext)

  console.log(mode)

  return (
    <div className="container">
      <NavBar />
      <Timer />
      <Footer />
    </div>
  );
}
