import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub, AiFillInstagram, AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.4em", fontWeight: 700 }}>
              Let me <span className="purple">Introduce</span> Myself
            </h1>
            <div className="section-divider" style={{ margin: "0.5rem 0 1.5rem" }} />
            <p className="home-about-body">
              My love for technology sparked in secondary school when I joined the{" "}
              <b className="purple">Robotics &amp; Automation Club</b> — where I learned
              to code drones, robots, and explore{" "}
              <b className="purple">artificial intelligence</b>.
              I love building things that matter and dream of using tech to{" "}
              <b className="purple">make life easier for others</b>.
              <br />
              <br />
              I graduated with a{" "}
              <b className="purple">Diploma in Applied AI &amp; Analytics from NYP</b>{" "}
              and am now a{" "}
              <b className="purple">Software Engineering Freshman at SMU</b>, where I'm
              constantly pushing myself to grow. I'm also the proud{" "}
              <b className="purple">President of the Ladies in Tech (LIT) Club</b> at SMU.
              <br />
              <br />
              My interests span{" "}
              <b className="purple">full-stack web development</b>,{" "}
              <b className="purple">data analytics &amp; visualisation</b>, and{" "}
              <b className="purple">exploring what AI can achieve beyond the ordinary</b>.
              When I'm not coding, you'll find me ice skating, cooking, or planning my next adventure ✈️
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 12px 40px rgba(99,54,134,0.22)",
                }}
              />
            </Tilt>
          </Col>
        </Row>

        {/* Social Links */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontWeight: 700, fontSize: "1.8em" }}>
              Find Me <span className="purple">Online</span>
            </h1>
            <p style={{ color: "var(--muted-text)", marginBottom: "1.2rem" }}>
              Feel free to <span className="purple">connect</span> — I'd love to chat!
            </p>
            <ul className="home-about-social-links">
              {[
                { href: "https://github.com/javerinetan", icon: <AiFillGithub />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/javerine-tan-a79231242", icon: <FaLinkedinIn />, label: "LinkedIn" },
                { href: "https://www.instagram.com/javerinetan", icon: <AiFillInstagram />, label: "Instagram" },
                { href: "mailto:javerinetan05@gmail.com", icon: <AiOutlineMail />, label: "Email" },
              ].map((link, i) => (
                <li key={i} className="social-icons">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label={link.label}
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
