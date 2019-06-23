import React, { useState, useEffect } from "react";
import resistor from "../resistor.svg";
import tracing from "../tracing.svg";
import SmallMenuBar from "./SmallMenuBar";
import { useSpring, animated } from "react-spring";

function ResistorButton({ text, right, href, y, theta }) {
  const [opacity, setOpacity] = useState(1);
  let svgRight = right + 55;
  let textRight = right - 51;
  let tracingRight = right - 315;
  return (
    <React.Fragment>
      <img
        src={tracing}
        alt="tracing"
        style={{
          height: 600,
          width: 500,
          position: "absolute",
          right: tracingRight + "px",
          top: 144 + "px"
        }}
      />
      <div style={{ opacity }}>
        <img
          src={resistor}
          alt="resistor"
          style={{
            height: "180px",
            width: "180px",
            transform: "rotate(" + (theta + -10) + "deg)",
            position: "absolute",
            right: right + "px",
            top: y + "px"
          }}
        />
        <h2
          style={{
            height: "150px",
            width: "150px",
            transform: "rotate(" + (theta + -55) + "deg)",
            position: "absolute",
            right: textRight + "px",
            top: 20 + y + "px",
            color: "#8B4513",
            fontFamily: "monospace"
          }}
        >
          {text}
        </h2>
      </div>
      <a href={href}>
        <svg
          onMouseOver={() => setOpacity(0.3)}
          onMouseLeave={() => setOpacity(1)}
          width="70"
          height="160"
          style={{
            position: "absolute",
            transform: "rotate(" + (theta + 35) + "deg)",
            right: svgRight + "px",
            top: 12 + y + "px",
            color: "#8B4513",
            zIndex: 1
          }}
        >
          <rect
            x="0"
            y="0"
            width="70"
            height="160"
            style={{ fill: "white", opacity: 0 }}
          />
          Sorry, your browser does not support inline SVG.
        </svg>
      </a>
    </React.Fragment>
  );
}

function MenuBar({ tooSmall }) {
  const AnimatedResistor = animated(ResistorButton);

  const animation1 = useSpring({
    to: { y: tooSmall ? -300 : 0, theta: 0 },
    from: { y: -300, theta: 100 },
    delay: 500,
    config: { duration: 500 },
    reset: !tooSmall
  });
  const animation2 = useSpring({
    to: { y: tooSmall ? -300 : 0, theta: 0 },
    from: { y: -300, theta: -100 },
    delay: 300,
    config: { duration: 500 },
    reset: !tooSmall
  });
  const animation3 = useSpring({
    to: { y: tooSmall ? -300 : 0, theta: 0 },
    from: { y: -300, theta: -100 },
    delay: 0,
    config: { duration: 500 },
    reset: !tooSmall
  });
  if (!tooSmall) {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden"
        }}
      >
        <AnimatedResistor
          text="Home"
          right={180}
          y={animation1.y}
          theta={animation1.theta}
          href="/personal_website/home"
        />
        <AnimatedResistor
          text="Resume"
          right={90}
          y={animation2.y}
          theta={animation2.theta}
          href="/personal_website/resume"
        />
        <AnimatedResistor
          text="Contact"
          right={0}
          y={animation3.y}
          theta={animation3.theta}
          href="/personal_website/contact"
        />
      </div>
    );
  } else {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden"
        }}
      >
        <SmallMenuBar />{" "}
      </div>
    );
  }
}

export default MenuBar;
