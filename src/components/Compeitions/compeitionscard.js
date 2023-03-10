import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
    AiOutlineRead,
    AiOutlineTrophy,
} from "react-icons/ai"

function CompeitionCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" height="40%"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          <b className="pink">{props.appsused}</b>            
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <AiOutlineRead /> &nbsp;
          {props.isBlog ? "Blog" : "More Details"}
        </Button>
        
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <AiOutlineTrophy /> &nbsp;
            {"Demo"}
          </Button>
        )}

        
      </Card.Body>
    </Card>
  );
}
export default CompeitionCards;
