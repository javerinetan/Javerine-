import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineHeart } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Javerine </span>
            from <span className="purple"> Singapore .</span> People usually call me <span className="purple">Jae.</span> 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineHeart /> Cooking
            </li>
            <li className="about-activity">
              <AiOutlineHeart /> Ice Skating
            </li>
            <li className="about-activity">
              <AiOutlineHeart /> Travelling around the world
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never give up before you achieve victory! Never abandon, never give up!"{" "}
          </p>
          <footer className="blockquote-footer">anonymous</footer>
        </blockquote>
        
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
