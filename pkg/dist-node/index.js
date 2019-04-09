'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(require('react-dom'));

const Button = ({
  modifier,
  onClick,
  children
}) => {
  return React__default.createElement("button", {
    className: `btn btn--${modifier}`,
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
  return React__default.createElement("div", {
    className: "btn-group",
    style: {
      margin: 20,
      padding: 20,
      backgroundColor: "#f0f0f0"
    }
  }, props.children);
};

class App extends React.Component {
  render() {
    return React__default.createElement("div", {
      className: "App"
    }, React__default.createElement("header", {
      className: "App-header"
    }, React__default.createElement("h1", null, "UI Library")), React__default.createElement("main", null, React__default.createElement(ButtonGroup, null, React__default.createElement(Button, null, "Reset"), React__default.createElement(Button, {
      modifier: "primary"
    }, "Primary"))));
  }

}

ReactDOM.render(React__default.createElement(App, null), document.getElementById('root'));
