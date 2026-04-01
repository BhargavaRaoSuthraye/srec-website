import "../../styles/home.css";

export default function Hero() {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: "url('/images/governance.jpg')" }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-text">
        <h1>WELCOME TO SREC</h1>
        <p>Empowering Future Engineers</p>

        <button className="hero-btn">Explore Campus</button>
      </div>
    </section>
  );
}