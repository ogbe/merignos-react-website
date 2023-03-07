import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button.js";

import whitelogo from "../../images/whitelogo.svg";
import teacher from "../../images/teacher.svg";

import RegisterComponent from "../RegisterComponent.js";

import "./TermsAndConditions.css";
export default function TermsAndConditions() {
  const [isAgree, setIsAgree] = useState(false);
  return (
    <section className="termsandconditions">
      <aside className="loginimg">
        <Link to="/"><img src={whitelogo} alt="white logo"/></Link>
        <img src={teacher} alt="teacher" />
      </aside>
      <aside className="termsandconditionstext">
        <RegisterComponent />
        <h1>terms and conditions</h1>
        <p>
          Lorem Ipsum is simply the dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <form>
          <label>
            <input
              type="checkbox"
              value={isAgree}
              name="agreement"
              onChange={() => setIsAgree(!isAgree)}
            />
            <p>
              i have read and I agree to the terms and conditions of <Link to="/about">merignos</Link> 
            </p>
          </label>
          <Button type="submit" btnClassName={ isAgree ? "": "disabled" } isDisabled={!isAgree}>register</Button>
        </form>
      </aside>
    </section>
  )
}