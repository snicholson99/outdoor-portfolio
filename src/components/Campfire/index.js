import { useState } from "react";
import "./style.css";

const Campfire = () => {
  const [isHovered, updateIsHovered] = useState(false);

  return (
    <div
      className={`fire ${isHovered && "log-fall"}`}
      onMouseEnter={() => updateIsHovered(true)}
      onMouseLeave={() => updateIsHovered(false)}
    >
      <div className="log log-front" />
      <div className="log log-rear" />
      {/* <div className="log log-bottom" /> */}
      <div className="flame flame-outer" />
      <span className="smoke"></span>
      <span className="smoke smoke-2"></span>
      <span className="smoke smoke-3"></span>
    </div>
  );
};

export default Campfire;
