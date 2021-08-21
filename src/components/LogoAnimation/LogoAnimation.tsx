import React from 'react';
import styled from 'styled-components';
import {
  animateThis,
  keyframesRX3,
  keyframesRY25,
  keyframesRY22,
  keyframesRX28,
} from './AnimationParams';

type LogoAnimProps = {
  size: string;
  noMargin?: boolean;
  horizontal?: boolean;
  noScale?: boolean;
  click?: any;
  logoOnly?: boolean;
};

const Logo = styled.div<LogoAnimProps>`
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
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
  justify-content: ${(props) => (props.horizontal ? 'center' : '')};
  flex-wrap: ${(props) => (props.horizontal ? 'wrap' : '')};

  .logo-container {
    margin-top: ${(props) => (props.noMargin ? '0' : '18vh')};
    display: flex;
    width: var(--logo-width);
    height: calc(var(--base-unit) * 3);
    perspective: calc(var(--logo-width) * 1.5);
    &.error404 {
      width: calc(var(--logo-width) * 3);
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
    --logo-phrase: ${(props) =>
      props.horizontal ? `calc(var(--logo-width) * 1)` : 'inherit'};
    font-size: var(--logo-phrase);
    letter-spacing: -0.02em;
    padding-left: 0.5em;
    transform-origin: left;
    margin-top: ${(props) =>
      props.horizontal ? '0' : 'calc(var(--logo-phrase) * 0.5)'};
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
  transition: transform 0.5s cubic-bezier(0.42, 1.14, 0.87, 1.2);
  &:hover {
    transform: scale(1.02);
  }
`;
type PieceProps = {
  em?: boolean;
  tl?: boolean;
  tr?: boolean;
  bl?: boolean;
  br?: boolean;
  sq?: boolean;
};
const Piece = styled.div<PieceProps>`
  width: var(--base-unit);
  height: var(--base-unit);
  box-sizing: border-box;
  background: ${(props) => (props.em ? `FFF!important` : `var(--cyan)`)};
  border-top-left-radius: ${(props) => (props.tl ? `var(--base-unit)` : '')};
  border-top-right-radius: ${(props) => (props.tr ? `var(--base-unit)` : '')};
  border-bottom-left-radius: ${(props) => (props.bl ? `var(--base-unit)` : '')};
  border-bottom-right-radius: ${(props) =>
    props.br ? `var(--base-unit)` : ''};

  @keyframes rX3 {
    ${keyframesRX3}
  }
  @keyframes rY25 {
    ${keyframesRY25}
  }
  @keyframes rY22 {
    ${keyframesRY22}
  }
  @keyframes rX28 {
    ${keyframesRX28}
  }
  ${(props) =>
    props.tl ? animateThis('rY22', '40s', 'normal', 'forwards') : ''};
  ${(props) =>
    props.sq ? animateThis('rX28', '40s', 'normal', 'backwards') : ''};
  ${(props) =>
    props.tr ? animateThis('rY25', '40s', 'normal', 'forwards') : ''};
  ${(props) =>
    props.bl ? animateThis('rY25', '40s', 'normal', 'backwards') : ''};
  ${(props) =>
    props.br ? animateThis('rX3', '40s', 'normal', 'forwards') : ''};
`;

const LogoAnimation: React.FC<LogoAnimProps> = ({
  size,
  noMargin,
  horizontal,
  noScale,
  click,
  logoOnly = false,
}) => (
  <Logo
    size={size}
    noMargin={noMargin}
    horizontal={horizontal}
    noScale={noScale}
    onClick={click}
    onKeyPress={click}
  >
    <div className="logo-container">
      <div className="logo-column">
        <div className="logo-row">
          <Piece tl />
        </div>
        <div className="logo-row">
          <Piece sq />
          <Piece tr />
        </div>
        <div className="logo-row">
          <Piece bl />
          <Piece br />
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

const Flip404Animation = ({ size, noMargin, horizontal, noScale, click }) => (
  <Logo
    size={size}
    noMargin={noMargin}
    horizontal={horizontal}
    noScale={noScale}
    onClick={click}
    onKeyPress={click}
  >
    <div className="logo-container error404">
      <div className="logo-column">
        <div className="logo-row">
          <Piece tr />
          <Piece tr />
        </div>
        <div className="logo-row">
          <Piece bl />
          <Piece sq />
        </div>
        <div className="logo-row">
          <Piece em />
          <Piece bl />
        </div>
      </div>
      <div className="logo-column">
        <div className="logo-row">
          <Piece tl />
          <Piece tr />
        </div>
        <div className="logo-row">
          <Piece bl />
          <Piece br />
        </div>
        <div className="logo-row">
          <Piece em />
          <Piece em />
        </div>
      </div>
      <div className="logo-column">
        <div className="logo-row">
          <Piece tl />
          <Piece tl />
        </div>
        <div className="logo-row">
          <Piece bl />
          <Piece sq />
        </div>
        <div className="logo-row">
          <Piece em />
          <Piece br />
        </div>
      </div>
    </div>
    <div className="logo-phrase-container error404" style={{ paddingLeft: 0 }}>
      <div
        className="logo-phrase"
        style={{ lineHeight: 1, marginBottom: '1rem' }}
      >
        <span style={{ fontSize: '1em' }}>404</span> as in <br />
        <span style={{ fontSize: '.7em' }}>NOT FOUND</span>
      </div>
    </div>
  </Logo>
);
export default LogoAnimation;

export { Flip404Animation };
