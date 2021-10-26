import { useContext } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Timer from "./components/Timer/Timer";
import AppContext from "./store/AppContext";

export default function App() {

  const { appColor } = useContext(AppContext)

  let color = `container ${appColor}`

  console.log(color)

  return (
    <div className={color}>
      <NavBar />
      <Timer />
      <Footer />
    </div>
  );
}
