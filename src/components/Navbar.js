import "../styles/navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/emptyIcon.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  // const path = window.location.pathname
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHam = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <div className="NavBarContainer">
      <div>
        <div className="logoContainer">
          <img src={logo} alt="evergreen logo" width="25%" className="Logo" />
        </div>
        <div className="hamburger">
          <GiHamburgerMenu />
        </div>
        <ul className="navBarLinkContainer">
          <li className="hoverUnderlineAnimate">
            <Link to="/">HOME</Link>
          </li>
          <li className="hoverUnderlineAnimate">
            <Link to="/about">ARTISTS</Link>
          </li>
          <li className="hoverUnderlineAnimate">
            <Link to="/gallery">POLICIES</Link>
          </li>
          <li className="hoverUnderlineAnimate">
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li className="hoverUnderlineAnimate">
            <Link to="/piercing">PIERCING</Link>
          </li>
          {/* <li className="hoverUnderlineAnimate">
          <Link to="/jewelry">SHOP</Link>
        </li> */}
          <li className="hoverUnderlineAnimate">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        {/* have to get an or statement that shows the hamburger icon */}

      </div>
    </div>
  );
}
