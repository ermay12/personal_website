import React, { useState, useEffect, useRef } from "react";
import logo from "../logo.svg";
import { Button } from "react-bootstrap";
import cpuHolder from "../cpuHolder.svg";
import cpu from "../cpu.svg";
import { useSpring, animated, useChain } from "react-spring";
import ConsoleAnimation from "./ConsoleAnimation";
import led from "../LED.svg";

function WorkHistory({ tooSmall }) {
  return <div style={{ textAlign: "center", width: "100%" }} />;
}

export default WorkHistory;
