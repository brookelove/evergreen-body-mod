import { Link } from "react-router-dom";
import "../styles/footer.css";
import { FaFacebook, FaPhone, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <div className="footerContainer">
      {/* <Link to="/" className="evergreenFooterLink">
        Evergreen Body Mod
      </Link> */}
      <ul className="footerLinkContainer">
        <li>
          <a href="https://m.facebook.com/Evergreen-Body-Mod-110421318127572/?ref=page_internal">
            <FaFacebook size={40} />
          </a>
        </li>
        <li>
          <a href="tel:253-256-7912">
            <FaPhone size={40} />
          </a>
        </li>
        <li>
          <a>
            {" "}
            <MdEmail size={40} />{" "}
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mattjolly13/?hl=en">
            <FaInstagramSquare size={40} />
          </a>
        </li>
      </ul>
    </div>
  );
}
