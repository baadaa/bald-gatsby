import React from 'react';

export const IntroDesign: React.FC<React.SVGAttributes<SVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <defs>
      <linearGradient
        id="a"
        x1="148.4"
        y1="350.2"
        x2="500"
        y2="350.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#bbb" />
        <stop offset="1" stopColor="#eee" />
      </linearGradient>
    </defs>
    <path fill="#338489" d="M0 0h500v500H0z" />
    <path
      d="M500 341h-14c-103 1-341-4-337 0l-1 20c35-2 235 1 338-1h14v-19z"
      fill="url(#a)"
    />
    <path
      d="M114 301c26 1 57 2 94 15l1-16s6-8-47-16a245 245 0 00-46-2zm-2-40c6 1 98 15 102 17 7 3 8-13 8-13s-1-12-108-17c-2 0-2 13-2 13zm13-37c10 4 60 7 89 17 7 3 10-14 10-14s4-10-89-20l-10 17z"
      fill="#bbb"
    />
    <path d="M154 188l2 19c11-3 27-2 27-2l4-18c1-2-21-3-33 1z" fill="#fff" />
    <path d="M154 188l2 19c11-3 27-2 27-2l4-18c1-2-21-3-33 1z" fill="#bbb" />
    <path d="M197 343c-2-8-52-15-60-16l6-12s55 4 55 12z" fill="#fff" />
    <path d="M197 343c-2-8-52-15-60-16l6-12s56 4 55 13z" fill="#bbb" />
    <path
      d="M148 341c3 4 49-9 50-14l-1 19c0 7-42 19-49 15zm352-98c-35-2-18-3-53-3v24c35 0 18 1 53 3v-24zm0 51c-37 1-75 1-112-3v24c37 2 75 2 112 2v-23zm0 89h-94v23l94 1v-24zm-362-56c6 2 71-4 71-8l1-20s0 5-73 9zm-23-26c4-1 105-8 107-16v-20c0 8-97 14-109 17zm-3-40s103-7 112-15l1-19s4 4-112 14zm14-37c0-1 60-10 63-18l-2-19c-6 6-59 15-61 18v19z"
      fill="#eee"
    />
    <path
      fill="#f1b70e"
      d="M58 234h42v10H58zm6 79l32-28 6 8-32 27zm29-154l29 30-7 7-29-30zm85-27l1 42h-10l-1-42zm79 44l-31 29-6-7 30-29zm22 68l-42 1v-10h42zm-20 78l-29-30 7-7 29 30z"
    />
    <path
      d="M138 376a6933 6933 0 0167-1c3 0 3 8-3 10-9 4 10 5 0 9s10 5 1 8c-11 4 9 5-1 8-8 3 4 3 0 9 0 0-7 5-21 8 0 0-9 10-17 0a42 42 0 01-19-4s-9-5-3-8c9-4-11-5 0-9s-11-5-1-8-9-5 1-8-14-14-4-14z"
      fill="#1C5A5E"
    />
  </svg>
);
