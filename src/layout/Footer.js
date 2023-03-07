import { Link } from "react-router-dom";

import footerlogo from "../images/Footer/footerlogo.svg";
import FacebookIcon from "../images/Footer/FacebookIcon.svg";
import InstagramIcon from "../images/Footer/InstagramIcon.svg";
import LinkedinIcon from "../images/Footer/LinkedinIcon.svg";
import TwitterIcon from "../images/Footer/TwitterIcon.svg";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">
            <img src={footerlogo} alt="footer logo" />
          </Link>
          <Link to="/about" className="about-link">
            we are the foremost wealth education institution in West Africa
          </Link>
        </li>
        <li>
          <span>Solutions</span>
          <ul>
            <li>
              <Link to="/mlm">MLM</Link>
            </li>
            <li>
              <Link to="/e-learning">E-learning</Link>
            </li>
            <li>
              <Link to="/ads&promotion">Ads/Promotion</Link>
            </li>
          </ul>
        </li>
        <li>
          <span>Company</span>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/FAQ">FAQ</Link>
            </li>
          </ul>
        </li>
        <li>
          <span>Legal</span>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </li>
        <li>
          <span>Contact</span>
          <ul>
            <li>
              <a href="mailto:info@merignos.com" className="email">
                info@merignos.com
              </a>
            </li>
            <li>
              <a href="tel:01 453 6505">01 453 6505</a>
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <span>Lagos</span>
          <p>79b Akinola Cole Cresent, Off Adeniyi Jones, Ikeja.</p>
        </li>
        <li>
          <span>Lagos</span>
          <p>12 Abba Johnston Cresent, Off Adeniyi Jones, Ikeja.</p>
        </li>
        <li>
          <span>Social</span>
          <div>
            <a href="https://facebook.com">
              <img src={FacebookIcon} alt="Facebook Icon" />
            </a>
            <a href="https://twitter.com">
              <img src={TwitterIcon} alt="Twitter Icon" />
            </a>
            <a href="https://instagram.com">
              <img src={InstagramIcon} alt="Instagram Icon" />
            </a>
            <a href="https://linkedin.com">
              <img src={LinkedinIcon} alt="LinkedIn Icon" />
            </a>
          </div>
        </li>
        <li className="copywright">&copy; 2019 Merignos LTD.</li>
      </ul>
    </footer>
  );
}
