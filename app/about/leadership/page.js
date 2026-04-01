import "../../../styles/leadership.css";

export default function LeadershipPage() {
  return (
    <div className="leadership-page">

      {/* HERO */}
      <section className="leader-hero">
        <img src="/images/leadership.jpg" />
        <div className="leader-overlay">
          <h1>LEADERSHIP</h1>
          <p>GREAT MINDS JOINING HANDS TO ACHIEVE GREAT THINGS</p>
        </div>
      </section>

      {/* HEADING */}
      <div className="leader-heading">
        GREAT MINDS. PASSIONATE LEADERS. ONE VISION.
        <div className="underline"></div>
      </div>

      {/* PRINCIPAL */}
     {/* 🔥 PRINCIPAL SECTION (WITH BACKGROUND) */}
<div className="principal-section">
  <div className="leader-card main-leader">
    <img src="/images/principal.jpg" className="leader-img" />
    <h2>Dr. M. V. Subramanyam</h2>
    <h4>Principal</h4>

    <div className="leader-icons">
      <span>in</span>
      <span>✉</span>
    </div>

    <a href="#" className="know-more">Know more →</a>
  </div>
</div>

      {/* 🔥 DEANS */}
      <div className="deans-section">

        <div className="dean-card">
          <img src="/images/dean1.jpg" />
          <h3>Dr. B. Haritha</h3>
          <p>Dean – Academics, Accreditation & Planning</p>

          <div className="leader-icons">
            <span>in</span>
            <span>✉</span>
          </div>

          <a href="#" className="know-more">Know more →</a>
        </div>

        <div className="dean-card">
          <img src="/images/dean2.jpg" />
          <h3>Dr. G. Sowmya</h3>
          <p>Dean – Research & Development</p>

          <div className="leader-icons">
            <span>in</span>
            <span>✉</span>
          </div>

          <a href="#" className="know-more">Know more →</a>
        </div>

        <div className="dean-card">
          <img src="/images/dean3.jpg" />
          <h3>Mr. J. David Sukeerthi Kumar</h3>
          <p>Dean – CDC</p>

          <div className="leader-icons">
            <span>in</span>
            <span>✉</span>
          </div>

          <a href="#" className="know-more">Know more →</a>
        </div>

        <div className="dean-card">
          <img src="/images/dean4.jpg" />
          <h3>P. Lavanya</h3>
          <p>Dean – Students Affairs</p>

          <div className="leader-icons">
            <span>in</span>
            <span>✉</span>
          </div>

          <a href="#" className="know-more">Know more →</a>
        </div>

      </div>

    </div>
  );
}