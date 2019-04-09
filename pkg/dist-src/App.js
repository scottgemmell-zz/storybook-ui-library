import React, { Component } from 'react';
import Button from "./library/atoms/Button.js";
import ButtonGroup from "./library/atoms/ButtonGroup.js";

class App extends Component {
  render() {
    return React.createElement("div", {
      className: "App"
    }, React.createElement("header", {
      className: "App-header"
    }, React.createElement("h1", null, "UI Library")), React.createElement("main", null, React.createElement(ButtonGroup, null, React.createElement(Button, null, "Reset"), React.createElement(Button, {
      modifier: "primary"
    }, "Primary"))));
  }

}

export default App;