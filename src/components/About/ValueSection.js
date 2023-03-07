import Dropdown from "../Dropdown";

import chart from "../../images/About/chart.jpg";
import "./ValueSection.css";

export default function ValueSection() {
  return (
    <section className="value">
      <aside className="text">
       <h1>core values</h1>
        <Dropdown
          title="vision"
          body="Money is a means of exchange of value. Money is not cash least of what money is. Expose your mind."
        />
        <Dropdown
          title="vision"
          body="Money is a means of exchange of value. Money is not cash least of what money is. Expose your mind."
        />
        <Dropdown
          title="vision"
          body="Money is a means of exchange of value. Money is not cash least of what money is. Expose your mind."
        />
        <Dropdown
          title="vision"
          body="Money is a means of exchange of value. Money is not cash least of what money is. Expose your mind."
        />
      </aside>
      <aside className="chart">
        <img src={chart} alt="chart" />
      </aside>
    </section>
  );
}
