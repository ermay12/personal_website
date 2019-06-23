import React from "react";
import { Button } from "react-bootstrap";
import "./styling/ResumeTab.css";

class ResumeTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonOffset: 0, iframeHeight: 1000, iframeWidth: 778 };
  }
  handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 50) {
      return;
    }
    this.setState({ buttonOffset: scrollTop });
  };
  updateIFrameDimensions = () => {
    let iframeWidth = window.innerWidth;
    if (iframeWidth > 778) {
      iframeWidth = 778;
    }
    this.setState({ iframeHeight: 918040 / iframeWidth, iframeWidth });
  };

  componentDidMount() {
    //window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.updateIFrameDimensions);
    this.updateIFrameDimensions();
  }
  render() {
    let { buttonOffset, iframeHeight, iframeWidth } = this.state;

    return (
      <React.Fragment>
        <div style={{ textAlign: "center" }}>
          <iframe
            style={{
              width: iframeWidth + "px",
              height: iframeHeight + "px"
            }}
            src="https://docs.google.com/document/d/e/2PACX-1vRjiPSClAxZcjUJy-wUBjR1n1olILrNkmESOkdQSWwDi8Itz6m3RYYuTiSgM1SmEBkB0fW4VvU_sN1p/pub?embedded=true"
          />
          <div className="Download-button">
            <a href="https://docs.google.com/document/d/1Ndzee25jkDQmssHasdZ5CadXU6J46K-CdLx9ixHVZts/export?format=pdf">
              <Button size="lg">Download PDF</Button>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ResumeTab;
