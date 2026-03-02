import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

function Particle() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute("data-bs-theme") !== "light"
  );

  useEffect(() => {
    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-bs-theme") !== "light");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-bs-theme"] });
    return () => observer.disconnect();
  }, []);

  const particleColor = isDark ? "#b0aad4" : "#8a7fc0";

  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 130,
            density: { enable: true, value_area: 1500 },
          },
          color: { value: particleColor },
          line_linked: { enable: false, opacity: 0.03 },
          move: { direction: "right", speed: 0.06 },
          size: { value: 1.2 },
          opacity: {
            anim: { enable: true, speed: 1, opacity_min: 0.05 },
          },
        },
        interactivity: {
          events: { onclick: { enable: true, mode: "push" } },
          modes: { push: { particles_nb: 1 } },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
