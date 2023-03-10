import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VAP from "../../Assets/Projects/project3.png";
import LeTimelessTrésor from "../../Assets/Projects/LeTimelessImage.png";
import srm from "../../Assets/Projects/project2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LeTimelessTrésor}
              isBlog={false}
              title="Le Timeless Trésor"
              appsused="HTML,CSS and Javascript "
              description="A high class french themed hotel website details about the hotel, facilities, restaurant and so on."
              ghLink= "https://letimelesstresor.netlify.app/"
              demoLink="https://letimelesstresor.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={srm}
              isBlog={false}
              title="Is Singapore a good country to live in?"
              appsused="Excel Sheet"
              description="Statistic Research to find out if Singapore is a good country to live in. 
              Using Statistical Research Method to investigate on this hypothesis "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:f33f5f7a-a87e-4de9-b191-f246a915af15"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VAP}
              isBlog={false}
              title="Housing Price Analysis"
              appsused="PowerBi"
              description="Using PowerBI dahsboard to clean data and analyse what factors influence Housing Prices in Singapore."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
