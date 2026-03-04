import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

import resumePdf from "../../Assets/Javerine Tan Jing Xuan Resume.pdf";

export default function ResumePage() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <Row style={{ justifyContent: "center", marginBottom: "2rem" }}>
            <Col md={8} style={{ textAlign: "center" }}>
              <h1 className="project-heading" style={{ textAlign: "center" }}>
                My <strong className="purple">Resume</strong>
              </h1>
              <div className="section-divider" />
              <p className="project-sub">
                A snapshot of my experience, education, and skills
              </p>
              <Button
                variant="primary"
                href={resumePdf}
                download="Javerine_Resume.pdf"
                target="_blank"
                style={{ gap: "8px", display: "inline-flex", alignItems: "center" }}
              >
                <AiOutlineDownload style={{ fontSize: "1.2em" }} />
                &nbsp;Download Resume
              </Button>
            </Col>
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
                  src={resumePdf}
                  title="Javerine Resume"
                  style={{
                    width: "100%",
                    height: "900px",
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
