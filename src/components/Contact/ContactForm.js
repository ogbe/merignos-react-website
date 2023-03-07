import { useState } from "react";
import Button from "../Button.js";

import "./ContactForm.css";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form className="contactform">
      <div>
        <label>full name</label>
        <input
          value={fullName}
          name="full name"
          onChange={(e) => setFullName(e.target.value)}
          required={true}

        />
      </div>
      <div>
        <label>email</label>
        <input
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
      </div>
      <div>
        <label>phone number</label>
        <input
          value={phoneNumber}
          name="phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required={true}
        />
      </div>
      <div>
        <label>message</label>
        <textarea
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          required={true}
        />
      </div>
      <Button type="submit">send message</Button>
    </form>
  );
}
