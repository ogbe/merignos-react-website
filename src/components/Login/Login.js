import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button.js";
import RegisterComponent from "../RegisterComponent.js";

import teacher from "../../images/teacher.svg";
import whitelogo from "../../images/whitelogo.svg";
import eye from "../../images/eye.svg";
import eyeclose from "../../images/eyeclose.png";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <section className="login">
      <aside className="loginimg">
        <Link to="/">
          <img src={whitelogo} alt="white logo" />
        </Link>
        <img src={teacher} alt="teacher" />
      </aside>
      <aside className="logintext">
        <RegisterComponent />
        <div className="loginform">
          <h1>welcome back</h1>
          <p>login to your account</p>
          <form method="get">
            <input
              name="email"
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <input
              name="password"
              placeholder="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
            <img
              src={showPassword ? eyeclose : eye}
              alt="eye"
              onClick={() => setShowPassword(!showPassword)}
            />
            <div>
              <span>
                <input
                  type="checkbox"
                  value={rememberMe}
                  name="rememberme"
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <p>remember me</p>
              </span>
              <Link to="/forgotpassword">forgot password?</Link>
            </div>
            <Button type="submit">login</Button>
          </form>
        </div>
      </aside>
    </section>
  );
}
