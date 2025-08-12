import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import "../../utils/pdfWorker"; // sets pdf.js worker once

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

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={testimonialPdf} target="_blank" style={{ maxWidth: 250 }}>
            <AiOutlineDownload />
            &nbsp;Download Testimonial
          </Button>
        </Row>

        <Row className="resume">
          <Document file={testimonialPdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}
