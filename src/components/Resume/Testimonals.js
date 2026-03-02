import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineFilePdf } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { Document, Page } from "react-pdf";
import "../../utils/pdfWorker";

import testimonialPdf from "../../Assets/HTX_Testimonial.pdf";

export default function Testimonials() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
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

          {/* Highlight quote */}
          <Row style={{ justifyContent: "center", marginBottom: "2.5rem" }}>
            <Col md={8}>
              <div
                style={{
                  background: "var(--surface-bg)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "16px",
                  padding: "2rem 2.5rem",
                  position: "relative",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <FaQuoteLeft
                  style={{
                    color: "var(--imp-text-color)",
                    fontSize: "2.2em",
                    opacity: 0.6,
                    marginBottom: "0.8rem",
                  }}
                />
                <p
                  style={{
                    fontSize: "1.1em",
                    lineHeight: "1.85",
                    fontStyle: "italic",
                    color: "var(--text-color)",
                    margin: "0 0 1.2rem",
                  }}
                >
                  "Javerine has consistently demonstrated a strong work ethic,
                  technical ability, and a great attitude — always eager to learn
                  and contribute meaningfully to the team."
                </p>
                <p style={{ color: "var(--imp-text-color)", fontWeight: 700, margin: 0 }}>
                  — HTX (Home Team Science &amp; Technology Agency)
                </p>
              </div>
            </Col>
          </Row>

          {/* Download button */}
          <Row style={{ justifyContent: "center", marginBottom: "2rem" }}>
            <Button
              variant="primary"
              href={testimonialPdf}
              target="_blank"
              style={{ maxWidth: 270, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
            >
              <AiOutlineDownload style={{ fontSize: "1.2em" }} />
              &nbsp;Download Testimonial
            </Button>
          </Row>

          {/* PDF preview */}
          <Row className="resume">
            <div
              style={{
                background: "var(--surface-bg)",
                border: "1px solid var(--border-color)",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "var(--card-shadow)",
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Document file={testimonialPdf} className="d-flex justify-content-center">
                <Page
                  pageNumber={1}
                  scale={width > 786 ? 1.4 : 0.6}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </Document>
            </div>
          </Row>

          {/* Open full PDF */}
          <Row style={{ justifyContent: "center", marginTop: "2rem" }}>
            <Button
              variant="primary"
              href={testimonialPdf}
              target="_blank"
              style={{ maxWidth: 260, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
            >
              <AiOutlineFilePdf style={{ fontSize: "1.2em" }} />
              &nbsp;Open Full PDF
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
