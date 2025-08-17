import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Diploma in Applied AI and Analytics (DAAA)",
          "Software Engineering Freshmen at Singapore Management University (SMU)",
          "President of Ladies in Tech (LIT) Club",
          "Robotics and Automation Club",
          "Robotics Enthusiast",
          "AI Enthusiast",
          "Web Developer",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 150,
      }}
    />
  );
}

export default Type;
