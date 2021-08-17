import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

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
  align-items: center;
  &.isDown {
    transform: translateY(0);
    opacity: 1;
  }
  .curtain-container {
    z-index: 1;
    color: #fff;
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
    line-height: 1.4;
  }
  .goatie {
    animation: rhythm 3s infinite;
    @media screen and (max-width: 640px) {
      display: none;
    }
  }
  img.headshot {
    --headshot-size: 20rem;
    border-radius: var(--headshot-size);
    width: var(--headshot-size);
    height: var(--headshot-size);
    @media screen and (max-width: 1200px) {
      --headshot-size: 15vw;
    }
    @media screen and (max-width: 768px) {
      --headshot-size: 12rem;
    }
    @media screen and (max-width: 640px) {
      --headshot-size: 10rem;
    }
  }
  p {
    padding: 0 1.5rem;
    font-size: 3vw;
    margin: 0;
    max-width: 23ch;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    @media screen and (min-width: 1600px) {
      font-size: 48px;
    }
    @media screen and (max-width: 1200px) {
      font-size: 4vw;
    }
    @media screen and (max-width: 1024px) {
      font-size: 3.5vw;
    }
    @media screen and (max-width: 768px) {
      font-size: 3.2vw;
    }
    @media screen and (max-width: 640px) {
      margin: 0 auto;
      font-size: 3rem;
    }
    @media screen and (max-width: 380px) {
      font-size: 2.5rem;
    }
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
  @keyframes rhythm {
    0% {
      transform: scale(1) rotate(0deg);
    }
    30% {
      transform: scale(1.015) rotate(-0.5deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }
`;

const Curtain = ({ isDown = false, toggle = () => {} }) => (
  <CurtainStyles className={isDown ? 'isDown' : ''}>
    <StaticImage
      src="../../images/goatie.png"
      quality={70}
      alt="Pretend I am a goat"
      objectFit="contain"
      width={614}
      height={1280}
      objectPosition="right"
      className="goatie"
      aspectRatio={0.4796875}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
      }}
    />
    <div className="curtain-container">
      <button type="button" className="closeCurtain" onClick={toggle}>
        &times;
      </button>
      <p>
        <span
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: '1em',
          }}
        >
          <img
            className="headshot"
            src="data:image/jpeg;base64,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"
            alt="Bumhan Yu"
          />
        </span>
        The name is <em>Bumhan</em>, but I go by{' '}
        <strong
          style={{
            fontFamily: 'Work Sans, sans-serif',
          }}
        >
          B
        </strong>{' '}
        (as in{' '}
        <span
          style={{
            fontFamily: 'Work Sans, sans-serif',
            textTransform: 'uppercase',
            fontSize: '.8em',
            fontWeight: 700,
          }}
        >
          bald
        </span>
        )—a design director who writes code at work, and a husband and dad who
        loves making silly jokes and fried rice at home.
      </p>
    </div>
  </CurtainStyles>
);

export default Curtain;
