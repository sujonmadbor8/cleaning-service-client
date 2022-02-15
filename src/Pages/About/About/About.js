import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./About.css";

const About = () => {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  });
  return (
    <div>
      <animated.h1
        style={{
          width: 80,
          height: 80,
          backgroundColor: "#46e891",
          borderRadius: 16,
          ...styles,
        }}
      ></animated.h1>
      <button>Toggle</button>
    </div>
  );
};
export default About;
