import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VAP from "../../Assets/Projects/VAP.png";
import LeTimelessTrĂ©sor from "../../Assets/Projects/LeTimelessImage.png";
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
          Here are a few projects I've worked on recently and received Distinction.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LeTimelessTrĂ©sor}
              isBlog={false}
              title="Le Timeless TrĂ©sor"
              appsused="HTML,CSS and Javascript "
              description="A French-themed luxury hotel website, where minimalist design meets opulent comfort to create a truly unforgettable experience."
              ghLink= "https://github.com/javerinetan/la-timeless-tresor"
              demoLink="https://letimelesstresor.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={srm}
              isBlog={false}
              title="Is Singapore a good country to live in?"
              appsused="Excel Sheet"
              description="Utilize statistical research methods to investigate if Singapore is a good country to live in based on objective data. "
              ghLink="https://github.com/javerinetan/Statistical-Research-"
              demoLink="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:f33f5f7a-a87e-4de9-b191-f246a915af15"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VAP}
              isBlog={false}
              title="Housing Price Analysis"
              appsused="PowerBi"
              description="Using PowerBI to clean data and analyse what factors influence Housing Prices in Singapore."
              ghLink="https://github.com/javerinetan/Visual-Analytics-Project"
              demoLink="https://youtu.be/GwyiA7Kgutk"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
