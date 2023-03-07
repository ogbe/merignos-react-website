import dots from "../../images/About/dots.svg";
import storyimg from "../../images/About/storyimg.jpg";
import storyvideo from "../../images/About/storyvideo.jpg";

import "./StorySection.css";

export default function StorySection() {
  return (
    <section className="story">
      <aside className="storyimgs">
        <img src={dots} alt="dots" />
        <img src={storyvideo} alt="storyvideo" />
        <img src={storyimg} alt="storyimg" />
      </aside>
      <aside className="text">
        <h1>our story</h1>
        <p>
          Money is a means of exchange of value. Money is not cash . Cash is the
          very least of what money is. Expose your mind to the understand. Money
          is a means of exchange of value. Money is not cash . Cash is the very
          least of what money is. Expose your mind to the understand. Money is a
          means of exchange of value. Money is not cash . Cash is the very least
          of what money is. Expose your mind to the understand.
        </p>
      </aside>
    </section>
  );
}
