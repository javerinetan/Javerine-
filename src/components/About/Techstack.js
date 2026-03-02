import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiPython, DiPhp,
} from "react-icons/di";
import { SiUbuntu, SiMysql, SiFlask, SiTableau, SiKnime } from "react-icons/si";
import { FaRProject } from "react-icons/fa";

const skills = [
  { icon: <DiHtml5 />, label: "HTML5", color: "#e44d26" },
  { icon: <DiCss3 />, label: "CSS3", color: "#1572b6" },
  { icon: <DiJavascript1 />, label: "JavaScript", color: "#f7df1e" },
  { icon: <DiReact color="#61DBFB" />, label: "React", color: "#61DBFB" },
  { icon: <DiNodejs />, label: "Node.js", color: "#8cc84b" },
  { icon: <DiPython />, label: "Python", color: "#3572a5" },
  { icon: <FaRProject />, label: "R", color: "#276dc3" },
  { icon: <DiPhp />, label: "PHP", color: "#8892be" },
  { icon: <SiFlask />, label: "Flask", color: "#666" },
  { icon: <SiMysql />, label: "MySQL", color: "#4479a1" },
  { icon: <SiUbuntu />, label: "Ubuntu", color: "#e95420" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((s, i) => (
        <Col
          key={i}
          xs={4} md={2}
          style={{ textAlign: "center", marginBottom: "8px" }}
        >
          <div className="tech-icons" title={s.label}>
            {s.icon}
          </div>
          <span className="tech-icon-label">{s.label}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
