import "../../../styles/about.css";

export default function GovernancePage() {
  return (
    <div className="gov-container">
        {/* HERO SECTION */}
<section className="gov-hero">
  <img src="/images/governance.jpg" alt="Governance" />

  <div className="gov-overlay">
    <h1>GOVERNANCE</h1>
  </div>
</section>

      
      {/* TITLE */}
      <div className="gov-heading">
        THREE INSPIRING VISIONARY LEADERS <br />
        ONE GOAL. ONE DIRECTION.
      </div>

      {/* CHAIRMAN */}
      <section className="gov-section">
        <div className="gov-left">
          <img src="/images/chairman.jpg" alt="Chairman" />
        </div>

        <div className="gov-right">
          <h2>Dr. M. Santhiramudu</h2>
          <h5>Chairman</h5>
          <div className="line"></div>

          <p>
            In today’s rapidly evolving world, education plays a critical role in shaping future generations.
            Dr. M. Santhiramudu, Chairman of Santhiram Engineering College, is a visionary leader who strongly
            believes that quality education is the foundation for societal transformation. His commitment to
            excellence has helped establish SREC as a center of academic distinction.
          </p>

          <p>
            From the beginning, the institution has focused on aligning education with industry needs, ensuring
            students gain both knowledge and practical exposure. His leadership promotes innovation, discipline,
            and continuous improvement, making students industry-ready professionals.
          </p>

          <p>
            His vision continues to inspire students and faculty to strive for excellence, creating engineers
            capable of competing globally and contributing meaningfully to society.
          </p>
        </div>
      </section>

      {/* DIRECTOR */}
      <section className="gov-section alt">
        <div className="gov-left">
          <img src="/images/director.jpg" alt="Director" />
        </div>

        <div className="gov-right">
          <h2>Er. M. Siva Ram</h2>
          <h5>Director</h5>
          <div className="line"></div>

          <p>
            Er. M. Siva Ram, Director of SREC, focuses on building a dynamic learning environment that encourages
            innovation and creativity. He believes education should go beyond textbooks and develop real-world skills.
          </p>

          <p>
            Under his guidance, the college has introduced various student-centric initiatives that bridge the gap
            between academics and industry expectations, ensuring students are career-ready.
          </p>

          <p>
            His leadership ensures that every student receives mentorship, guidance, and opportunities to grow both
            technically and personally in a competitive environment.
          </p>
        </div>
      </section>

      {/* PRINCIPAL */}
      <section className="gov-section">
        <div className="gov-left">
          <img src="/images/principal.jpg" alt="Principal" />
        </div>

        <div className="gov-right">
          <h2>Dr. M. V. Subramanyam</h2>
          <h5>Principal</h5>
          <div className="line"></div>

          <p>
            Dr. M. V. Subramanyam, Principal of SREC, is a highly experienced academician with deep expertise in
            Electronics and Communication Engineering. His leadership ensures strong academic standards and discipline.
          </p>

          <p>
            He continuously works towards improving teaching methodologies, research opportunities, and student
            development programs, ensuring overall institutional growth.
          </p>

          <p>
            His commitment to excellence helps students become skilled professionals with strong technical knowledge
            and ethical values required for global success.
          </p>
        </div>
      </section>

    </div>
  );
}