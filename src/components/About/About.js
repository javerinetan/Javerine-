import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/me.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Bio row */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}
          >
            <h1 style={{ fontSize: "2.2em", paddingBottom: "12px", fontWeight: 700 }}>
              Who am <strong className="purple">I</strong>?
            </h1>
            <div className="section-divider" style={{ margin: "0 0 1.5rem" }} />
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "110px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="Javerine"
              className="img-fluid"
              style={{
                maxWidth: "60%",
                borderRadius: "20px",
                boxShadow: "0 12px 40px rgba(99,54,134,0.25)",
                display: "block",
                margin: "0 auto",
              }}
            />
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
  );
}

export default About;
