import React from 'react';

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

export default ButtonGroup;