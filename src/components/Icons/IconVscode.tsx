import React from 'react';

export const IconVscode: React.FC<React.SVGAttributes<SVGElement>> = () => (
  <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="256"
      height="256"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M181.5 254.3a16 16 0 0012.7-.5l52.7-25.4A16 16 0 00256 214V42a16 16 0 00-9-14.4L194.1 2.2A16 16 0 00176 5.3l-100.9 92L31.2 64c-4-3-9.8-2.8-13.6.6L3.5 77.5a10.7 10.7 0 000 15.7l38 34.8-38 34.8a10.7 10.7 0 000 15.7l14 12.9c3.9 3.4 9.6 3.7 13.7.6l44-33.4 100.8 92a16 16 0 005.5 3.7zM192 69.9L115.5 128l76.5 58.1V70z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        d="M247 27.6L194.1 2.2A16 16 0 00176 5.3L3.3 162.8a10.7 10.7 0 000 15.7l14.1 12.9c3.8 3.4 9.6 3.7 13.7.6L239 34.2c7-5.3 17-.3 17 8.5V42a16 16 0 00-9-14.5z"
        fill="#0065A9"
      />
      <g filter="url(#filter0_d)">
        <path
          d="M247 228.4l-52.8 25.4a16 16 0 01-18.2-3.1L3.3 93.2a10.7 10.7 0 010-15.7l14.1-12.9c3.8-3.4 9.6-3.7 13.7-.6L239 221.8c7 5.3 17 .3 17-8.5v.6a16 16 0 01-9 14.5z"
          fill="#007ACC"
        />
      </g>
      <g filter="url(#filter1_d)">
        <path
          d="M194.2 253.8a16 16 0 01-18.2-3.1 9.4 9.4 0 0016-6.7V12a9.4 9.4 0 00-16-6.7 16 16 0 0118.2-3l52.7 25.3A16 16 0 01256 42v172a16 16 0 01-9 14.4l-52.8 25.4z"
          fill="#1F9CF0"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M181.4 254.3a16 16 0 0012.7-.5l52.7-25.4a16 16 0 009-14.4V42a16 16 0 00-9-14.4L194 2.2a16 16 0 00-18.2 3.1l-101 92L31 64c-4-3-9.8-2.8-13.6.6l-14 12.9a10.7 10.7 0 000 15.7l38 34.8-38 34.8a10.7 10.7 0 000 15.7l14 12.9c3.8 3.4 9.6 3.7 13.6.6l44-33.4 100.9 92a16 16 0 005.5 3.7zm10.5-184.4L115.3 128l76.6 58.1V70z"
        fill="url(#paint0_linear)"
        opacity=".3"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="-21.5"
        y="40.5"
        width="298.8"
        height="236.1"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="10.7" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          mode="overlay"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <filter
        id="filter1_d"
        x="154.7"
        y="-20.7"
        width="122.7"
        height="297.3"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="10.7" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          mode="overlay"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="127.8"
        y1=".7"
        x2="127.8"
        y2="255.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
