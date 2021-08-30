const animateThis = (
  name: string,
  duration: number = 40,
  direction: string = 'normal',
  fillMode: string = 'forwards'
) => `
    animation-name: ${name};
    animation-duration: ${duration}s;
    animation-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.53);
    animation-iteration-count: infinite;
    animation-direction: ${direction};
    animation-fill-mode: ${fillMode};
    animation-delay: 0;
`;

const transformBits = (direction: string, deg: number, color: string) => `
  transform: rotate${direction}(${deg}deg);
  background: ${color};
`;

const getVariants = (axis: 'X' | 'Y', factor: number) => `
  0% {
    ${transformBits(axis, 0, 'var(--yellow500)')}
  }  
  ${factor}% {
    ${transformBits(axis, 360, 'var(--cyan500)')}
  }
  30% {
    ${transformBits(axis, 360, 'var(--cyan500)')}
  }
  ${30 + factor}% {
    ${transformBits(axis, 0, 'var(--red500)')}
  }
  60% {
    ${transformBits(axis, 0, 'var(--red500)')}
  }
  ${60 + factor}% {
    ${transformBits(axis, 360, 'var(--green500)')}
  }
  90% {
    ${transformBits(axis, 360, 'var(--green500)')}
  }
  ${90 + factor}% {
    ${transformBits(axis, 0, 'var(--yellow500)')}
  }
  100% {
    ${transformBits(axis, 0, 'var(--yellow500)')}
  }
`;

const rX3 = getVariants('X', 3);
const rY25 = getVariants('Y', 2.5);
const rY22 = getVariants('Y', 2.2);
const rX28 = getVariants('X', 2.8);
export { animateThis, rX3, rY25, rY22, rX28 };
