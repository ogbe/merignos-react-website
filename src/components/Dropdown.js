import { useState } from "react";
import "./Dropdown.css";
import uparrow from "../images/uparrow.svg";
import downarrow from "../images/downarrow.svg";

export default function Dropdown({ title, body }) {
  const [isActive, setIsActive] = useState(false);
  function handleToggle() {
    setIsActive(!isActive);
  }
  return (
    <div className="dropdown">
      <button onClick={() => handleToggle()}>
        {title}
        <img src={isActive ? downarrow : uparrow} alt="arrow head" />
      </button>
      {isActive && (
        <p className={isActive ? "active-dropdown" : ""}>{body}</p>
      )}
    </div>
  );
}
