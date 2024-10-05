import React from "react";
import { IoTriangle } from "react-icons/io5";

const upArraow = <IoTriangle style={{ color: "#6ccf59", fontSize: "10px" }} />;
const downArrow = (
  <IoTriangle
    style={{
      color: "#ff4d4d",
      fontSize: "10px",
      transform: "rotate(180deg)",
    }}
  />
);
const PricePercentageBadge = ({ currentpercentage }) => {
  const isNegative = currentpercentage < 0;
  return (
    <div
      className="p-1 rounded text-center"
      style={{
        backgroundColor: isNegative
          ? "rgba(240, 41, 52, 0.1)"
          : "rgba(50, 215, 75, 0.1)",
        height: "30px",
        width: "86px",
      }}
    >
      {isNegative ? downArrow : upArraow}
      <span
        style={{
          color: isNegative ? "#ff4d4d" : "#6ccf59",
          marginLeft: "5px",
        }}
      >
        {currentpercentage}%
      </span>
    </div>
  );
};

export default PricePercentageBadge;
