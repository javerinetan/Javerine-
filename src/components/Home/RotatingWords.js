import React, { useEffect, useState } from "react";

/**
 * Swaps through a list of phrases with a short blur + slide transition.
 * The longest phrase reserves the width so surrounding text never jumps.
 */
export default function RotatingWords({ words, interval = 2600 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), reduce ? interval * 1.5 : interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className="rotating-words" aria-live="polite">
      <span className="rotating-words-sizer" aria-hidden="true">{longest}</span>
      <span key={index} className="rotating-word">
        {words[index]}
      </span>
    </span>
  );
}
