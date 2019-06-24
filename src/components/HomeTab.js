import React, { useState, useEffect, useRef } from "react";
import logo from "../logo.svg";
import "./styling/HomeTab.css";
import { Button } from "react-bootstrap";
import cpuHolder from "../cpuHolder.svg";
import cpu from "../cpu.svg";
import { useSpring, animated, useChain } from "react-spring";
import ConsoleAnimation from "./ConsoleAnimation";
import led from "../LED.svg";
import scrollDown from "../scroll_down.svg";
import WorkHistory from "./WorkHistory";
import Projects from "./Projects";

function NameCPU({ y }) {
  return (
    <React.Fragment>
      <img
        src={cpu}
        alt="cpu"
        style={{
          height: "600px",
          width: "600px",
          position: "absolute",
          top: "50%",
          marginTop: -300 + y + "px",
          left: "50%",
          marginLeft: "-300px"
        }}
      />
      <h1
        style={{
          textAlign: "left",
          fontSize: "6rem",
          top: "50%",
          marginTop: y - 90 + "px",
          position: "absolute",
          left: "50%",
          marginLeft: "-145px",
          color: "rgb(167, 145, 81)",
          fontFamily: "monospace"
        }}
      >
        Eric
        <br />
        Maynard
      </h1>
    </React.Fragment>
  );
}

function NameCPUAnimation({ windowHeight, tooSmall }) {
  const AnimatedNameCPU = animated(NameCPU);
  const cpuRef = useRef();
  const cpuAnimation = useSpring({
    to: { y: 0 },
    from: { y: -1000 },
    delay: 1000,
    config: { duration: 500 },
    ref: cpuRef
  });

  const ledRef = useRef();
  const ledAnimation = useSpring({
    to: { ledOpacity: 1 },
    from: { ledOpacity: 0.2 },
    config: { duration: 100 },
    ref: ledRef,
    delay: 1000
  });

  useChain([cpuRef, ledRef]);

  return (
    <div style={{ height: windowHeight - 50 }}>
      <img
        src={cpuHolder}
        alt="cpu holder"
        style={{
          position: "absolute",
          height: 600,
          width: 600,
          right: "50%",
          top: "50%",
          marginTop: "-300px",
          marginRight: "-300px"
        }}
      />
      {!tooSmall && (
        <animated.img
          src={led}
          alt="led"
          style={{
            height: 200,
            width: 200,
            position: "absolute",
            right: "10%",
            bottom: "50px",
            opacity: ledAnimation.ledOpacity
          }}
        />
      )}
      <AnimatedNameCPU y={cpuAnimation.y} />
    </div>
  );
}

function HomeTab({ tooSmall }) {
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  useEffect(
    () =>
      window.addEventListener("resize", () =>
        setWindowDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
      ),
    []
  );
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <img
        src={scrollDown}
        style={{
          right: "50px",
          bottom: "20px",
          position: "fixed",
          width: "50px",
          height: "50px"
        }}
      />
      <NameCPUAnimation
        windowHeight={windowDimensions.height}
        tooSmall={tooSmall}
      />
      <ConsoleAnimation
        windowHeight={windowDimensions.height}
        windowWidth={windowDimensions.width}
        tooSmall={tooSmall}
      />
      <WorkHistory />
      <Projects />
    </div>
  );
}

export default HomeTab;
