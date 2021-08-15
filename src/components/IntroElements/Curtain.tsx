import React from 'react';
import styled from 'styled-components';

const CurtainStyles = styled.div`
  position: fixed;
  top: var(--nav-height);
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
  animation: pulsing 20s linear infinite;
  transform: translateY(-105vh);
  transition: transform 0.5s, opacity 0.5s;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &.isDown {
    transform: translateY(0);
    opacity: 1;
  }
  .curtain-container {
    color: #fff;
    font-size: 2.5rem;
    max-width: 55rem;
    line-height: 1.4;
  }
  .closeCurtain {
    cursor: pointer;
    position: absolute;
    z-index: 99;
    top: 3rem;
    right: 3rem;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 3rem;
    background: transparent;
    width: 4rem;
    height: 4rem;
    font-size: 3rem;
    display: flex;
    line-height: 1;
    padding: 0;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
  @keyframes pulsing {
    0% {
      background: var(--cyan500);
    }
    33% {
      background: var(--green500);
    }
    66% {
      background: var(--yellow500);
    }
    100% {
      background: var(--cyan500);
    }
  }
`;

const Curtain = ({ isDown = false, toggle = () => {} }) => (
  <CurtainStyles className={isDown ? 'isDown' : ''}>
    <div className="curtain-container">
      <button type="button" className="closeCurtain" onClick={toggle}>
        &times;
      </button>
      <span
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: '1em',
        }}
      >
        <img
          src="data:image/jpeg;base64,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"
          alt="Bumhan Yu"
          style={{ marginRight: '.5em', borderRadius: '50px' }}
        />
        <span>BUMHAN YU</span>
      </span>
      I am a designer who writes code at work, and a husband and dad who tells
      silly jokes at home &mdash; known as <strong>B</strong> (as in{' '}
      <span
        style={{
          textTransform: 'uppercase',
          fontSize: '.8em',
          fontWeight: 700,
        }}
      >
        bald
      </span>
      ) as I don't have much hair on top.
    </div>
  </CurtainStyles>
);

export default Curtain;
