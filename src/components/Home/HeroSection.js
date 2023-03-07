import { Link } from "react-router-dom";

import Button from "../Button.js";
import heroimg from "../../images/Hero/heroimg.svg";
import heroimg1 from "../../images/Hero/heroimg1.svg";
import heroimg2 from "../../images/Hero/heroimg2.svg";

import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <aside className="hero-imgs">
        <img src={heroimg2} alt="hero 2" />
        <img src={heroimg1} alt="hero 1" />
        <img src={heroimg} alt="hero" />
      </aside>
      <aside className="text">
        <h1>the foremost mentoring and consulting brand</h1>
        <p>
          we give and invest in the most accepted currency of the world,
          Knowledge.
        </p>
        <span>
          <Link to="/company">
            <Button btnClassName="outline">know more</Button>
          </Link>
          <Link to="/signup">
            <Button btnClassName="secondary">get started</Button>
          </Link>
        </span>
      </aside>
    </section>
  );
}
