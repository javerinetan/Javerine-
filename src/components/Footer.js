import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub, AiFillInstagram, AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/javerinetan", icon: <AiFillGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/javerine-tan-a79231242", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: "https://www.instagram.com/javerinetan", icon: <AiFillInstagram />, label: "Instagram" },
  { href: "mailto:javerinetan05@gmail.com", icon: <AiOutlineMail />, label: "Email" },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{ alignItems: "center" }}>
        <Col md="4" className="footer-copywright">
          <h3 style={{ fontWeight: 600, fontSize: "1em" }}>
            Built with{" "}
            <span
              style={{ color: "var(--published)", fontSize: "1.1em" }}
              aria-label="love"
            >
              ♥
            </span>{" "}
            by Jae
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Javerine Tan</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons" style={{ listStyle: "none", display: "flex", justifyContent: "center", gap: "12px", margin: 0, padding: 0 }}>
            {socialLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  style={{
                    color: "var(--muted-text)",
                    fontSize: "1.4em",
                    transition: "color 0.2s ease, transform 0.2s ease",
                    display: "inline-block",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "var(--imp-text-color)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "var(--muted-text)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
