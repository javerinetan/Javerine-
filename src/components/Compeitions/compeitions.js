import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CompeitionCard from "../Compeitions/compeitionscard";
import Particle from "../Particle";
import allibaba from "../../Assets/Projects/Allibaba.png";
import AWS from "../../Assets/Projects/AWS.png";
import Govtech from "../../Assets/Projects/GeekOut2022.png";
import DroneOdyseey from "../../Assets/Projects/DroneOdyssey.jpg";
import EAGLES from "../../Assets/Projects/EGALES.png";
import IJ from "../../Assets/IJ.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Achievements</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few achievements, awards and events I have got and participated over the years. View all on my linkedin.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={AWS}
              isBlog={false}
              title="Microsoft Certified: Power BI Data Analyst Associate"
              appsused="Microsoft Test"
              description="As someone who has completed the Power BI Data Analyst certification, I can attest that it validates one's ability to use Microsoft Power BI effectively in order to help businesses make the most of their data assets.
              "
            ghLink= "https://www.credly.com/badges/ba5dcb13-f615-4d6a-86c0-c218f5882b84/linked_in?t=rrasa3"
            />
          </Col>
          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={AWS}
              isBlog={false}
              title="Build On Singapore Hackathon 2022 Amazon"
              appsused="1st Runner Up "
              description="It was an eye opening and memorable experience that will help me develop my skills i 
              need in the future. My team we created a robot solution prototype for the 
              National University Health System(NUHS) problem statement.
              "
            ghLink= "https://www.linkedin.com/feed/update/urn:li:activity:6985527187760193536/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={allibaba}
              isBlog={false}
              title="Alibaba Cloud"
              appsused="Job Shadow"
              description="It was an learning experience to be able to visit and learn more about Alibaba Cloud. 
              It has boost my interest in the IT field. I was able to listen from many different perspective about IT and how it can be used. "
              ghLink="https://www.linkedin.com/feed/update/urn:li:activity:6985915779766517760/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={Govtech}
              isBlog={false}
              title="GeekOut 2022"
              appsused="Compeition, Participation"
              description="I have really enjoyed my time at Govtech. 
              I have learned new skills over the five days and although my team did not win it was interesting to meet new people and learn from one another. 
              The five days have thought me many new skills."
              ghLink="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:b86ad6e5-ab9b-4799-b8da-1bf68500f54a"           
            />
          </Col>
          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={IJ}
              isBlog={false}
              title="Mother St Mathilde Awards"
              appsused="Outstanding Leadership Award"
              description="I was from CHIJ Secondary School and I was part of the Automation and Robotics Club (ARC). 
              I was the Head of Logistics in the club. I help to plan materials to prepare the club for compeitions 
              and training sessions with the coaches."
              ghLink="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:ef739819-da63-459c-a724-215f755d8819"           
            />
          </Col>
          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={EAGLES}
              isBlog={false}
              title="EAGLES Award"
              appsused="Edusave Awards for Achievement, Good Leadership and Service "
              description="I was awarded the EAGLES awards for demonstrating leadership qualities, 
              service to community and schools, excellence in non-academic activities, and good conduct."
              ghLink="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:4219892f-4452-4688-92aa-29fd516e4ab6"           
            />
          </Col>
          <Col md={4} className="project-card">
            <CompeitionCard
              imgPath={DroneOdyseey}
              isBlog={false}
              title="Drone Odyssey 2020 - Coding Challenge"
              appsused="1st Individual placing"
              description="Represented my school and obtain 1st place. Drone Odyseey orgainsed by Science Center. 
              I had to code for the drone to detect its location and land only at safe area."
              ghLink="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:0388fab0-290b-41df-9ef1-e9a4d6343a89"           
            />
          </Col> 



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
