"use client";

import Tilt from "react-parallax-tilt";

export function GlowEffect({ children, className }) {
 return (
  <Tilt glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all" glareBorderRadius="8px" tiltMaxAngleX={5} tiltMaxAngleY={5} className={className}>
   {children}
  </Tilt>
 );
}
