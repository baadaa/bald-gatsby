import React from 'react';

export const IconScrollDown: React.FC<React.SVGAttributes<SVGElement>> = ({
  ...rest
}) => (
  <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      d="M21.4 10.8l1.3 1.3-7.7 7.7L7.3 12l1.3-1.3 6.4 6.5 6.4-6.5zM30 15a15 15 0 11-30 0 15 15 0 0130 0zm-1.8 0a13.2 13.2 0 10-26.5 0 13.2 13.2 0 0026.5 0z"
      fillRule="nonzero"
      fill="#404040"
    />
  </svg>
);
