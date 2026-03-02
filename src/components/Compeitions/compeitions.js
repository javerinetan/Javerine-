import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CompeitionCard from "../Compeitions/compeitionscard";
import Particle from "../Particle";
import allibaba from "../../Assets/Projects/Allibaba.png";
import Microsoft from "../../Assets/Projects/MicroAA.png";
import AWS from "../../Assets/Projects/AWS.png";
import Govtech from "../../Assets/Projects/GeekOut2022.png";
import DroneOdyseey from "../../Assets/Projects/DroneOdyssey.jpg";
import EAGLES from "../../Assets/Projects/EGALES.png";
import IJ from "../../Assets/IJ.png";

function Achievements() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          <strong className="purple">Achievements</strong> &amp; Awards
        </h1>
        <div className="section-divider" />
        <p className="project-sub" style={{ textAlign: "center" }}>
          Competitions, certifications, and recognitions I'm proud of 🏆
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={Microsoft}
              isBlog={false}
              title="Microsoft Certified: Power BI Data Analyst Associate"
              appsused="Microsoft Certification"
              description="Validates the ability to use Microsoft Power BI effectively to help businesses make the most of their data assets — covering data modelling, visualisation, and DAX."
              ghLink="https://www.credly.com/badges/ba5dcb13-f615-4d6a-86c0-c218f5882b84/linked_in?t=rrasa3"
            />
          </Col>

          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={AWS}
              isBlog={false}
              title="Build On Singapore Hackathon 2022 — Amazon"
              appsused="1st Runner Up"
              description="A memorable hackathon experience where my team created a robot solution prototype for the National University Health System (NUHS), developing problem-solving skills and technical collaboration."
              ghLink="https://www.linkedin.com/feed/update/urn:li:activity:6985527187760193536/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={DroneOdyseey}
              isBlog={false}
              title="Drone Odyssey 2020 — Coding Challenge"
              appsused="1st Place (Individual)"
              description="Represented my school and achieved 1st place at the Science Centre's Drone Odyssey event. Coded a drone to detect its location and autonomously land only in designated safe zones."
              ghLink="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:0388fab0-290b-41df-9ef1-e9a4d6343a89"
            />
          </Col>

          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={Govtech}
              isBlog={false}
              title="GovTech GeekOut 2022"
              appsused="Competition, Participation"
              description="A 5-day intensive tech experience at GovTech Singapore where I collaborated with peers, learned new skills in civic tech, met industry professionals, and expanded my perspective on technology for good."
              ghLink="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:b86ad6e5-ab9b-4799-b8da-1bf68500f54a"
            />
          </Col>

          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={IJ}
              isBlog={false}
              title="Mother St. Mathilde Award"
              appsused="Outstanding Leadership Award"
              description="Awarded at CHIJ Secondary School for exceptional leadership as Head of Logistics in the Automation & Robotics Club (ARC), where I organised materials for competitions and coordinated training sessions."
              ghLink="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:ef739819-da63-459c-a724-215f755d8819"
            />
          </Col>

          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={EAGLES}
              isBlog={false}
              title="EAGLES Award"
              appsused="Edusave Award for Achievement, Good Leadership & Service"
              description="Awarded by the Ministry of Education for demonstrating outstanding leadership qualities, community service, excellence in non-academic activities, and good character and conduct."
              ghLink="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:4219892f-4452-4688-92aa-29fd516e4ab6"
            />
          </Col>

          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={allibaba}
              isBlog={false}
              title="Alibaba Cloud Job Shadow"
              appsused="Industry Exposure"
              description="An enriching industry immersion at Alibaba Cloud, where I gained insights from diverse IT professionals about cloud computing, AI applications, and how technology scales to serve millions globally."
              ghLink="https://www.linkedin.com/feed/update/urn:li:activity:6985915779766517760/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
