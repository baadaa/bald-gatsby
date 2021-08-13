import React from 'react';

const SimpleButton = ({ cta, link, color }) => (
  <a
    href={link}
    style={{ flex: '1', marginRight: '1rem' }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      type="button"
      className="simple-button"
      style={{ backgroundColor: color, cursor: 'pointer' }}
    >
      {cta}
    </button>
  </a>
);

const ButtonContainer = ({ children }) => (
  <div style={{ display: 'flex', maxWidth: '600px', margin: '3rem auto 0' }}>
    {children}
  </div>
);

export { SimpleButton, ButtonContainer };
