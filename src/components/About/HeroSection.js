export default function HeroSection({ style, heading, text, image1 }) {
  return (
    <section className={style ? `hero-${style}` : `hero-reversed`}>
      <aside className="storyimgs">
        <img src={image1} alt="dots" />
        {/* <img src={storyvideo} alt="storyvideo" />
        <img src={storyimg} alt="storyimg" /> */}
      </aside>
      <aside className="text">
        <h1>{heading}</h1>
        <p>{text}</p>
      </aside>
    </section>
  );
}
