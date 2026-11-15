import React from "react";
import { Container } from "react-bootstrap";
import { MdOutlineRestaurant } from "react-icons/md";
import { FiCode, FiCompass } from "react-icons/fi";
import Reveal from "../Reveal";

// Edit these to update the "My journey" timeline (newest first).
const journey = [
  {
    when: "Now",
    title: "Software Engineering, SMU",
    body: "Studying how to build software that scales, and pushing myself to grow every semester.",
  },
  {
    when: "Now",
    title: "President, YouthTechSG @ SMU",
    body: "Leading a chapter that helps primary and secondary school kids learn to surf the web safely, and listens to youths across Singapore to bridge the gaps they face.",
  },
  {
    when: "Now",
    title: "Developer, Zing Daily",
    body: "Building the iOS and Android apps and redeveloping the web application for Zing Daily, a digital news platform with concise, source-first briefings and audio stories. Live and used by readers today.",
  },
  {
    when: "Before",
    title: "Diploma in Applied AI & Analytics, NYP",
    body: "Where I fell for data, machine learning, and turning numbers into decisions.",
  },
  {
    when: "Where it began",
    title: "Robotics & Automation Club",
    body: "Coding drones and robots in secondary school. My first taste of AI.",
  },
];

const hobbies = [
  { icon: <MdOutlineRestaurant />, title: "Experimental cooking", body: "Always trying new recipes and flavours" },
  { icon: <FiCode />, title: "Side projects", body: "Building things just for fun" },
  { icon: <FiCompass />, title: "Travelling", body: "Discovering new cultures and food" },
];

export default function AboutMe() {
  return (
    <section className="about" id="about">
      <Container>
        <Reveal className="section-head">
          <p className="section-kicker">About me</p>
          <h2 className="section-title">
            A curious builder who likes <span className="accent">helping people</span>
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-story" delay={60}>
            <p>
              I’m <strong>Javerine Tan Jing Xuan</strong>, though most people call me{" "}
              <strong>Jae</strong>. I’m a Software Engineering student at{" "}
              <strong>Singapore Management University</strong>, based in Singapore.
            </p>
            <p>
              My love for technology started in secondary school, when I joined the Robotics
              &amp; Automation Club and spent my afternoons coding drones and robots. That
              curiosity led me to a <strong>Diploma in Applied AI &amp; Analytics at NYP</strong>,
              and I haven’t stopped exploring since.
            </p>
            <p>
              Today I’m most excited about <strong>full-stack web development</strong>,{" "}
              <strong>data analytics and visualisation</strong>, and finding out what AI can do
              beyond the ordinary. Above all, I want to use tech to make life a little easier
              for others.
            </p>

            <figure className="about-quote">
              <blockquote>
                “Never give up before you achieve victory. Never abandon, never give up!”
              </blockquote>
              <figcaption>A motto I keep coming back to</figcaption>
            </figure>
          </Reveal>

          <Reveal className="journey" delay={120}>
            <h3 className="journey-title">My journey</h3>
            <ol className="journey-list">
              {journey.map((step) => (
                <li key={step.title} className="journey-item">
                  <span className="journey-when">{step.when}</span>
                  <span className="journey-what">{step.title}</span>
                  <span className="journey-body">{step.body}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="hobbies-head" delay={0}>
          <h3>Beyond the screen</h3>
        </Reveal>
        <div className="hobbies">
          {hobbies.map((h, i) => (
            <Reveal key={h.title} className="hobby" delay={i * 60}>
              <span className="hobby-icon" aria-hidden="true">{h.icon}</span>
              <span className="hobby-title">{h.title}</span>
              <span className="hobby-body">{h.body}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
