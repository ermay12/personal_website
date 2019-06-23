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
    <Route exact path="/" component={HomeTab} />
    <Route path="/home" component={HomeTab} />
    <Route path="/resume" component={ResumeTab} />
    <Route path="/contact" component={ContactTab} />
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
    if (!window.chrome || (!window.chrome.webstore && !window.chrome.runtime)) {
      alert("Warning: This site is best viewed in chrome.");
    }
  }, []);
  return (
    <React.Fragment>
      <Background tooSmall={tooSmall}>
        <Routing />
      </Background>
    </React.Fragment>
  );
}

export default App;
