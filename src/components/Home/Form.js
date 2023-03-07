import { useState } from "react";
import Button from "../Button.js";

import "./Form.css";

export default function Form() {
  const [emailAddress, setEmailAddress] = useState("");
  return (
    <form className="form">
      <h1>Get started with Merignos</h1>
      <p>
        a better place to learn to become successful through mentorship and get
        paid as you learn. Subscribe to our newsletter to get the latest news
        and updates from merignos.
      </p>
      <div>
        <input
          placeholder="Email address..."
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          required={true}
        />
        <Button btnClassName="secondary" type="submit">subscribe</Button>
      </div>
    </form>
  );
}
