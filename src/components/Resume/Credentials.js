import React, { useLayoutEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { FiFileText, FiMessageSquare } from "react-icons/fi";
import Particle from "../Particle";
import ResumePanel from "./ResumeNew";
import TestimonialsPanel from "./Testimonals";

const tabs = [
  { id: "resume", label: "Résumé", icon: <FiFileText /> },
  { id: "testimonials", label: "Testimonials", icon: <FiMessageSquare /> },
];

export default function Credentials() {
  const [params, setParams] = useSearchParams();
  const active = tabs.some((t) => t.id === params.get("tab")) ? params.get("tab") : "resume";

  // Sliding indicator under the active tab.
  const listRef = useRef(null);
  const [indicator, setIndicator] = useState({ x: 0, w: 0, ready: false });
  useLayoutEffect(() => {
    const measure = () => {
      const el = listRef.current?.querySelector(`[data-tab="${active}"]`);
      if (el) setIndicator((prev) => ({ x: el.offsetLeft, w: el.offsetWidth, ready: prev.ready || prev.w > 0 }));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const select = (id) => setParams(id === "resume" ? {} : { tab: id }, { replace: true });

  const onKeyDown = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const i = tabs.findIndex((t) => t.id === active);
    const next = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
    select(next.id);
    listRef.current?.querySelector(`[data-tab="${next.id}"]`)?.focus();
  };

  return (
    <section className="credentials">
      <Particle />
      <Container className="credentials-inner">
        <div className="section-head enter" style={{ "--i": 0 }}>
          <p className="section-kicker">Credentials</p>
          <h1 className="section-title">
            My résumé and what <span className="accent">others say</span>
          </h1>
        </div>

        <div className="tabs enter" style={{ "--i": 1 }} role="tablist" aria-label="Credentials" ref={listRef} onKeyDown={onKeyDown}>
          <span
            className={`tabs-indicator ${indicator.ready ? "is-ready" : ""}`}
            style={{ transform: `translateX(${indicator.x}px)`, width: indicator.w }}
            aria-hidden="true"
          />
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              data-tab={t.id}
              aria-selected={active === t.id}
              aria-controls={`panel-${t.id}`}
              tabIndex={active === t.id ? 0 : -1}
              className={`tab ${active === t.id ? "is-active" : ""}`}
              onClick={() => select(t.id)}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <div
          key={active}
          className="tab-panel"
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
        >
          {active === "resume" ? <ResumePanel /> : <TestimonialsPanel />}
        </div>
      </Container>
    </section>
  );
}
