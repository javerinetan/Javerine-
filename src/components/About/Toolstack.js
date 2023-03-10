import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiAtom,
  SiOracle,
  SiFigma,
  SiPowerbi,
  SiPycharm,
  SiCisco,
  SiMicrosoftexcel,
} from "react-icons/si"
import {
  AiFillGithub
} from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Linux">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Atom">
        <SiAtom />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Oracle">
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <SiFigma/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PowerBI">
        <SiPowerbi/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pycharm">
        <SiPycharm/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <AiFillGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Cisco">
        <SiCisco/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Excel">
        <SiMicrosoftexcel/>
      </Col>

    </Row>
  );
}

export default Toolstack;
