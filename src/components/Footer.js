import { Link } from "react-router-dom";
import "../styles/footer.css"
export default function Footer() {
  return (
    <div className="footerContainer">
      <Link to="/" className="evergreenFooterLink">
       Evergreen Body Mod
      </Link>
      <ul className="footerLinkContainer">
        <li>
          <a href="https://m.facebook.com/Evergreen-Body-Mod-110421318127572/?ref=page_internal">Facebook</a>
        </li>
        <li>
          <a href="tel:253-256-7912">Phone</a>
        </li>
        <li>
          <a>Email</a>
        </li>
        <li>
          <a href="https://www.instagram.com/mattjolly13/?hl=en">Instagram</a>
        </li>
      </ul>
    </div>
  );
}
