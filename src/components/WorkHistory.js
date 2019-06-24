import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, useChain } from "react-spring";
import wove from "../wove.png";
import boeing from "../boeing.jpg";
import biorobotics from "../biorobotics.jpg";
import navsea from "../navsea.jpg";
import penncolor from "../penncolor.png";

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

function WorkHistory({ tooSmall }) {
  return (
    <React.Fragment>
      <div
        style={{
          width: "70%",
          height: "150px",
          marginTop: "100px",
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
          Work History
        </h1>
      </div>
      <WorkEntry
        picture={wove}
        company="Wove"
        title="Full Stack Software Developer Intern"
        time="May 2019 - Present"
        location="San Francisco, CA"
        description="I do full stack software development, working with Java, PostgreSQL, Ruby, and React at a venture capital funded startup.  I act in the capacity of a full time engineer, and work on platform essential projects."
      />
      <WorkEntry
        picture={boeing}
        company="Boeing Space and Launch Division"
        title="Systems Engineering Intern"
        time="May 2018 - August 2018"
        location="El Segundo, CA"
        description="Worked with DSP Engineers and Systems Engineers to perform and prepare for final payload tests of an advanced communications satellite"
      />
      <WorkEntry
        picture={biorobotics}
        company="BioRobotics Research Lab"
        title="UnderGrad. Research Assistant"
        time={"Octoper 2016 - March 2017,\nOctober 2018 - December 2018"}
        location="Pittsburgh, PA"
        description="Worked with two other undergraduate researchers to add SLAM to a “snake
        monster” robot. A later project involved computer vision on an embedded system"
      />
      <WorkEntry
        picture={navsea}
        company="Naval Surface Warfare Center"
        title="Electrical Engineering Intern"
        time={"June 2017 - August 2017"}
        location="Philadelphia, PA"
        description="Helped oversee electrical system upgrades on the US Coast Guard’s only Ice Breaker, and mapped out control logic for electrical system protection equipment"
      />
      <WorkEntry
        picture={penncolor}
        company="PennColor Inc."
        title="Industrial Engineering Intern"
        time={"May 2016 - August 2016"}
        location="Hatfield, PA"
        description="Used CAD software to help plan the expansion of the company’s lab and warehouse facilities and helped determine the electrical and utility requirements for these new spaces, and helped meet the daily needs of production and the lab."
      />
    </React.Fragment>
  );
}

export default WorkHistory;
