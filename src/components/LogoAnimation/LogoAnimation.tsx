import React from 'react';
import styled from 'styled-components';
import { animateThis, rX28, rX3, rY25, rY22 } from './AnimationParams';

type LogoAnimProps = {
  size: string;
  noMargin?: boolean;
  noScale?: boolean;
  click?: any;
  logoOnly?: boolean;
};

const Logo = styled.button<LogoAnimProps>`
  background: transparent;
  border: none;
  outline: none;
  margin: 0 auto;
  --logo-width: ${(props) =>
    props.noScale ? `${props.size}!important` : props.size};
  --base-unit: calc(var(--logo-width) / 2);
  --logo-phrase: ${(props) => `calc(${props.size} * (3/8))`};

  @media screen and (min-width: 500px) {
    --logo-width: ${(props) => `calc(${props.size} * (9/8))`};
  }

  @media screen and (min-width: 640px) {
    --logo-phrase: ${(props) => `calc(${props.size} * (3.5/8))`};
    --logo-width: ${(props) => `calc(${props.size} * (10/8))`};
  }

  @media screen and (min-width: 1000px) {
    --logo-phrase: ${(props) => `calc(${props.size} / 2)`};
    --logo-width: ${(props) => `calc(${props.size} * 11/8)`};
  }

  @media screen and (min-width: 1200px) {
    --logo-phrase: ${(props) => `calc(${props.size} * .65)`};
    --logo-width: ${(props) => `calc(${props.size} * 13/8)`};
  }
  @media screen and (min-width: 1500px) {
    --logo-width: ${(props) => `calc(${props.size} * 16/8)`};
  }
  @media screen and (min-width: 1700px) {
    --logo-phrase: ${(props) => `calc(${props.size} * .75)`};
    --logo-width: ${(props) => `calc(${props.size} * 19/8)`};
  }
  @media screen and (min-width: 2000px) {
    --logo-phrase: ${(props) => `calc(${props.size} * .75)`};
    --logo-width: ${(props) => `calc(${props.size} * 21/8)`};
  }

  display: flex;
  align-items: center;
  flex-direction: column;

  .logo-container {
    margin-top: ${(props) => (props.noMargin ? '5vh' : '18vh')};
    display: flex;
    width: var(--logo-width);
    height: calc(var(--base-unit) * 3);
    perspective: calc(var(--logo-width) * 1.5);
    &.error404 {
      width: calc(var(--logo-width) * 3);
      margin-top: 10vh;
    }
  }
  .logo-column {
    width: var(--logo-width);
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .logo-row {
    width: var(--logo-width);
    flex-wrap: wrap;
    display: flex;
  }

  .logo-phrase-container {
    color: #999;
    font-size: var(--logo-phrase);
    letter-spacing: -0.02em;
    padding-left: 0.5em;
    transform-origin: left;
    margin-top: calc(var(--logo-phrase) * 0.5);
    span {
      font-weight: 700;
      font-size: calc(var(--logo-phrase) * 0.86);
      color: #202020;
    }
    &.error404 {
      font-size: calc(var(--logo-phrase) * 1.5);
    }
  }
  cursor: pointer;
  transition: transform 0.5s, filter 0.5s;
  &:focus,
  &:hover {
    transform: translateY(-2px);
    filter: drop-shadow(3px 7px 15px rgba(0, 0, 0, 0.15));
  }
  &:focus {
    transform: translateY(-2px) scale(1.05);
    animation: logoShadowPulse 3s infinite linear;
  }
  @keyframes logoShadowPulse {
    0%,
    3% {
      filter: drop-shadow(1px 2px 15px rgba(0, 255, 255, 0.3));
    }
    30%,
    33% {
      filter: drop-shadow(1px 2px 40px rgba(255, 255, 0, 0.7));
    }
    60%,
    63% {
      filter: drop-shadow(1px 2px 15px rgba(0, 0, 0, 0.3));
    }
    90%,
    93% {
      filter: drop-shadow(1px 2px 40px rgba(0, 255, 0, 0.7));
    }
    100% {
      filter: drop-shadow(1px 2px 15px rgba(0, 255, 255, 0.3));
    }
  }
`;
const Piece = styled.div`
  width: var(--base-unit);
  height: var(--base-unit);
  box-sizing: border-box;
  background-color: var(--cyan500);

  @keyframes rX3 {
    ${rX3}
  }
  @keyframes rY25 {
    ${rY25}
  }
  @keyframes rY22 {
    ${rY22}
  }
  @keyframes rX28 {
    ${rX28}
  }
  &[data-type='em'] {
    background-color: transparent;
  }
  &[data-type='tl'] {
    border-top-left-radius: var(--base-unit);
    ${animateThis('rY22', 40, 'normal', 'forwards')};
  }
  &[data-type='sq'] {
    ${animateThis('rX28', 40, 'normal', 'backwards')};
  }
  &[data-type='tr'] {
    border-top-right-radius: var(--base-unit);
    ${animateThis('rY25', 40, 'normal', 'forwards')};
  }
  &[data-type='bl'] {
    border-bottom-left-radius: var(--base-unit);
    ${animateThis('rY25', 40, 'normal', 'backwards')};
  }
  &[data-type='br'] {
    border-bottom-right-radius: var(--base-unit);
    ${animateThis('rX3', 40, 'normal', 'forwards')};
  }
`;

