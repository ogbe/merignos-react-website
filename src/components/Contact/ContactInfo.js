import location from "../../images/Contact/location.svg";
import phone from "../../images/Contact/phone.svg";
import envelope from "../../images/Contact/envelope.svg";

import "./ContactInfo.css";

export default function ContactInfo() {
  return (
    <div className="contactinfo">
      <h1>contact information</h1>
      <div>
        <span>
          <img src={location} alt="location icon" />
          <h4>lagos</h4>
        </span>
        <p>79b abba johnston cresent, off adeniyi jones, ikeja.</p>
        <a href="https://www.google.com/maps/place/Merignos+Consulting+and+Mentoring+Ltd/@6.6122443,3.3465874,19.61z/data=!4m6!3m5!1s0x103b93c9202acd91:0x7520123f164a565!8m2!3d6.6125823!4d3.3472599!16s%2Fg%2F11flmzf4hw"
          className="maplink"
        >
          Open in Google Maps >
        </a>
      </div>
      <div>
        <img src={phone} alt="phone icon" />
        <a href="tel:014536505">01 453 6505</a>
      </div>
      <div>
        <img src={envelope} alt="location icon" />
        <a href="mailto:info@merignos.com" className="email">
          info@merignos.com
        </a>
      </div>
    </div>
  );
}
