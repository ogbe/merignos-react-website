import visionsection from "../../images/About/visionsection.jpg";
import "./VisionSection.css";

export default function VisionSection() {
  return (
    <section className="vision">
      <aside className="visionimg">
        <img src={visionsection} alt="visionsection" />
      </aside>
      <aside className="text">
        <h1>our vision</h1>
        <p>
          Money is a means of exchange of value. Money is not cash . Cash is the
          very least of what money is. Expose your mind to the understand. Money
          is a means of exchange of value. Money is not cash . Cash is the very
          least of what money is. Expose your mind to the understand.
        </p>
      </aside>
    </section>
  );
}
