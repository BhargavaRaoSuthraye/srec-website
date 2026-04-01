import "../../styles/hero.css";

export default function HeroBanner({ title, subtitle, image }) {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}