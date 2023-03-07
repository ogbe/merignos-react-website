import blackdots from "../../images/About/blackdots.svg";
import johnpaul1 from "../../images/About/johnpaul1.jpg";
import johnpaul2 from "../../images/About/johnpaul2.jpg";
import johnpaul3 from "../../images/About/johnpaul3.jpg";
import johnpaul4 from "../../images/About/johnpaul4.jpg";

import "./LeadersSection.css";

export default function LeadersSection() {
  return (
    <section className="leaders">
      <h1>meet our leaders</h1>
      <img src={blackdots} alt="black dots" />
      <ul>
        <span>
          <li>
            <img src={johnpaul1} alt="Johnpaul 1" />
            <p className="name">johnpaul akotomeh</p>
            <p className="title">head of sales</p>
          </li>
          <li>
            <img src={johnpaul2} alt="Johnpaul 2" />
            <p className="name">johnpaul akotomeh</p>
            <p className="title">head of sales</p>
          </li>
          <li>
            <img src={johnpaul3} alt="Johnpaul 3" />
            <p className="name">johnpaul akotomeh</p>
            <p className="title">head of sales</p>
          </li>
          <li>
            <img src={johnpaul4} alt="Johnpaul 4" />
            <p className="name">johnpaul akotomeh</p>
            <p className="title">head of sales</p>
          </li>
        </span>
        <span>
          <li>
            <img src={johnpaul1} alt="Johnpaul 5" />
            <p className="name">johnpaul akotomeh</p>
            <p className="title">head of sales</p>
          </li>
          <li>
            <img src={johnpaul2} alt="Johnpaul 6" />
            <p className="name">johnpaul akotomeh</p>
            <p className="title">head of sales</p>
          </li>
          <li>
            <img src={johnpaul3} alt="Johnpaul 7" />
            <p className="name">johnpaul akotomeh</p>
            <p className="title">head of sales</p>
          </li>
          <li>
            <img src={johnpaul4} alt="Johnpaul 8" />
            <p className="name">johnpaul akotomeh</p>
            <p className="title">head of sales</p>
          </li>
        </span>
      </ul>
    </section>
  );
}
