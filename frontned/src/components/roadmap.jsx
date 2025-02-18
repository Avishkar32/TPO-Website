import React from "react";
import "./roadmap.css";

const Roadmap = () => {
  const steps = [
    { label: "Triangles", color: "orange" },
    { label: "Sides and Angles", color: "red" },
    { label: "Pythagoras Theorem", color: "blue" },
    { label: "Summary", color: "green" },
  ];

  return (
    <div className="roadmap-container">
      <div className="road">
        {steps.map((step, index) => (
          <div
            key={index}
            className="roadmap-step"
            style={{ backgroundColor: step.color }}
          >
            {step.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
