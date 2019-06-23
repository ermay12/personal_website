import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Test from "./components/Test";
import HomeTab from "./components/HomeTab";
import ResumeTab from "./components/ResumeTab";
import Background from "./components/Background";
import ContactTab from "./components/ContactTab";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/personal_website" component={HomeTab} />
      <Route path="/personal_website/home" component={HomeTab} />
      <Route path="/personal_website/resume" component={ResumeTab} />
      <Route path="/personal_website/contact" component={ContactTab} />
      <Route component={HomeTab} />
    </Switch>
  </Router>
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
      <MenuBar tooSmall={tooSmall} />
      <Background tooSmall={tooSmall}>{routing}</Background>
    </React.Fragment>
  );
}

export default App;
