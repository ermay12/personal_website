import React, { useState, useEffect } from "react";
import tracing from "../tracing.svg";
import capacitor from "../capacitor.svg";

function Background({ tooSmall, children }) {
  return (
    <div
      style={{
        color: "#FFFFFF"
      }}
    >
      {!tooSmall && (
        <div
          style={{
            position: "absolute",
            overflow: "hidden",
            width: "100%",
            height: "100%"
          }}
        >
          <img
            src={tracing}
            alt="tracing"
            style={{
              height: 600,
              width: 500,
              position: "absolute",
              left: "-350px",
              top: "400px",
              transform: "rotate(90deg)"
            }}
          />
          <img
            src={tracing}
            alt="tracing"
            style={{
              height: 600,
              width: 500,
              position: "absolute",
              left: "-207px",
              top: "-83px",
              transform: "rotate(180deg)"
            }}
          />
          <img
            src={capacitor}
            alt="capacitor"
            style={{
              height: 300,
              width: 400,
              position: "absolute",
              left: "13px",
              top: "190px"
            }}
          />
        </div>
      )}
      <div style={{ minHeight: "300px" }}>{children}</div>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          marginTop: "50px"
        }}
      >
        <p
          style={{
            fontSize: "large"
          }}
        >
          An Eric Maynard Production.
          <br />
          See the source{" "}
          <a href="https://github.com/ermay12/personal_website">here</a>.
          <br />
          Icons sourced from{" "}
          <a href="https://icons8.com/icon/pack/industry/office">here</a>.
        </p>
      </div>
    </div>
  );
}
export default Background;
