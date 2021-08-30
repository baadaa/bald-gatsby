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

const getVariants = (axis, factor) => `
  0% {
    ${transformBits(axis, '0deg', 'var(--yellow500)')}
  }  
  ${factor}% {
    ${transformBits(axis, '360deg', 'var(--cyan500)')}
  }
  30% {
    ${transformBits(axis, '360deg', 'var(--cyan500)')}
  }
  ${30 + factor}% {
    ${transformBits(axis, '0deg', 'var(--red500)')}
  }
  60% {
    ${transformBits(axis, '0deg', 'var(--red500)')}
  }
  ${60 + factor}% {
    ${transformBits(axis, '360deg', 'var(--green500)')}
  }
  90% {
    ${transformBits(axis, '360deg', 'var(--green500)')}
  }
  ${90 + factor}% {
    ${transformBits(axis, '0deg', 'var(--yellow500)')}
  }
  100% {
    ${transformBits(axis, '0deg', 'var(--yellow500)')}
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

const rX3 = getVariants('X', 3);
const rY25 = getVariants('Y', 2.5);
const rY22 = getVariants('Y', 2.2);
const rX28 = getVariants('X', 2.8);
export { animateThis, keyframesRX28, rX3, rY25, rY22, rX28 };
