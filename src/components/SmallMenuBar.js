import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class MenuBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/personal_website/home">
          <div style={{ color: "rgb(189, 204, 212)" }}>Home</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/personal_website/resume">
              <div style={{ color: "rgb(189, 204, 212)" }}>Resume</div>
            </Nav.Link>
            <Nav.Link href="/personal_website/contact">
              <div style={{ color: "rgb(189, 204, 212)" }}>Contact</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MenuBar;
