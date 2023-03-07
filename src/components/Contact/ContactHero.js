import happyface from "../../images/Contact/happyface.svg";

import "./ContactHero.css";
export default function ContactHero() {
  return (
    <section className="contacthero">
      <h1>contact merignos</h1>
      <p>
        we are glad to get your feedback and help answer your question(s).
        Please fill out the form and we'll be in touch as soon as possible.{" "}
        <img src={happyface} alt="Happy face" />
      </p>
    </section>
  );
}
