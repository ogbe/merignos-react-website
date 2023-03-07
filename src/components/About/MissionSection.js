import missionsection from "../../images/About/missionsection.jpg";
import "./MissionSection.css";

export default function MissionSection() {
  return (
    <section className="mission">
      <aside className="missionimg">
        <img src={missionsection} alt="missionsection" />
      </aside>
      <aside className="text">
        <h1>our mission</h1>
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
