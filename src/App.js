import React, { useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import HomeTab from "./components/HomeTab";
import ResumeTab from "./components/ResumeTab";
import Background from "./components/Background";
import ContactTab from "./components/ContactTab";

const Routing = ({ tooSmall }) => (
  <HashRouter basename="/">
    <MenuBar tooSmall={tooSmall} />
    <Route
      exact
      path="/"
      render={props => <HomeTab tooSmall={tooSmall} {...props} />}
    />
    <Route
      path="/home"
      render={props => <HomeTab tooSmall={tooSmall} {...props} />}
    />
    <Route path="/resume" render={props => <ResumeTab {...props} />} />
    <Route path="/contact" render={props => <ContactTab {...props} />} />
  </HashRouter>
);

function App() {
  const [tooSmall, setTooSmall] = useState(window.innerWidth < 1430);
  useEffect(() => {
    window.addEventListener("resize", () =>
      setTooSmall(window.innerWidth < 1430)
    );
    if (window.innerWidth < 1430) {
      alert(
        "Please consider maximizing this window for a neater experience :)"
      );
    }
  }, []);
  useEffect(() => {
    if (navigator.userAgent.toLowerCase().indexOf("chrome") < 0) {
      alert("Warning: This site is best viewed in chrome.");
    }
  }, []);
  return (
    <React.Fragment>
      <Background tooSmall={tooSmall}>
        <Routing tooSmall={tooSmall} />
      </Background>
    </React.Fragment>
  );
}

export default App;
