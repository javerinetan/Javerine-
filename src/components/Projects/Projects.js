import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VAP from "../../Assets/Projects/VAP.png";
import LeTimelessTrésor from "../../Assets/Projects/LeTimelessImage.png";
import srm from "../../Assets/Projects/project2.png";
import pytea from "../../Assets/pytea.png";
import PAP from "../../Assets/PAP.png";
import PAP_Report from "../../Assets/PAP Report.pdf";
import QuizIt from "../../Assets/QuizIt.png";
import BDMP from "../../Assets/Projects/BDMP.png";
import ACDashboard from "../../Assets/Projects/AC_dashboard.jpg";
import KakiAd from "../../Assets/Projects/Kaki_ad.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          My <strong className="purple">Projects</strong>
        </h1>
        <div className="section-divider" />
        <p className="project-sub" style={{ textAlign: "center" }}>
          A selection of projects I've built — many awarded with Distinction ✨
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KakiAd}
              isBlog={false}
              title="KakiGo"
              appsused="Vue, Node.js, MongoDB, Socket.IO, Maps"
              description="A mobile-first web app that helps friends in Singapore go from 'let's hang out' to a plan: when to meet, where to meet, where to eat and where to go, with live chat on the day. Pitched with a skit and an ad, and planned for the app store."
              ghLink="/project/kakigo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ACDashboard}
              isBlog={false}
              title="Assessment Checker"
              appsused="Java, OOP, SQLite, Web Dashboard"
              description="A team-built Java system that grades a whole class's programming submissions in one go: it unzips, repairs and runs student code safely, scores every test case, and shows teachers and students the results on a dashboard. I planned the workflow and built the ingest and identity stages."
              ghLink="/project/assessment-checker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BDMP}
              isBlog={false}
              title="Game Community Analytics"
              appsused="Python, NLP, Topic Modelling, Web Scraping, Databricks"
              description="A big-data project on what gamers think of League of Legends, Valorant and Dota 2. I built the automated Reddit scraping and cleaning pipeline, topic and sentiment models, and a live-updating dashboard, and worked on a champion-matchup dashboard with a teammate."
              ghLink="/project/game-analytics"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizIt}
              isBlog={false}
              title="QuizIT"
              appsused="PHP, MySQL, HTML, Database"
              description="A PHP-based quiz website with a database backend, built for a Gachon University assignment to enhance student learning through interactive quizzes and dynamic content."
              ghLink="https://github.com/javerinetan/Quiz-Website-using-database.git"
              demoLink="https://www.youtube.com/watch?v=h3VSX_NzaEA&feature=youtu.be"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PAP}
              isBlog={false}
              title="Reducing Energy Consumption"
              appsused="Data Analytics, KNIME, PowerBI, Tableau"
              description="A data analytics capstone project that predicts peak electricity demand in Singapore using KNIME workflows and PowerBI dashboards — enabling proactive environmental monitoring."
              ghLink={PAP_Report}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pytea}
              isBlog={false}
              title="PyTea — Bubble Tea Website"
              appsused="Flask, Python, HTML, JavaScript"
              description="A full-stack website created to help PyTea digitalise their brand. The name cleverly merges 'Python' and 'tea' — a playful yet tech-inspired identity for a bubble tea shop."
              ghLink="https://github.com/javerinetan/PyTea"
              demoLink="https://youtu.be/XAgLWrt9qEQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VAP}
              isBlog={false}
              title="Housing Price Analysis"
              appsused="PowerBI, Data Visualisation"
              description="Used PowerBI to clean, transform, and analyse datasets to uncover the key factors influencing residential housing prices in Singapore — with interactive dashboards."
              ghLink="https://github.com/javerinetan/VAP_Public-Version"
              demoLink="https://youtu.be/GwyiA7Kgutk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={srm}
              isBlog={false}
              title="Is Singapore a Good Country to Live In?"
              appsused="Excel, Statistical Methods"
              description="A statistical research project that investigates whether Singapore ranks as a highly liveable country, drawing from objective quality-of-life and infrastructure data."
              ghLink="https://github.com/javerinetan/Statistical-Research-"
              demoLink="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:f33f5f7a-a87e-4de9-b191-f246a915af15"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LeTimelessTrésor}
              isBlog={false}
              title="Le Timeless Trésor"
              appsused="HTML, CSS, JavaScript"
              description="A French-themed luxury hotel website where minimalist design meets opulence. Crafted with pure HTML/CSS/JS to create an immersive, elegant digital experience."
              ghLink="https://github.com/javerinetan/la-timeless-tresor"
              demoLink="https://letimelesstresor.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
