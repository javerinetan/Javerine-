import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineHeart, AiOutlineStar, AiOutlineCode } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

function AboutCard() {
  return (
    <Card className="quote-card-view fade-up">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.9" }}>
            Hi! I'm{" "}
            <span className="purple" style={{ fontWeight: 700 }}>
              Javerine Tan Jing Xuan
            </span>
            , or simply{" "}
            <span className="purple" style={{ fontWeight: 700 }}>
              Jae
            </span>
            &nbsp;—&nbsp;a passionate technologist from{" "}
            <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              <FiMapPin style={{ verticalAlign: "middle" }} />
              <span className="purple" style={{ fontWeight: 600 }}>Singapore</span>.
            </span>
          </p>
          <p style={{ textAlign: "justify", lineHeight: "1.9" }}>
            I'm a <span className="purple" style={{ fontWeight: 600 }}>Software Engineering student at SMU</span> and
            a proud alumna of <span className="purple" style={{ fontWeight: 600 }}>NYP's Diploma in Applied AI &amp; Analytics</span>.
            My journey in tech started with coding drones and robots in secondary school — and I haven't
            stopped exploring since. I care deeply about using technology to{" "}
            <span className="purple" style={{ fontWeight: 600 }}>uplift others</span> and make a
            real-world impact.
          </p>

          <div style={{ marginTop: "1rem", marginBottom: "1.2rem" }}>
            <div style={{ fontWeight: 700, marginBottom: "0.5rem", opacity: 0.85, fontSize: "0.9em", letterSpacing: "1px", textTransform: "uppercase" }}>
              Beyond the screen
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { icon: <AiOutlineHeart />, text: "Cooking &amp; experimenting with recipes" },
                { icon: <AiOutlineStar />, text: "Ice skating &amp; staying active" },
                { icon: <AiOutlineCode />, text: "Building side projects for fun" },
                { icon: <AiOutlineHeart />, text: "Travelling &amp; discovering new cultures" },
              ].map((item, i) => (
                <li key={i} className="about-activity" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="purple">{item.icon}</span>
                  <span dangerouslySetInnerHTML={{ __html: item.text }} />
                </li>
              ))}
            </ul>
          </div>

          <p
            style={{
              color: "var(--imp-text-color)",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "1.05em",
              borderLeft: "3px solid var(--imp-text-color)",
              paddingLeft: "1rem",
              margin: "1rem 0 0.5rem",
            }}
          >
            "Never give up before you achieve victory — never abandon, never give up!"
          </p>
          <footer className="blockquote-footer" style={{ paddingLeft: "1rem" }}>Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
