import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "./styling/HomeTab.css";
import { Button } from "react-bootstrap";
import cpuHolder from "../cpuHolder.svg";
import cpu from "../cpu.svg";
import { useSpring, animated } from "react-spring";

function getConsoleText(scroll, windowHeight) {
  if (scroll < windowHeight) {
    return ">";
  }
  const string =
    "> ./introduce_eric_maynard.exe#\nHi!\nI am an electrical and computer engineer graduating from Carnegie Mellon University.  This site is currently under construction, but feel free to check out my resume and reach out to me if you're at all interested in hiring me!\n";
  let newString = string.replace(
    "#\n",
    "                                                  \n"
  );
  let i = (scroll - windowHeight) / 4;
  return newString.slice(0, i);
}

function ConsoleAnimation({ windowHeight, windowWidth }) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(
    () => window.addEventListener("scroll", () => setScrollY(window.scrollY)),
    []
  );
  const length = 2500;
  let consoleStart = windowHeight - 50;
  let consoleEnd = consoleStart + length - windowHeight;

  let consoleStyle;
  if (scrollY < consoleStart) {
    consoleStyle = {
      position: "absolute",
      top: windowHeight + 50 + "px"
    };
  } else if (scrollY < consoleEnd) {
    consoleStyle = {
      position: "fixed",
      top: "100px"
    };
  } else {
    consoleStyle = {
      position: "absolute",
      top: 50 + length + "px"
    };
  }

  return (
    <div
      style={{
        width: "80%",
        height: length + "px",
        marginLeft: "10%",
        backgroundColor: "#000000",
        borderRadius: "20px"
      }}
    >
      <p
        style={Object.assign(consoleStyle, {
          textAlign: "left",
          left: "20%",
          width: "60%",
          fontSize: "2rem",
          color: "#00FF00",
          whiteSpace: "pre-wrap"
        })}
      >
        {getConsoleText(scrollY, windowHeight)}
      </p>
    </div>
  );
}

export default ConsoleAnimation;
