import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMapPin, FiArrowRight } from "react-icons/fi";
import { MdOutlineRestaurant } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";
import portrait from "../../Assets/avatar2.png";
import Particle from "../Particle";
import RotatingWords from "./RotatingWords";
import AboutMe from "../About/AboutMe";
import Skills from "../About/Skills";

const socials = [
  { href: "https://github.com/javerinetan", icon: <AiFillGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/javerine-tan-a79231242", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: "mailto:javerinetan05@gmail.com", icon: <AiOutlineMail />, label: "Email" },
];

function Home() {
  return (
    <section>
      {/* ── Hero ── */}
      <div className="hero" id="home">
        <Particle />
        <Container className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title enter" style={{ "--i": 1 }}>
              Hi, I’m <span className="hero-name">Javerine Tan</span>
              <span className="hero-nickname" aria-label="but you can call me Jae">
                but call me Jae
              </span>
            </h1>

            <p className="hero-lede enter" style={{ "--i": 2 }}>
              I build{" "}
              <RotatingWords
                words={[
                  "full-stack web apps",
                  "data dashboards",
                  "AI experiments",
                  "communities for youths",
                ]}
              />
            </p>

            <p className="hero-summary enter" style={{ "--i": 3 }}>
              I build thoughtful digital products and turn complex ideas into
              clear, useful experiences.
            </p>

            <div className="hero-actions enter" style={{ "--i": 4 }}>
              <Link className="btn-pill btn-pill-primary" to="/project">
                View my work <FiArrowRight aria-hidden="true" />
              </Link>
              <Link className="btn-pill btn-pill-ghost" to="/credentials">
                Résumé &amp; testimonials
              </Link>
            </div>

            <ul className="hero-socials enter" style={{ "--i": 5 }}>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual enter" style={{ "--i": 2 }}>
            <div className="portrait">
              <div className="portrait-ring" aria-hidden="true" />
              <img src={portrait} alt="Portrait of Javerine Tan" className="portrait-img" />

              <span className="portrait-note" aria-hidden="true">
                that’s me!
                <svg viewBox="0 0 60 40" className="portrait-arrow">
                  <path d="M4 6 C 24 4, 44 12, 52 32" />
                  <path d="M42 28 L 52 33 L 55 22" />
                </svg>
              </span>

              <div className="sticker sticker-a">
                <FiMapPin aria-hidden="true" /> Based in Singapore
              </div>
              <div className="sticker sticker-b">
                <HiOutlineSparkles aria-hidden="true" /> President, YouthTechSG @ SMU
              </div>
              <div className="sticker sticker-c">
                <MdOutlineRestaurant aria-hidden="true" /> Experimental home cook
              </div>
            </div>
          </div>
        </Container>

        <a href="#about" className="scroll-cue" aria-label="Scroll to About me">
          <span />
        </a>
      </div>

      <AboutMe />
      <Skills />
    </section>
  );
}

export default Home;
