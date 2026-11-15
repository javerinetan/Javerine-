import React from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import resumePdf from "../../Assets/Javerine Tan Jing Xuan Resume.pdf";

export default function ResumePanel() {
  return (
    <div className="cred-panel">
      <div className="cred-panel-head">
        <div>
          <h2>Résumé</h2>
          <p>A snapshot of my experience, education and skills.</p>
        </div>
        <div className="cred-actions">
          <a className="btn-pill btn-pill-ghost" href={resumePdf} target="_blank" rel="noreferrer">
            <FiExternalLink aria-hidden="true" /> Open
          </a>
          <a className="btn-pill btn-pill-primary" href={resumePdf} download="Javerine_Tan_Resume.pdf">
            <FiDownload aria-hidden="true" /> Download
          </a>
        </div>
      </div>

      <div className="pdf-frame">
        <iframe src={resumePdf} title="Javerine Tan résumé" style={{ height: "min(1100px, 85vh)" }} />
      </div>
      <p className="pdf-hint">If the PDF doesn’t display, use Open or Download above.</p>
    </div>
  );
}
