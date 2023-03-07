import { Link } from "react-router-dom";
import Button from "../Button";
import "./NotFoundHero.css";

import confused from "../../images/NotFound/confused.svg";

export default function NotFoundHero() {
  return (
    <section className="notfound">
      <aside className="notfoundtext">
        <h1>we couldn't find this page.</h1>
        <p>
          no worries its just error 404, lets find you a better place to go.
          Please click on the button below to go back to the home page.
        </p>

        <Link to="/">
          <Button>merignos home</Button>
        </Link>
      </aside>
      <aside className="notfoundimg">
        4<img src={confused} alt="Not found" />4
      </aside>
    </section>
  );
}
