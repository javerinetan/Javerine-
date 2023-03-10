import React from "react";
import { Col, Row} from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiPhp,
} from "react-icons/di";
import {
  SiUbuntu,
  SiMysql,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="HTML">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS">
        <DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NodeJs">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React" >
        <DiReact color="#61DBFB"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ubuntu">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="php">
        < DiPhp />
      </Col>
      
    </Row>
  );
}

export default Techstack;
