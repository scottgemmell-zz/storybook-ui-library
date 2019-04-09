import React from 'react';

const Panel = ({
  children
}) => {
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

export default Panel;