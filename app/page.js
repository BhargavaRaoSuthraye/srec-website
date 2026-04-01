import HeroVideo from "../components/home/HeroVideo";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroVideo />

      {/* WHY CHOOSE SREC */}
      <section className="home-section">
        <h2 className="section-title">Why Choose SREC?</h2>

        <div className="card-grid">
          <div className="card">
            <h3>Top Placements</h3>
            <p>Strong placement record with top companies recruiting every year.</p>
          </div>

          <div className="card">
            <h3>Modern Campus</h3>
            <p>State-of-the-art infrastructure with advanced labs and facilities.</p>
          </div>

          <div className="card">
            <h3>Experienced Faculty</h3>
            <p>Highly qualified faculty dedicated to academic excellence.</p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="home-section light-bg">
        <h2 className="section-title">Campus Highlights</h2>

        <div className="card-grid">
          <div className="card">Innovation Labs</div>
          <div className="card">Industry Collaboration</div>
          <div className="card">Student Activities</div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <h2>Start Your Journey with SREC</h2>
        <p>Join one of the best engineering colleges in Nandyal.</p>
        <button>Apply Now</button>
      </section>
    </>
  );
}