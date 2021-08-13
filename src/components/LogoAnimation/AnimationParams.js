const animateThis = (
  name,
  duration = '40s',
  direction = 'normal',
  fillMode = 'forwards'
) => `
    animation-name: ${name};
    animation-duration: ${duration};
    animation-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.53);
    animation-iteration-count: infinite;
    animation-direction: ${direction};
    animation-fill-mode: ${fillMode};
    animation-delay: 0;
`;

const transformBits = (direction, deg, color) => `
  transform: rotate${direction}(${deg});
  background: ${color};
`;

const keyframesRX3 = () => `
  0% {
    ${transformBits('X', '0deg', 'var(--yellow500)')};
  }  
  3% {
    ${transformBits('X', '360deg', 'var(--cyan500)')};
  }
  30% {
    ${transformBits('X', '360deg', 'var(--cyan500)')};
  }
  33% {
    ${transformBits('X', '0deg', 'var(--red500)')};
  }
  60% {
    ${transformBits('X', '0deg', 'var(--red500)')};
  }
  63% {
    ${transformBits('X', '360deg', 'var(--green500)')};
  }
  90% {
    ${transformBits('X', '360deg', 'var(--green500)')};
  }
  93% {
    ${transformBits('X', '0deg', 'var(--yellow500)')};
  }
  100% {
    ${transformBits('X', '0deg', 'var(--yellow500)')};
  }
`;

const keyframesRX28 = () => `
  0% {
    ${transformBits('X', '0deg', 'var(--yellow500)')};
  }  
  2.8% {
    ${transformBits('X', '360deg', 'var(--cyan500)')};
  }
  30% {
    ${transformBits('X', '360deg', 'var(--cyan500)')};
  }
  32.8% {
    ${transformBits('X', '0deg', 'var(--red500)')};
  }
  60% {
    ${transformBits('X', '0deg', 'var(--red500)')};
  }
  62.8% {
    ${transformBits('X', '360deg', 'var(--green500)')};
  }
  90% {
    ${transformBits('X', '360deg', 'var(--green500)')};
  }
  92.8% {
    ${transformBits('X', '0deg', 'var(--yellow500)')};
  }
  100% {
    ${transformBits('X', '0deg', 'var(--yellow500)')};
  }
`;

const keyframesRY22 = () => `
  0% {
    ${transformBits('Y', '0deg', 'var(--yellow500)')};
  }
  2.2% {
    ${transformBits('Y', '360deg', 'var(--cyan500)')};
  }
  30% {
    ${transformBits('Y', '360deg', 'var(--cyan500)')};
  }
  32.2% {
    ${transformBits('Y', '0deg', 'var(--red500)')};
  }
  60% {
    ${transformBits('Y', '0deg', 'var(--red500)')};
  }
  62.2% {
    ${transformBits('Y', '360deg', 'var(--green500)')};
  }
  90% {
    ${transformBits('Y', '360deg', 'var(--green500)')};
  }
  92.2% {
    ${transformBits('Y', '0deg', 'var(--yellow500)')};
  }
  100% {
    ${transformBits('Y', '0deg', 'var(--yellow500)')};
  }
`;

const keyframesRY25 = () => `
  0% {
    ${transformBits('Y', '0deg', 'var(--yellow500)')};
  }
  2.5% {
    ${transformBits('Y', '360deg', 'var(--cyan500)')};
  }
  30% {
    ${transformBits('Y', '360deg', 'var(--cyan500)')};
  }
  32.5% {
    ${transformBits('Y', '0deg', 'var(--red500)')};
  }
  60% {
    ${transformBits('Y', '0deg', 'var(--red500)')};
  }
  62.5% {
    ${transformBits('Y', '360deg', 'var(--green500)')};
  }
  90% {
    ${transformBits('Y', '360deg', 'var(--green500)')};
  }
  92.5% {
    ${transformBits('Y', '0deg', 'var(--yellow500)')};
  }
  100% {
    ${transformBits('Y', '0deg', 'var(--yellow500)')};
  }
`;

export {
  animateThis,
  keyframesRX3,
  keyframesRY22,
  keyframesRY25,
  keyframesRX28,
};