const LogoAnimation: React.FC<LogoAnimProps> = ({
  size,
  noMargin,
  noScale,
  click,
  logoOnly = false,
}) => (
  <Logo
    size={size}
    noMargin={noMargin}
    noScale={noScale}
    onClick={click}
    onKeyPress={click}
  >
    <div className="logo-container">
      <div className="logo-column">
        <div className="logo-row">
          <Piece data-type="tl" />
        </div>
        <div className="logo-row">
          <Piece data-type="sq" />
          <Piece data-type="tr" />
        </div>
        <div className="logo-row">
          <Piece data-type="bl" />
          <Piece data-type="br" />
        </div>
      </div>
    </div>
    {!logoOnly && (
      <div className="logo-phrase-container">
        <div className="logo-phrase">
          <span>B</span> as in <span>BALD</span>
        </div>
      </div>
    )}
  </Logo>
);

const Flip404Animation = ({ size, noMargin, noScale, click }) => (
  <Logo
    size={size}
    noMargin={noMargin}
    noScale={noScale}
    onClick={click}
    onKeyPress={click}
  >
    <div className="logo-container error404">
      <div className="logo-column">
        <div className="logo-row">
          <Piece data-type="tr" />
          <Piece data-type="tr" />
        </div>
        <div className="logo-row">
          <Piece data-type="bl" />
          <Piece data-type="sq" />
        </div>
        <div className="logo-row">
          <Piece data-type="em" />
          <Piece data-type="bl" />
        </div>
      </div>
      <div className="logo-column">
        <div className="logo-row">
          <Piece data-type="tl" />
          <Piece data-type="tr" />
        </div>
        <div className="logo-row">
          <Piece data-type="bl" />
          <Piece data-type="br" />
        </div>
        <div className="logo-row">
          <Piece data-type="em" />
          <Piece data-type="em" />
        </div>
      </div>
      <div className="logo-column">
        <div className="logo-row">
          <Piece data-type="tl" />
          <Piece data-type="tl" />
        </div>
        <div className="logo-row">
          <Piece data-type="bl" />
          <Piece data-type="sq" />
        </div>
        <div className="logo-row">
          <Piece data-type="em" />
          <Piece data-type="br" />
        </div>
      </div>
    </div>
    <div className="logo-phrase-container error404" style={{ paddingLeft: 0 }}>
      <div
        className="logo-phrase"
        style={{ lineHeight: 1, marginBottom: '1rem' }}
      >
        <span style={{ fontSize: '1em' }}>404</span> as in <br />
        <span style={{ fontSize: '.77em' }}>NOT FOUND</span>
      </div>
    </div>
  </Logo>
);
export default LogoAnimation;

export { Flip404Animation };
