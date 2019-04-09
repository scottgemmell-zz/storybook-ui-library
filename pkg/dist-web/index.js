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

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
