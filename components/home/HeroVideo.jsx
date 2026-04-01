"use client";

import "../../styles/home.css";

export default function HeroVideo() {
  return (
    <section className="hero-video">

      {/* VIDEO BACKGROUND */}
      <video autoPlay muted loop className="video-bg">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">
        <h1>Welcome to SREC</h1>
        <p>Santhiram Engineering College, Nandyal</p>

        <button className="hero-btn">Explore Campus</button>
      </div>

    </section>
  );
}