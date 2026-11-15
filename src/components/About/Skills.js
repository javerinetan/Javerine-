import React from "react";
import { Container } from "react-bootstrap";
import { FaJava } from "react-icons/fa";
import { DiHtml5, DiCss3 } from "react-icons/di";
import {
  SiPython, SiJavascript, SiR, SiPhp, SiMysql, SiReact, SiNodedotjs, SiFlask,
  SiOracle, SiPowerbi, SiMicrosoftexcel, SiVisualstudiocode, SiPycharm, SiGit,
  SiGithub, SiPostman, SiFigma, SiLinux, SiUbuntu,
} from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import Reveal from "../Reveal";

/*
 * Edit this list to update the skills section.
 * `color` is the brand colour the icon takes on hover.
 * `isNew: true` shows a small "learning" tag.
 */
const groups = [
  {
    title: "Languages",
    note: "What I write code in",
    items: [
      { label: "Java", icon: <FaJava />, color: "#f89820", isNew: true },
      { label: "Python", icon: <SiPython />, color: "#3776ab" },
      { label: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
      { label: "SQL", icon: <FiDatabase />, color: "#4479a1" },
      { label: "R", icon: <SiR />, color: "#276dc3" },
      { label: "PHP", icon: <SiPhp />, color: "#8892be" },
      { label: "HTML", icon: <DiHtml5 />, color: "#e44d26" },
      { label: "CSS", icon: <DiCss3 />, color: "#1572b6" },
    ],
  },
  {
    title: "Frameworks & runtimes",
    note: "What I build apps with",
    items: [
      { label: "React", icon: <SiReact />, color: "#61dafb" },
      { label: "Node.js", icon: <SiNodedotjs />, color: "#5fa04e" },
      { label: "Flask", icon: <SiFlask />, color: "#8f8f8f" },
    ],
  },
  {
    title: "Data & analytics",
    note: "Where the numbers live",
    items: [
      { label: "MySQL", icon: <SiMysql />, color: "#4479a1" },
      { label: "Oracle", icon: <SiOracle />, color: "#f80000" },
      { label: "Power BI", icon: <SiPowerbi />, color: "#f2c811" },
      { label: "Excel", icon: <SiMicrosoftexcel />, color: "#217346" },
    ],
  },
  {
    title: "Tools & platforms",
    note: "My everyday setup",
    items: [
      { label: "VS Code", icon: <SiVisualstudiocode />, color: "#007acc" },
      { label: "PyCharm", icon: <SiPycharm />, color: "#21d789" },
      { label: "Git", icon: <SiGit />, color: "#f05032" },
      { label: "GitHub", icon: <SiGithub />, color: "#8b949e" },
      { label: "Postman", icon: <SiPostman />, color: "#ff6c37" },
      { label: "Figma", icon: <SiFigma />, color: "#f24e1e" },
      { label: "Linux", icon: <SiLinux />, color: "#fcc624" },
      { label: "Ubuntu", icon: <SiUbuntu />, color: "#e95420" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <Container>
        <Reveal className="section-head">
          <p className="section-kicker">Toolkit</p>
          <h2 className="section-title">
            What I <span className="accent">work with</span>
          </h2>
        </Reveal>

        <div className="skills-grid">
          {groups.map((group, gi) => (
            <Reveal key={group.title} className="skill-group" delay={gi * 70}>
              <div className="skill-group-head">
                <h3>{group.title}</h3>
                <span>{group.note}</span>
              </div>
              <ul className="skill-chips">
                {group.items.map((item) => (
                  <li key={item.label} className="skill-chip" style={{ "--brand": item.color }}>
                    <span className="skill-chip-icon" aria-hidden="true">{item.icon}</span>
                    {item.label}
                    {item.isNew && <span className="skill-chip-new">learning</span>}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
