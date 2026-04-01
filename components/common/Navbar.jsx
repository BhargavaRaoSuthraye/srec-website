"use client";
import Link from "next/link";
import "../../styles/components/navbar.css";

export default function Navbar() {
  return (
    <>
      {/* TOP HEADER */}
      <div className="topbar">
        {/* LEFT SIDE */}
        <div className="top-left">
          <img src="/images/logo.png" alt="SREC Logo" />
          <div className="college-text">
            <h3>SREC</h3>
            <p>Santhiram Engineering College</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="top-right">
          <div className="top-links">
            <span>ALUMNI</span>
            <span>IQAC</span>
            <span>QUICK LINKS ▾</span>
          </div>

          <button className="campus-btn">Campus Tour</button>

          <div className="code-box">TNEA CODE 2739</div>

          <img src="/images/nba.png" alt="NBA" className="nba-logo" />
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="navbar">
        <ul className="nav-links">

          <li>
            <Link href="/">Home</Link>
          </li>

          {/* ABOUT DROPDOWN */}
          <li className="dropdown">
            <span>About ▾</span>

            <ul className="dropdown-menu">
              <li><Link href="/about/governance">Governance</Link></li>
              <li><Link href="/about/leadership">Leadership</Link></li>
              <li><Link href="/about/vision">Vision & Mission</Link></li>
              <li><Link href="/about/milestones">Milestones</Link></li>
              <li><Link href="/about/achievements">Achievements</Link></li>
            </ul>
          </li>

          <li>
            <Link href="/academics">Academics</Link>
          </li>

          <li>
            <Link href="/departments">Departments</Link>
          </li>

          <li>
            <Link href="/placements">Placements</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

        </ul>
      </nav>
    </>
  );
}