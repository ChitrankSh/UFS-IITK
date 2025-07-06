import React, { useEffect, useState } from "react";
import "./FrisbeeAnimation.css";

const FrisbeeAnimation = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`frisbee-container ${hide ? "hide" : ""}`}>
      <img src="https://tse1.mm.bing.net/th/id/OIP.vHnVm2zthwxDhVpz0VekAgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Frisbee" className="frisbee" />
    </div>
  );
};

export default FrisbeeAnimation;
