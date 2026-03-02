import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const techTags = props.appsused
    ? props.appsused.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  return (
    <Card className="project-card-view">
      <div style={{ overflow: "hidden", borderRadius: "16px 16px 0 0" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            height: "200px",
            objectFit: "cover",
            width: "100%",
            transition: "transform 0.45s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
      <Card.Body style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Card.Title style={{ fontWeight: 700, fontSize: "1.08em" }}>
          {props.title}
        </Card.Title>

        {/* Tech badges */}
        {techTags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "4px" }}>
            {techTags.map((tag, i) => (
              <span key={i} className="tech-badge">{tag}</span>
            ))}
          </div>
        )}

        {props.published && (
          <Card.Text style={{ textAlign: "center", marginBottom: 0 }}>
            <b className="pink">{props.published}</b>
          </Card.Text>
        )}

        <Card.Text
          style={{
            textAlign: "justify",
            fontSize: "0.93em",
            lineHeight: "1.65",
            color: "var(--muted-text)",
            flexGrow: 1,
          }}
        >
          {props.description}
        </Card.Text>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "auto" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "Project Details"}
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
