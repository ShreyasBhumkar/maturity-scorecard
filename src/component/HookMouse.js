import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setXPosition(e.clientX);
    setYPosition(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called!");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("CleanUp Function will called..!");
      window.removeEventListener("mousemove", logMousePosition);
    }
  }, []);
  return (
    <div className="text-center">
      Hooks x - {xPosition} y - {yPosition}
    </div>
  );
};
export default HookMouse;
