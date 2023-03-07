import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import "./ContactArea.css";

export default function ContactArea() {
  return (
    <section className="contactarea">
      <ContactForm />
      <ContactInfo />
    </section>
  );
}
