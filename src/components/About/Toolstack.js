import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux, SiVisualstudiocode, SiFigma, SiPowerbi, SiPycharm,
  SiMicrosoftexcel, SiOracle, SiPostman, SiNotion, SiGit,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const tools = [
  { icon: <SiVisualstudiocode />, label: "VS Code", color: "#007acc" },
  { icon: <SiPycharm />, label: "PyCharm", color: "#21d789" },
  { icon: <AiFillGithub />, label: "GitHub", color: "#333" },
  { icon: <SiGit />, label: "Git", color: "#f05032" },
  { icon: <SiFigma />, label: "Figma", color: "#f24e1e" },
  { icon: <SiPowerbi />, label: "Power BI", color: "#f2c94c" },
  { icon: <SiOracle />, label: "Oracle", color: "#f80000" },
  { icon: <SiLinux />, label: "Linux", color: "#fcc624" },
  { icon: <SiMicrosoftexcel />, label: "Excel", color: "#217346" },
  { icon: <SiPostman />, label: "Postman", color: "#ff6c37" },
  { icon: <SiNotion />, label: "Notion", color: "#666" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((t, i) => (
        <Col
          key={i}
          xs={4} md={2}
          style={{ textAlign: "center", marginBottom: "8px" }}
        >
          <div className="tech-icons" title={t.label}>
            {t.icon}
          </div>
          <span className="tech-icon-label">{t.label}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
