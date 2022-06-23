import "../styles/landing.css";
import right from "../assets/images/rightImg.jpeg";
import left from "../assets/images/left.jpg";
import middle from "../assets/images/middle.jpeg";
import About from "./About"
export default function Home() {
  return (
    <div className="landingPage">
      {/* <h1 className="landTitle">EVERGREEN BODY MOD</h1> */}
      <div className="imgContainer">
        <img src={right} width="270" className="landImage"></img>
        <img src={middle} width="270" className="landImage"></img>
        <img src={left} width="270" className="landImage"></img>
      </div>
      <div className="textBox">
        {/* need to create a place where there is text on the page  */}
        <About />
        <p className="subText">Thank your for checking out our website!</p>
        <h3 className="allAboutSubTitle">All About You</h3>
        <p className="allAboutSubText">
          We take the time to have a personal connection and create a safe and
          inviting time. Our artists strive to create a lasting experience while
          providing people with quality jewerly in Puyallup.
        </p>
        {/* make the jewerly a link to create a place for the jewwelry page */}
      </div>
    </div>
  );
}
