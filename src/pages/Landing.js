import "../styles/landing.css";
import right from "../assets/images/rightImg.jpeg";
import left from "../assets/images/left.jpg";
import middle from "../assets/images/middle.jpeg";
export default function Home() {
  return (
    <div className="langingPage">
      <h1 className="landTitle">Evergreen Body Mod</h1>
      <div className="imgContainer">
        <img src={right} width="270" className="landImage"></img>
        <img src={middle} width="270" className="landImage"></img>
        <img src={left} width="270" className="landImage"></img>
      </div>
    </div>
  );
}
