import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Reveal from "../Reveal";
import cover from "../../Assets/Projects/BDMP.png";
import topics from "../../Assets/Projects/BDMP_topics.png";
import champions from "../../Assets/Projects/BDMP_champions.png";
import scenario from "../../Assets/Projects/BDMP_scenario.png";
import stats from "../../Assets/Projects/BDMP_stats.png";

const numbers = [
  { value: "3", label: "games analysed", note: "League of Legends, Valorant, Dota 2" },
  { value: "6", label: "subreddits scraped", note: "Twice a day, automatically" },
  { value: "10", label: "topics discovered", note: "With LDA topic modelling" },
  { value: "85.7%", label: "topic accuracy", note: "Tuned logistic regression" },
];

const pipeline = [
  {
    title: "Collect",
    body: "Registered a custom Reddit application and wrote a scraper that loops through six game communities (New and Hot posts), pausing between communities to stay within rate limits. Scheduled to run at 1am and 1pm with Windows Task Scheduler, with raw data landing in Google Cloud Storage.",
  },
  {
    title: "Clean",
    body: "Removed duplicates, handled missing text and comment counts, fixed data types and timestamps, then prepared the text: stripped links and special characters, expanded contractions, filtered non-English posts, tokenised, POS-tagged and lemmatised while keeping negations like “not”.",
  },
  {
    title: "Model",
    body: "Used LDA to uncover 10 discussion topics, then trained and compared eight classifiers (logistic regression, random forest, gradient boosting, SVM, neural network and more), balancing classes with over- and under-sampling. Scored every post with TextBlob and VADER for polarity and subjectivity.",
  },
  {
    title: "Stream & show",
    body: "Automated notebook jobs merge each new scrape, predict topics with the best model and refresh a Databricks dashboard, so charts update on their own as the data grows.",
  },
];

const findings = [
  "Account and server issues drew the strongest negative sentiment, especially at peak hours in the afternoon and evening.",
  "Gameplay roles and strategies dominated discussion across all three games and carried the most positive sentiment.",
  "Players hold strong, subjective opinions on game balance, which makes patch communication a high-leverage lever for developers.",
];

const challenges = [
  { problem: "Reddit blocked heavy scraping", fix: "Scraped community by community with pauses, using each subreddit’s JSON feed." },
  { problem: "Little prior work on Reddit data", fix: "Collected and cleaned my own dataset instead of relying on a public one." },
  { problem: "Sentiment and topic modelling were new to me", fix: "Learned them while building, and iterated on the model until the results held up." },
  { problem: "Databricks updates kept signing out the dashboard", fix: "Recorded a walkthrough of the dashboard and its live updates." },
];

export default function GameAnalytics() {
  return (
    <section className="case-study">
      <Container>
        <Link to="/project" className="case-back">
          <FiArrowLeft aria-hidden="true" /> All projects
        </Link>

        <Reveal className="section-head">
          <p className="section-kicker">Final-year project · NYP</p>
          <h1 className="section-title">
            What do gamers <span className="accent">really think?</span>
          </h1>
          <p className="case-lede">
            A big-data project on League of Legends, Valorant and Dota 2, done in a team of
            three. I led the community sentiment work, building the pipeline that collects
            Reddit discussions, cleans them, finds what players talk about and how they feel,
            and keeps a live dashboard up to date. I also worked on the match analytics
            dashboard with a teammate.
          </p>
        </Reveal>

        <Reveal className="case-cover" delay={60}>
          <img src={cover} alt="Big Data Management Project title slide" />
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
          <h2>The question</h2>
          <p>
            Does public opinion affect how popular a multiplayer game becomes? Developers see
            win rates and viewership, but rarely what the community is actually saying. I
            looked at six subreddits to find the topics players care about and the sentiment
            attached to each one.
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
          <h2>Topics the model found</h2>
          <p>
            LDA grouped thousands of posts into ten themes, from hero mechanics to technical
            bugs. Each post is then classified into a theme as new data arrives.
          </p>
          <figure className="case-figure">
            <img src={topics} alt="Table of the ten discovered topics and their top words" />
          </figure>
        </Reveal>

        <Reveal className="case-block">
          <h2>What it showed</h2>
          <ul className="case-list">
            {findings.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p>
            From this I recommended investing in server stability, running in-game events that
            reward strategic play, and responding quickly to balance concerns.
          </p>
        </Reveal>

        <Reveal className="case-block">
          <h2>Challenges and fixes</h2>
          <div className="case-challenges">
            {challenges.map((c) => (
              <div key={c.problem} className="case-challenge">
                <strong>{c.problem}</strong>
                <span>{c.fix}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="case-block">
          <h2>Second part: match analytics</h2>
          <p>
            I also worked with my teammate Amber on the League of Legends match analysis,
            which asks how match statistics affect winning. Using data on top-tier players
            and their matches, we built:
          </p>
          <ul className="case-list">
            <li>
              A win-outcome model on 54 match features. We compared models with PyCaret and
              tuned LightGBM to about 97% mean accuracy.
            </li>
            <li>
              Champion synergy and counter-pick rules found with FP-growth association
              mining, keeping only combinations with a win rate above 55%.
            </li>
            <li>
              A dashboard where you pick a champion and see the best ally pairings, the
              strongest counters, and the match factors that matter most.
            </li>
          </ul>
          <figure className="case-figure">
            <img src={champions} alt="Dashboard showing best team compositions, top champions by role, counters and bans" />
          </figure>
          <figure className="case-figure">
            <img src={scenario} alt="Dashboard scenario for Kaisa showing team composition, win prediction and counters" />
          </figure>
          <figure className="case-figure">
            <img src={stats} alt="Dashboard of player regions, win rates, game duration, perks, items and champion roles" />
          </figure>
        </Reveal>

        <Reveal className="case-block">
          <p className="case-note">
            The team’s third part, by Jess, compared tournament viewership with prize money.
          </p>
          <p className="case-note">
            Tools: Python, Pandas, NLTK, Gensim, scikit-learn, PyCaret, LightGBM, TextBlob,
            VADER, Google Cloud Storage, Databricks.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
