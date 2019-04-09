import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Button = (_ref) => {
  let modifier = _ref.modifier,
      onClick = _ref.onClick,
      children = _ref.children;
  return React.createElement("button", {
    className: "btn btn--".concat(modifier),
    onClick: onClick,
    style: {
      backgroundColor: "#bada55",
      borderColor: "#bada55",
      color: "#fff",
      marginRight: 10,
      padding: "10px 16px",
      fontSize: 16,
      fontWeight: "bold"
    }
  }, children);
};

const ButtonGroup = props => {
  return React.createElement("div", {
    className: "btn-group",
    style: {
      margin: 20,
      padding: 20,
      backgroundColor: "#f0f0f0"
    }
  }, props.children);
};

const Panel = (_ref) => {
  let children = _ref.children;
  return React.createElement("div", {
    style: {
      backgroundColor: "#bada55",
      borderColor: "#bada55",
      padding: "10px 16px",
      fontSize: 16,
      margin: 20
    }
  }, children);
};

class App extends Component {
  render() {
    return React.createElement("div", {
      className: "App"
    }, React.createElement("header", null, React.createElement("h1", null, "Bada55 UI Library")), React.createElement("main", null, React.createElement(Panel, null, React.createElement("h1", null, "Lorem ipsum"), React.createElement("p", null, "Dolor set elit nullum vitae.")), React.createElement(ButtonGroup, null, React.createElement(Button, null, "Reset"), React.createElement(Button, {
      modifier: "primary"
    }, "Primary"))));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
