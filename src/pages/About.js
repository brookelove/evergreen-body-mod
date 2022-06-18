import "../styles/about.css";
import aboutUs from "../assets/images/about.jpeg";
export default function About() {
  return (
    <div className="aboutContainer">
      <img src={aboutUs} width="300" className="aboutImage"></img>
      <div className="textContainer">
        <h1 className="aboutTitle">AboutUs</h1>
        <h3 className="dateText">Opened in 2022</h3>
        <p className="aboutBlurb">
          We aim to create an inviting and welcoming environemt for our
          customers
        </p>
      </div>
    </div>
  );
}
