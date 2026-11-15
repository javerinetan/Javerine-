import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Reveal from "../Reveal";
import landing from "../../Assets/Projects/Kaki_landing.jpg";
import dashboard from "../../Assets/Projects/Kaki_dashboard.jpg";
import hangouts from "../../Assets/Projects/Kaki_hangouts.jpg";
import plan from "../../Assets/Projects/Kaki_plan.jpg";
import when from "../../Assets/Projects/Kaki_when.jpg";
import where from "../../Assets/Projects/Kaki_where.jpg";
import eat from "../../Assets/Projects/Kaki_eat.jpg";
import swipe from "../../Assets/Projects/Kaki_swipe.png";
import livemap from "../../Assets/Projects/Kaki_livemap.png";
import transport from "../../Assets/Projects/Kaki_transport.png";
import memories from "../../Assets/Projects/Kaki_memories.png";
import architecture from "../../Assets/Projects/Kaki_architecture.png";

const shots = [
  { src: landing, title: "Landing page", caption: "A clear promise first: where are we meeting, sorted in minutes.", alt: "KakiGo landing page" },
  { src: dashboard, title: "Dashboard", caption: "Your crews and a calendar where you mark when you are free.", alt: "Dashboard with greeting, chats and calendar" },
  { src: hangouts, title: "Your hangouts", caption: "What is coming up, how much is decided, and what needs your attention.", alt: "List of upcoming hangouts and items needing attention" },
  { src: plan, title: "The plan", caption: "When, where to meet, where to eat and the agenda, each with its status.", alt: "Hangout plan showing when, where to meet, where to eat and agenda" },
  { src: when, title: "When to meet", caption: "Free times are shaded on a calendar and ranked into the best days.", alt: "Best days list and shaded calendar of when friends are free" },
  { src: where, title: "Where to meet", caption: "A fair meeting spot for everyone, found from where each friend starts.", alt: "Locked meeting spot with eating place and starting point options" },
  { src: eat, title: "Where to eat", caption: "Cards that work for everyone, with allergies and budget built in.", alt: "Food choices with group food needs and budget slider" },
  { src: swipe, title: "Swipe to decide", caption: "Food and activity suggestions dealt as cards. Swipe right on what you would enjoy.", alt: "Swipe card suggesting a food centre with options to like or skip" },
  { src: livemap, title: "Live map and chat", caption: "On the day: a live map, who is on the way, and group chat with quick actions like Poke and Ask ETA.", alt: "Live map with friends, directions button and group chat with quick actions" },
  { src: transport, title: "Getting there", caption: "Step-by-step bus and train options from where you are, with arrival time and how late you will be.", alt: "Transport options to the meeting spot with trip times" },
  { src: memories, title: "Memories", caption: "Photos from each hangout become story cards to look back on.", alt: "Wrapped page with photo story cards for each hangout" },
];

const mine = [
  { title: "Product and design", body: "The look and feel of the whole app, and the landing page that introduces it." },
  { title: "Dashboard", body: "Your crews, hangouts, what needs attention, and a calendar to mark when you are free." },
  { title: "Planning decisions", body: "When to meet, where to meet and where to eat and go, each with a fair way for a group to decide." },
  { title: "Live on the day", body: "Group chat, live locations and tracking how everyone is getting there." },
  { title: "Memories", body: "I also worked on the memories side: photos from the day and the story-card recaps." },
];

const stack = ["Vue 3", "Vite", "Node.js", "Express", "MongoDB", "Socket.IO", "MapLibre", "three.js", "OneMap", "Playwright"];

export default function KakiGo() {
  return (
    <section className="case-study">
      <Container>
        <Link to="/project" className="case-back">
          <FiArrowLeft aria-hidden="true" /> All projects
        </Link>

        <Reveal className="section-head">
          <p className="section-kicker">Web app · SMU · Pitch and final</p>
          <h1 className="section-title">
            Less planning, <span className="accent">more time with your kakis</span>
          </h1>
          <p className="case-lede">
            KakiGo is a mobile-first web app that takes a group of friends in Singapore from
            “let’s hang out” to a same-day plan in one shared space: when to meet, where to
            meet, what to eat and where to go.
          </p>
        </Reveal>

        <Reveal className="case-videos" delay={60}>
          <figure className="case-video">
            <div className="case-video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/mpWWU6skhPM"
                title="KakiGo two-minute pitch skit"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <figcaption>
              <strong>The pitch</strong>
              <span>A two-minute skit showing the problem and how KakiGo solves it.</span>
            </figcaption>
          </figure>
          <figure className="case-video case-video-tall">
            <div className="case-video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/E3c1TeKtdSs"
                title="KakiGo ad"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <figcaption>
              <strong>The ad</strong>
              <span>A short ad made to promote the app in a fun, realistic way.</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="case-actions">
          <a className="btn-pill btn-pill-primary" href="https://kaki-go.vercel.app" target="_blank" rel="noreferrer">
            Open the live app
          </a>
        </div>

        <Reveal className="case-block">
          <h2>The problem we felt ourselves</h2>
          <p>
            As students, planning a hangout meant juggling a dozen apps: one for the group
            chat, one for maps, one for finding food, one for splitting the bill. Everything
            was scattered, and one person always ended up doing all the work. We built the
            tool we wished we had: one place where a group decides together.
          </p>
        </Reveal>

        <Reveal className="case-block">
          <h2>My part</h2>
          <div className="case-challenges">
            {mine.map((m) => (
              <div key={m.title} className="case-challenge">
                <strong>{m.title}</strong>
                <span>{m.body}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="case-block">
          <h2>The app</h2>
          <p>Swipe through the main screens. They are from the running app, on a phone-sized screen.</p>
          <div className="phone-strip" role="list" tabIndex={0} aria-label="App screenshots">
            {shots.map((s) => (
              <figure key={s.title} className="phone-shot" role="listitem">
                <img src={s.src} alt={s.alt} loading="lazy" />
                <figcaption>
                  <strong>{s.title}</strong>
                  <span>{s.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal className="case-block">
          <h2>How it is built</h2>
          <p>
            A Vue app talks to one Express server. The server keeps data in MongoDB, pushes
            live updates over WebSockets, and calls public Singapore APIs for routes and
            weather so keys stay private. Core journeys are covered by browser tests.
          </p>
          <figure className="case-figure">
            <img src={architecture} alt="Architecture diagram: Vue frontend, Express backend, external services" />
          </figure>
          <div className="case-tags">
            {stack.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </Reveal>

        <Reveal className="case-block">
          <h2>What is next</h2>
          <p>
            KakiGo is already deployed and live. We plan to keep building it and aim to
            release it on the app store after more testing with real groups of friends.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
