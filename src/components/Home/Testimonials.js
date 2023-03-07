import { Link } from "react-router-dom";

import CarouselComponent from "./Carousel.js";
import Button from "../Button.js";

import amazonlogo from "../../images/Testimonials/amazonlogo.svg";
import ebay from "../../images/Testimonials/ebay.svg";
import windowsphonelogo from "../../images/Testimonials/windowsphonelogo.svg";
import dots from "../../images/Testimonials/dots.svg";

import "./Testimonials.css";

export default function Testimonial() {
  return (
    <section className="testimonials">
      <h1>testimonials</h1>
      <p>what our customers are saying about our services</p>
      <div>
        <aside className="carousel-container">
          <img src={dots} alt="dots" />
          <CarouselComponent />
        </aside>
        <aside>
          <p>
            trusted by more than <span>8000</span> businesses in 20 countries.
          </p>
          <Link to="/contact">
            <Button btnClassName="outline">meet our clients</Button>
          </Link>
          <div className="companies">
            <img src={amazonlogo} alt="Amazon logo" />
            <img src={ebay} alt="Ebay logo" />
            <img src={windowsphonelogo} alt="Windows phone logo" />
          </div>
        </aside>
      </div>
    </section>
  );
}
