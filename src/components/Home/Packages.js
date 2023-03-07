import { Link } from "react-router-dom";

import packages from "../../images/Packages/packages.svg";
import Button from "../Button.js";
import yellowellipse from "../../images/Packages/yellowellipse.svg";
import purpleellipse from "../../images/Packages/purpleellipse.svg";
import greenellipse from "../../images/Packages/greenellipse.svg";
import redellipse from "../../images/Packages/redellipse.svg";

import "./Packages.css";

export default function Packages() {
  return (
    <section className="packages">
      <aside className="package-vector">
        <img src={packages} alt="package delivery" />
      </aside>
      <aside>
        <h1>our packages</h1>
        <p>earn as you learn with any of our packages that befits you.</p>
        <div>
          <div>
            <img src={yellowellipse} alt="yellow ellipse" />
          </div>
          <h3>freedom package</h3>
          <p>
            money is a means of exchange of value. Money is not cash. Cash is
            the very least of what money is. Expose your mind to the understand.
          </p>
        </div>
        <div>
          <div>
            <img src={purpleellipse} alt="purple ellipse" />
          </div>
          <h3>independent package</h3>
          <p>
            money is a means of exchange of value. Money is not cash. Cash is
            the very least of what money is. Expose your mind to the understand.
          </p>
        </div>
        <div>
          <div>
            <img src={greenellipse} alt="green ellipse" />
          </div>
          <h3>lifestyle package</h3>
          <p>
            money is a means of exchange of value. Money is not cash. Cash is
            the very least of what money is. Expose your mind to the understand.
          </p>
        </div>
        <div>
          <div>
            <img src={redellipse} alt="red ellipse" />
          </div>
          <h3>exceptional package</h3>
          <p>
            money is a means of exchange of value. Money is not cash. Cash is
            the very least of what money is. Expose your mind to the understand.
          </p>
        </div>
        <Link to="/signup">
          <Button btnClassName="secondary">register now</Button>
        </Link>
      </aside>
    </section>
  );
}
