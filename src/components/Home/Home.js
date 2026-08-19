import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/hero-workspace-v2.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Aboutcard from "../About/AboutCard";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";

function Home() {
  return (
    <section>
      {/* ── Hero ── */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="hero-row align-items-center">
            <Col lg={7} className="home-header">
              <p className="hero-eyebrow">Software engineering · AI · Analytics</p>
              <h1 className="heading">
                Hi, I’m{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </h1>

              <h2 className="heading-name">
                <strong className="main-name">Javerine Tan</strong>
              </h2>

              <div className="hero-role" aria-label="Professional roles">
                <Type />
              </div>

              <p className="hero-summary">
                I build thoughtful digital products and turn complex ideas into
                clear, useful experiences.
              </p>

              <div className="hero-actions">
                <Link className="hero-button hero-button-primary" to="/project">
                  View my work
                </Link>
                <Link className="hero-button hero-button-secondary" to="/resume">
                  View résumé
                </Link>
              </div>
            </Col>

            <Col lg={5} className="hero-art-col">
              <div className="hero-art-shell">
                <img src={homeLogo} alt="Laptop surrounded by code, data, and AI visuals" className="hero-art" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ── Intro / Social links ── */}
      <Home2 />

      {/* ── About / Who am I ── */}
      <Container fluid className="about-section" id="about" style={{ paddingTop: "80px", paddingBottom: "50px" }}>
        <Container>
          {/* Bio card — full width, no sidebar image */}
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={8} style={{ paddingTop: "30px", paddingBottom: "40px" }}>
              <h1 style={{ fontSize: "2.2em", paddingBottom: "12px", fontWeight: 700, textAlign: "center" }}>
                Who am <strong className="purple">I</strong>?
              </h1>
              <div className="section-divider" style={{ margin: "0 auto 1.5rem" }} />
              <Aboutcard />
            </Col>
          </Row>

          {/* Programming Languages */}
          <h1 className="project-heading" style={{ textAlign: "center" }}>
            Programming <strong className="purple">Languages</strong>
          </h1>
          <div className="section-divider" />
          <p className="project-sub" style={{ textAlign: "center" }}>
            Languages I code in on a regular basis
          </p>
          <Techstack />

          {/* Tools */}
          <h1 className="project-heading" style={{ textAlign: "center" }}>
            <strong className="purple">Tools</strong> &amp; Software
          </h1>
          <div className="section-divider" />
          <p className="project-sub" style={{ textAlign: "center" }}>
            My everyday dev &amp; analytics toolkit
          </p>
          <Toolstack />
        </Container>
      </Container>
    </section>
  );
}

export default Home;
