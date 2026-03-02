import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlineRead, AiOutlineTrophy } from "react-icons/ai";
import { FaMedal } from "react-icons/fa";

function CompeitionCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{ overflow: "hidden", borderRadius: "16px 16px 0 0" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            height: "190px",
            objectFit: "cover",
            width: "100%",
            objectPosition: "center top",
            transition: "transform 0.45s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
      <Card.Body style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Card.Title style={{ fontWeight: 700, fontSize: "1.05em" }}>
          {props.title}
        </Card.Title>

        {props.appsused && (
          <div>
            <span className="achievement-badge">
              <FaMedal /> {props.appsused}
            </span>
          </div>
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

        <div style={{ marginTop: "auto", display: "flex", gap: "8px" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <AiOutlineRead /> &nbsp;
            {props.isBlog ? "Blog" : "More Details"}
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <AiOutlineTrophy /> &nbsp;See More
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CompeitionCards;
