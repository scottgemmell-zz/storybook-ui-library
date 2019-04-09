import React, { Component } from 'react';
import Button from "./library/Button.js";
import ButtonGroup from "./library/ButtonGroup.js";
import Panel from "./library/Panel.js";

class App extends Component {
  render() {
    return React.createElement("div", {
      className: "App"
    }, React.createElement("header", null, React.createElement("h1", null, "Bada55 UI Library")), React.createElement("main", null, React.createElement(Panel, null, React.createElement("h1", null, "Lorem ipsum"), React.createElement("p", null, "Dolor set elit nullum vitae.")), React.createElement(ButtonGroup, null, React.createElement(Button, null, "Reset"), React.createElement(Button, {
      modifier: "primary"
    }, "Primary"))));
  }

}

export default App;