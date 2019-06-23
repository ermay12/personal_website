import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styling/SmallMenuBar.css";

class SmallMenuBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <a href="#/home">Home</a>
          </li>
          <li>
            <a href="#/resume">Resume</a>
          </li>
          <li>
            <a href="#/contact">Contact</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default SmallMenuBar;
