import React, { useState } from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";

import htxPdf from "../../Assets/Testimonals/HTX_Testimonial.pdf";
import mountePdf from "../../Assets/Testimonals/Mount E.pdf";
import nypPdf from "../../Assets/Testimonals/NYP Testimonal.pdf";
import stPdf from "../../Assets/Testimonals/ST Engineering Testimonal.pdf";

const testimonials = [
  {
    org: "HTX",
    orgFull: "Home Team Science & Technology Agency",
    quote:
      "Javerine has consistently demonstrated a strong work ethic, technical ability, and a great attitude, always eager to learn and contribute meaningfully to the team.",
    file: htxPdf,
    label: "HTX_Testimonial.pdf",
  },
  {
    org: "Mount Elizabeth",
    orgFull: "Mount Elizabeth Hospital",
    quote:
      "A dedicated and dependable intern who brought both initiative and professionalism to every task she undertook.",
    file: mountePdf,
    label: "Mount_E_Testimonial.pdf",
  },
  {
    org: "NYP",
    orgFull: "Nanyang Polytechnic",
    quote:
      "Javerine stood out for her analytical mindset and collaborative spirit throughout her studies at NYP.",
    file: nypPdf,
    label: "NYP_Testimonial.pdf",
  },
  {
    org: "ST Engineering",
    orgFull: "ST Engineering",
    quote:
      "A highly motivated intern who quickly adapted to the team's workflows and delivered quality work consistently.",
    file: stPdf,
    label: "ST_Engineering_Testimonial.pdf",
  },
];

export default function TestimonialsPanel() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <div className="cred-panel">
      <div className="cred-panel-head">
        <div>
          <h2>Testimonials</h2>
          <p>What the people I’ve worked and studied with have to say. Pick one to read the full letter.</p>
        </div>
      </div>

      <div className="quote-grid">
        {testimonials.map((item, i) => (
          <button
            key={item.org}
            type="button"
            className={`quote-card ${i === current ? "is-active" : ""}`}
            aria-pressed={i === current}
            onClick={() => setCurrent(i)}
          >
            <span className="quote-card-text">“{item.quote}”</span>
            <span className="quote-card-org">{item.orgFull}</span>
          </button>
        ))}
      </div>

      <div className="letter-bar">
        <span>
          Full letter from <strong>{t.orgFull}</strong>
        </span>
        <div className="cred-actions">
          <a className="btn-pill btn-pill-ghost" href={t.file} target="_blank" rel="noreferrer">
            <FiExternalLink aria-hidden="true" /> Open
          </a>
          <a className="btn-pill btn-pill-primary" href={t.file} download={t.label}>
            <FiDownload aria-hidden="true" /> Download
          </a>
        </div>
      </div>

      <div className="pdf-frame">
        <iframe key={current} src={t.file} title={`Testimonial from ${t.orgFull}`} style={{ height: "min(900px, 80vh)" }} />
      </div>
      <p className="pdf-hint">If the PDF doesn’t display, use Open or Download above.</p>
    </div>
  );
}
