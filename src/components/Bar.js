import React from "react";

const Bar = ({ rotate, index }) => {
  console.log(rotate);

  let barStyles = {
    width: "600px",
    height: "100px",
    border: "8px solid white",
    rotate: rotate,
    position: "absolute",
  };

  return <div className="bar" style={barStyles}></div>;
};

export default Bar;
