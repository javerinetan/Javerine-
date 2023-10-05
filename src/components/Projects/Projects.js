import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VAP from "../../Assets/Projects/VAP.png";
import LeTimelessTrésor from "../../Assets/Projects/LeTimelessImage.png";
import srm from "../../Assets/Projects/project2.png";
import pytea from "../../Assets/pytea.png";
import PAP from "../../Assets/PAP.png"

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
              imgPath={PAP}
              isBlog={false}
              title="Reducing Energy Consumption"
              appsused="Data Analytics, KNIME, PowerBI, Tableu "
              description="Predict peak energy demand for electricity in Singapore, enabling proactive environmental monitoring and effective resource management strategies.
              "
              ghLink= "https://github.com/NatelieNeo/WEBAP-Assignment/tree/main"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pytea}
              isBlog={false}
              title="PyTea"
              appsused="Flask, Python, HTML, Javascript "
              description="The website was created using the above coding languages to help Pytea to digitalise their brand. The name is PyTea cleverly combines the word “Python” with “tea”, creating a playful yet tech-inspired name for our bubble tea shop."
              ghLink= "https://github.com/NatelieNeo/WEBAP-Assignment/tree/main"
              demoLink="https://youtu.be/XAgLWrt9qEQ"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LeTimelessTrésor}
              isBlog={false}
              title="Le Timeless Trésor"
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
              ghLink="https://github.com/javerinetan/VAP_Public-Version"
              demoLink="https://youtu.be/GwyiA7Kgutk"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
