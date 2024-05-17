import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../App.css";

class Header extends Component {
  constructor() {
    super();
    // membuat objek state
    this.state = {
      title: "Belajar Reactjs",
      subTitle: "Panduan step-by-step Reactjs untuk pemula",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.subTitle}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));

export default Header;
