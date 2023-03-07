import wealth from "../../images/Services/wealth.svg";
import reward from "../../images/Services/reward.svg";
import investment from "../../images/Services/investment.svg";
import mentorship from "../../images/Services/mentorship.svg";
import medal from "../../images/Services/medal.svg";

import "./Services.css";

export default function Services() {
  return (
    <section className="services">
      <aside>
        <h1>what we offer</h1>
        <p>earn as you learn with any of the packages that befits you.</p>
      </aside>
      <aside>
        <div>
          <img src={wealth} alt="Graduation cap" />
          <h2>premium wealth academy</h2>
        </div>
        <p>money is a means of exchange of value. Money is not cash. Cash is the very least of what money is. Expose your mind to the understand.</p>
      </aside>
      <aside>
        <div>
          <img src={reward} alt="Wallet with cash" />
          <h2>platform that pays you to study</h2>
        </div>
        <p>money is a means of exchange of value. Money is not cash. Cash is the very least of what money is. Expose your mind to the understand.</p>
      </aside>
      <aside>
        <div>
          <img src={investment} alt="Bar chart" />
          <h2>dynamic investment system</h2>
        </div>
        <p>money is a means of exchange of value. Money is not cash. Cash is the very least of what money is. Expose your mind to the understand.</p>
      </aside>
      <aside>
        <div>
          <img src={mentorship} alt="Pie chart" />
          <h2>world-class mentorship</h2>
        </div>
        <p>money is a means of exchange of value. Money is not cash. Cash is the very least of what money is. Expose your mind to the understand.</p>
      </aside>
      <aside>
        <div>
          <img src={medal} alt="Hands receiving a medal" />
          <h2>merignos reward system</h2>
        </div>
        <p>money is a means of exchange of value. Money is not cash. Cash is the very least of what money is. Expose your mind to the understand.</p>
      </aside>
    </section>
  )
}