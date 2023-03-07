import { Link } from "react-router-dom";

import "./RegisterComponent.css";

export default function RegisterComponent() {
  return (
    <section className="registercomponent">
      <p>don't have an account?</p>
      <Link to="/signup">register</Link>
    </section>
  )
}