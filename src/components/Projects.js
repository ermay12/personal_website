import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, useChain } from "react-spring";

function WorkEntry({ company, title, description, time, location, picture }) {
  return (
    <div
      style={{
        width: "1000px",
        height: "220px",
        backgroundColor: "#888888",
        marginTop: "25px",
        borderRadius: "20px",
        textAlign: "left",
        display: "inline-block"
      }}
    >
      <img
        src={picture}
        style={{
          height: 200,
          width: 200,
          float: "left",
          margin: "10px",
          borderRadius: "20px"
        }}
      />
      <div
        style={{
          float: "right",
          marginTop: "10px",
          marginRight: "10px",
          textAlign: "right"
        }}
      >
        <p
          style={{
            whiteSpace: "pre-line"
          }}
        >
          {time}
        </p>
        <h5>{location}</h5>
      </div>
      <h1>{company}</h1>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Projects({ tooSmall }) {
  return (
    <React.Fragment>
      <div
        style={{
          width: "70%",
          height: "150px",
          marginTop: "100px",
          marginLeft: "30%",
          backgroundColor: "#eeeeee",
          color: "#000000",
          display: "flex"
        }}
      >
        <h1
          style={{
            width: "300px",
            position: "absolute",
            left: "50%",
            marginLeft: "-150px",
            flexDirection: "row",
            alignSelf: "center"
          }}
        >
          Projects
        </h1>
      </div>
      <h4>
        Projects are coming soon!
        <br />
        See my resume for details in the meantime.
      </h4>
    </React.Fragment>
  );
}

export default Projects;
