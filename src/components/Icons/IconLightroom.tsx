import React from 'react';

export const IconLightroom: React.FC<React.SVGAttributes<SVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 234">
    <radialGradient
      id="a"
      cx="97.7"
      cy="160.7"
      r="143.4"
      gradientTransform="matrix(1 0 0 -1 0 242)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#17232b" stopOpacity=".8" />
      <stop offset=".8" stopColor="#17232b" />
    </radialGradient>
    <path d="M10 10h220v214H10V10z" fill="url(#a)" />
    <path
      d="M0 0v234h240V0H0zm10 10h220v214H10V10zm56.5 153.2c-1.2 0-1.5-.5-1.5-1.5V54.3c0-.8.3-1.3 1.2-1.3H82c.8 0 1 .3 1 1.2v92.6h41.2c.8 0 1.1.3.9 1.2l-2.5 14.2c-.2.8-.7 1.2-1.5 1.2H66.5v-.2zm74-64.7c0-1.2 0-4.1-.5-9.7 0-.8.2-1 .8-1.3 6.1-2.5 20.6-6.9 36.8-6.9.8 0 1.2.2 1.2 1V96c0 .8-.3 1-1.2 1-6.3-.3-15.6.5-19.1 2v63.1c0 .8-.3 1.2-1.2 1.2h-15.7c-.8 0-1.2-.3-1.2-1.2V98.5z"
      fill="#aed3e9"
    />
  </svg>
);
