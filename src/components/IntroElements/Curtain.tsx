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
  transition: transform 0.75s ease-in-out, opacity 0.5s ease-in-out;
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
  .headshot {
    --headshot-size: 20rem;
    border-radius: var(--headshot-size);
    width: var(--headshot-size);
    height: var(--headshot-size);
    display: block;
    margin-left: 1.5rem;
    margin-bottom: calc(var(--headshot-size) / 7);
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
      <StaticImage
        src="../../images/bumhan_yu.jpg"
        quality={70}
        alt="Bumhan Yu"
        objectFit="cover"
        width={200}
        height={200}
        className="headshot"
      />
      <p>
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
