import React from 'react';

export const IconMouse: React.FC<React.SVGAttributes<SVGElement>> = ({
  ...rest
}) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <g
      fill="var(--coolGray600)"
      stroke="var(--coolGray600)"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth="2"
    >
      <path
        d="M12,23h0a8,8,0,0,1-8-8V9a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8v6A8,8,0,0,1,12,23Z"
        fill="none"
        stroke="var(--coolGray600)"
      />
      <line fill="none" x1="12" x2="12" y1="7" y2="12" />
    </g>
  </svg>
);
