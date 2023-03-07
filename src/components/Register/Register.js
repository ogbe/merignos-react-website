import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterComponent from "../RegisterComponent.js";
import Button from "../Button.js";

import whitelogo from "../../images/whitelogo.svg";
import eye from "../../images/eye.svg";
import eyeclose from "../../images/eyeclose.png";
import teacher from "../../images/teacher.svg";

import "./Register.css";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="register">
      <aside className="loginimg">
        <Link to="/">
          <img src={whitelogo} alt="white logo" />
        </Link>
        <img src={teacher} alt="teacher" />
      </aside>
      <aside className="registertext">
        <section className="registercomponent">
          <p>already have an account?</p>
          <Link to="/login">login</Link>
        </section>
        <div>
          <h1>Create an account</h1>
          <form className="registerform">
            <input readOnly={true} value="genius" name="sponsor" />
            <input
              placeholder="full name"
              name="full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required={true}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
            <img
              src={showPassword ? eyeclose : eye}
              alt="eye"
              onClick={() => setShowPassword(!showPassword)}
            />
            <Button type="submit">proceed</Button>
          </form>
        </div>
      </aside>
    </section>
  );
}
