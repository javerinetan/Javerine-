import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Reveal from "../Reveal";
import dashboard from "../../Assets/Projects/AC_dashboard.jpg";
import upload from "../../Assets/Projects/AC_upload.jpg";
import results from "../../Assets/Projects/AC_results.jpg";
import students from "../../Assets/Projects/AC_students.jpg";
import repair from "../../Assets/Projects/AC_repair.jpg";
import insights from "../../Assets/Projects/AC_insights.jpg";

const shots = [
  {
    src: upload,
    title: "1. Upload the batch",
    alt: "Upload screen with a drop area for student ZIPs, class list and saved testers",
    caption: "Drop in every student ZIP at once. The class list and the instructor's testers are already on the server.",
  },
  {
    src: results,
    title: "2. Class results",
    alt: "Results summary with class average, highest and lowest score, submissions received and class notes",
    caption: "Class average, score range, who submitted and who is missing, with submissions that need review.",
  },
  {
    src: students,
    title: "3. Every student, every question",
    alt: "Table of students with per-question marks, status badges and a needs-support flag",
    caption: "Marks per question and a status for each submission: Valid, Repaired, Warning or Manual review.",
  },
  {
    src: repair,
    title: "4. What was fixed",
    alt: "Student detail panel showing marks by question and a folder-not-renamed repair fixed automatically",
    caption: "The detail panel records each automatic repair and lets a teacher adjust any case or question mark.",
  },
  {
    src: insights,
    title: "5. Class insights",
    alt: "Class insights with revision points and common compile errors",
    caption: "Common compile errors and revision points, plus an optional AI-written summary.",
  },
];

const numbers = [
  { value: "6", label: "person team", note: "CS102 group project, in Java" },
  { value: "51", label: "test programs", note: "All passing on a clean build" },
  { value: "~800", label: "fake submissions", note: "Generated to stress the grader" },
  { value: "32/32", label: "known marks correct", note: "On a 42-zip batch" },
];

const pipeline = [
  { title: "Ingest", body: "Safely unzips every submission (blocking zip-slip and zip bombs, unpacking nested zips) and works out who each student is from the zip name, folder name or file header." },
  { title: "Validate & repair", body: "Checks folder names, question folders, required files and headers, then fixes common mistakes on a working copy only, recording every change." },
  { title: "Compile & run", body: "Compiles each tester separately and runs it under a time limit, killing the whole process tree on infinite loops so one bad submission never stops the batch." },
  { title: "Score & check", body: "Scores every test case, keeps partial credit when a program hangs, and flags hard-coded answers and students who give the same wrong answer." },
  { title: "Report", body: "Shows results on a web dashboard and exports the score sheet in the required CSV format." },
];

const features = [
  { title: "Batch grading", body: "Drop in a whole class of ZIPs. A worker pool grades them in parallel with live progress." },
  { title: "Teacher dashboard", body: "Classes, uploads, results, anomalies and a detail drawer showing each repair and run log." },
  { title: "Student view", body: "Students upload to class ICE labs, run grading themselves and read saved feedback." },
  { title: "Class and course reports", body: "Pass rates by test case, topic and difficulty, common compile errors and trends across weeks." },
  { title: "Mark adjustments", body: "Change a case, drop a bad test or give class-wide credit, with reasons and a full audit trail." },
  { title: "Integrity checks", body: "Variant testers expose hard-coded answers; a similarity viewer flags matching wrong answers for review, never as proof." },
  { title: "Needs-support flag", body: "Highlights the bottom quarter of a class and the topics each student struggled with." },
  { title: "Optional AI helpers", body: "Reads an exam paper, drafts testers and summarises a class. It switches itself off without a key, and grading never depends on it." },
];

const mine = [
  "Planned the workflow and the feature list the team built from.",
  "Built the ingest and identity stages: safe unzipping, nested zips, matching each zip to a student, and flagging duplicate or missing submissions.",
  "Added parallel grading, so a worker pool marks many submissions at the same time.",
  "Worked on the exam-paper upload, tester generation and hidden tests with difficulty weights, plus the optional AI client and the course report.",
];

