import React from 'react';

export const IconIterm: React.FC<React.SVGAttributes<SVGElement>> = () => (
  <svg viewBox="0 0 444 444" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="0%" y1="0%" x2="0%" y2="100%" id="a">
        <stop stopColor="#EDEBED" offset="0%" />
        <stop stopColor="#F4F3F4" offset="4.2%" />
        <stop stopColor="#DFDDDF" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M20 0C9 0 0 9 0 20v353c0 11 9 20 20 20h404c11 0 20-9 20-20V20c0-11-9-20-20-20H20z"
        fill="none"
      />
      <path
        d="M0 45v379c0 11 9 20 20 20h404c11 0 20-9 20-20V45H0z"
        fill="#202A2F"
      />
      <path
        d="M1 423V44h443v379c0 11-9 20-19 20H21c-11 0-20-9-20-20z"
        stroke="#000"
      />
      <path
        d="M20 0C9 0 0 9 0 20v25h444V20c0-11-9-20-20-20H20z"
        fill="url(#a)"
      />
      <path
        d="M95 111l-9 10c-7-5-13-8-22-8s-14 3-14 9c0 14 47 12 47 40 0 13-9 22-26 25v22H58v-22c-11-1-21-6-29-12l8-12c9 6 17 10 28 10 10 0 15-4 15-10 0-16-47-13-47-40 0-13 10-22 25-24V79h13v20c11 1 18 6 24 12z"
        fill="#0EE827"
      />
      <path fill="#0F741E" d="M131 80v130h66V80z" />
    </g>
  </svg>
);
