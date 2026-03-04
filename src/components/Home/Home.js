import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/sdup.png";
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
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Javerine Tan</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
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