export default function AssessmentChecker() {
  const [shotIndex, setShotIndex] = useState(0);

  return (
    <section className="case-study">
      <Container>
        <Link to="/project" className="case-back">
          <FiArrowLeft aria-hidden="true" /> All projects
        </Link>

        <Reveal className="section-head">
          <p className="section-kicker">Team project · SMU · Java</p>
          <h1 className="section-title">
            Marking a whole class <span className="accent">in minutes</span>
          </h1>
          <p className="case-lede">
            Assessment Checker grades a class’s programming submissions in one go. It unpacks
            the ZIPs, fixes common folder mistakes, runs the instructor’s tests safely,
            scores every case and shows the results on a dashboard for teachers and students.
            Built in object-oriented Java by a team of six.
          </p>
        </Reveal>

        <Reveal className="case-cover" delay={60}>
          <img src={dashboard} alt="Assessment Checker teacher dashboard with exams, classes and summary tiles" />
        </Reveal>

        <div className="case-stats">
          {numbers.map((s, i) => (
            <Reveal key={s.label} className="case-stat" delay={i * 60}>
              <span className="case-stat-value">{s.value}</span>
              <span className="case-stat-label">{s.label}</span>
              <span className="case-stat-note">{s.note}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="case-block">
          <h2>My role</h2>
          <ul className="case-list">
            {mine.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="case-block">
          <h2>The problem</h2>
          <p>
            Marking programming labs by hand is slow, and students make small mistakes that
            have nothing to do with their code: a wrong folder name, a missing header, a
            zip inside a zip. The brief asked for a tool that handles all of that without
            clicking through each submission, and that never crashes on bad input.
          </p>
        </Reveal>

        <Reveal className="case-block">
          <h2>How it works</h2>
          <ol className="case-steps">
            {pipeline.map((p, i) => (
              <li key={p.title}>
                <span className="case-step-num">{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="case-block">
          <h2>See it in action</h2>
          <p>
            These screens are from a real run: 42 fake IS442 submissions, each with a
            deliberate fault such as a wrong folder name, a duplicate upload or a missing
            file, graded together in one batch.
          </p>
          <Carousel
            className="case-carousel"
            interval={null}
            variant="dark"
            indicators={false}
            prevLabel="Previous screenshot"
            nextLabel="Next screenshot"
            activeIndex={shotIndex}
            onSelect={setShotIndex}
          >
            {shots.map((s) => (
              <Carousel.Item key={s.title}>
                <img src={s.src} alt={s.alt} />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="case-carousel-caption" aria-live="polite">
            <strong>{shots[shotIndex].title}</strong>
            <span>{shots[shotIndex].caption}</span>
          </div>
          <div className="case-carousel-dots" role="tablist" aria-label="Screenshots">
            {shots.map((s, i) => (
              <button
                key={s.title}
                type="button"
                role="tab"
                aria-selected={i === shotIndex}
                aria-label={s.title}
                className={i === shotIndex ? "active" : ""}
                onClick={() => setShotIndex(i)}
              />
            ))}
          </div>
        </Reveal>

        <Reveal className="case-block">
          <h2>What we built</h2>
          <div className="case-challenges">
            {features.map((f) => (
              <div key={f.title} className="case-challenge">
                <strong>{f.title}</strong>
                <span>{f.body}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="case-block">
          <h2>Design and testing</h2>
          <p>
            One Java package per responsibility, with each stage of the pipeline as its own
            class and every assessment described by a config file instead of code, so adding
            a new exam needs no changes to the engine. Each rule and repair has its own
            test, and the grader reproduces the official sample marks exactly.
          </p>
          <p className="case-note">
            Tools: Java 17+, SQLite (JDBC), HTML, CSS and JavaScript. The dashboard’s starting
            layout was AI-generated; the features on top of it were built by the team.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
