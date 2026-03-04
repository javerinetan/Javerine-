import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";

import htxPdf from "../../Assets/Testimonals/HTX_Testimonial.pdf";
import mountePdf from "../../Assets/Testimonals/Mount E.pdf";
import nypPdf from "../../Assets/Testimonals/NYP Testimonal.pdf";
import stPdf from "../../Assets/Testimonals/ST Engineering Testimonal.pdf";

const testimonials = [
  {
    org: "HTX — Home Team Science & Technology Agency",
    quote:
      "Javerine has consistently demonstrated a strong work ethic, technical ability, and a great attitude — always eager to learn and contribute meaningfully to the team.",
    file: htxPdf,
    label: "HTX_Testimonial.pdf",
  },
  {
    org: "Mount Elizabeth Hospital",
    quote:
      "A dedicated and dependable intern who brought both initiative and professionalism to every task she undertook.",
    file: mountePdf,
    label: "Mount_E_Testimonial.pdf",
  },
  {
    org: "Nanyang Polytechnic (NYP)",
    quote:
      "Javerine stood out for her analytical mindset and collaborative spirit throughout her studies at NYP.",
    file: nypPdf,
    label: "NYP_Testimonial.pdf",
  },
  {
    org: "ST Engineering",
    quote:
      "A highly motivated intern who quickly adapted to the team's workflows and delivered quality work consistently.",
    file: stPdf,
    label: "ST_Engineering_Testimonial.pdf",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <Row style={{ justifyContent: "center", marginBottom: "2rem" }}>
            <Col md={8} style={{ textAlign: "center" }}>
              <h1 className="project-heading" style={{ textAlign: "center" }}>
                <strong className="purple">Testimonials</strong>
              </h1>
              <div className="section-divider" />
              <p className="project-sub">
                What the people I've worked with have to say 🌟
              </p>
            </Col>
          </Row>

          {/* Carousel navigation */}
          <Row style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
            <Col md={8}>
              {/* Org counter */}
              <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                <span style={{ color: "var(--muted-text)", fontSize: "0.9em", fontWeight: 600, letterSpacing: "0.5px" }}>
                  {current + 1} / {testimonials.length}
                </span>
              </div>

              {/* Quote card */}
              <div
                style={{
                  background: "var(--surface-bg)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "16px",
                  padding: "2rem 2.5rem",
                  boxShadow: "var(--card-shadow)",
                  minHeight: "160px",
                  position: "relative",
                  transition: "all 0.3s ease",
                }}
              >
                <FaQuoteLeft
                  style={{
                    color: "var(--imp-text-color)",
                    fontSize: "2em",
                    opacity: 0.55,
                    marginBottom: "0.8rem",
                  }}
                />
                <p
                  style={{
                    fontSize: "1.08em",
                    lineHeight: "1.85",
                    fontStyle: "italic",
                    color: "var(--text-color)",
                    margin: "0 0 1.2rem",
                  }}
                >
                  "{t.quote}"
                </p>
                <p style={{ color: "var(--imp-text-color)", fontWeight: 700, margin: 0, fontSize: "0.95em" }}>
                  — {t.org}
                </p>
              </div>

              {/* Prev / Next */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "1.2rem",
                }}
              >
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  style={{
                    background: "var(--surface-bg)",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: "50%",
                    width: 42,
                    height: 42,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "var(--imp-text-color)",
                    fontSize: "1.2em",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--badge-bg)";
                    e.currentTarget.style.borderColor = "var(--imp-text-color)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--surface-bg)";
                    e.currentTarget.style.borderColor = "var(--border-color)";
                  }}
                >
                  <AiOutlineLeft />
                </button>

                {/* Dot indicators */}
                <div style={{ display: "flex", gap: "8px" }}>
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      style={{
                        width: i === current ? 24 : 10,
                        height: 10,
                        borderRadius: "12px",
                        background: i === current ? "var(--imp-text-color)" : "var(--border-color)",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  style={{
                    background: "var(--surface-bg)",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: "50%",
                    width: 42,
                    height: 42,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "var(--imp-text-color)",
                    fontSize: "1.2em",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--badge-bg)";
                    e.currentTarget.style.borderColor = "var(--imp-text-color)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--surface-bg)";
                    e.currentTarget.style.borderColor = "var(--border-color)";
                  }}
                >
                  <AiOutlineRight />
                </button>
              </div>
            </Col>
          </Row>

          {/* Download button */}
          <Row style={{ justifyContent: "center", marginBottom: "2rem" }}>
            <Button
              variant="primary"
              href={t.file}
              download={t.label}
              target="_blank"
              style={{
                maxWidth: 280,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <AiOutlineDownload style={{ fontSize: "1.2em" }} />
              &nbsp;Download Testimonial
            </Button>
          </Row>

          {/* PDF iframe preview */}
          <Row className="resume" style={{ justifyContent: "center" }}>
            <Col md={10}>
              <div
                style={{
                  background: "var(--surface-bg)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "16px",
                  padding: "16px",
                  boxShadow: "var(--card-shadow)",
                  overflow: "hidden",
                }}
              >
                <iframe
                  key={current}
                  src={t.file}
                  title={`Testimonial from ${t.org}`}
                  style={{
                    width: "100%",
                    height: "700px",
                    border: "none",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              </div>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "0.75rem",
                  color: "var(--muted-text)",
                  fontSize: "0.85em",
                }}
              >
                If the PDF doesn't display, use the Download button above to view it.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
