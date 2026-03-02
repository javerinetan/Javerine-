import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineFilePdf } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import "../../utils/pdfWorker";

import resumePdf from "../../Assets/Javerine Tan Jing Xuan Resume.pdf";

export default function ResumePage() {
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
                My <strong className="purple">Resume</strong>
              </h1>
              <div className="section-divider" />
              <p className="project-sub">
                A snapshot of my experience, education, and skills
              </p>
              <Button
                variant="primary"
                href={resumePdf}
                target="_blank"
                style={{ gap: "8px", display: "inline-flex", alignItems: "center" }}
              >
                <AiOutlineDownload style={{ fontSize: "1.2em" }} />
                &nbsp;Download Resume
              </Button>
            </Col>
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
              <Document file={resumePdf} className="d-flex justify-content-center">
                <Page
                  pageNumber={1}
                  scale={width > 786 ? 1.2 : 0.6}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </Document>
            </div>
          </Row>

          {/* Download again at bottom */}
          <Row style={{ justifyContent: "center", marginTop: "2rem" }}>
            <Button
              variant="primary"
              href={resumePdf}
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
