import React, { SVGAttributes } from 'react';
import styled from 'styled-components';
import { flexUnit } from '../utils';

type IntroContentProp = {
  width: 1 | 2;
  backsideBg?: string;
  color?: string;
  mobileOrder?: number;
  order: number;
};
type IntroBoxProp = IntroContentProp & {
  icon: React.FC;
  label: string;
};
const IntroBoxDiv = styled.div<IntroContentProp>`
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    padding-top: ${(props) => (props.width === 1 ? '100%' : '50%')};
  }
  flex-basis: ${(props) => (props.width === 1 ? '25%' : '50%')};
  position: relative;
  order: ${(props) => props.order};
  perspective: 2000px;
  &:hover .flipper {
    transform: ${(props) =>
      props.width === 1 ? 'rotateY(180deg)' : 'rotateX(180deg)'};
  }
  .flipper {
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-origin: center;
    transform-style: preserve-3d;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  span {
    position: absolute;
    font-weight: 700;
    font-size: 1.3rem;
    ${flexUnit(1.3, 13, 26, 'vw', 'font-size')}

    line-height: 100%;
    padding: 1.2em 0 0 1.2em;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: ${(props) => props.color || '#ffffff'};
    display: block;
  }
  .front,
  .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .back {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.backsideBg};
    padding: 1rem;
    transform: ${(props) =>
      props.width === 1 ? 'rotateY(180deg)' : 'rotateX(180deg)'};
    .logo-collage {
      ${flexUnit(1.3, 10, 24, 'vw', 'font-size')}
      max-width: 17em;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      div {
        box-sizing: border-box;
        svg {
          margin: 0.5em 0;
          height: 2em;
        }
        flex: 0;
        display: inline;
        &.react svg {
          width: 4.8em;
          flex-basis: 4.8em;
        }
        &.gatsby svg {
          width: 5.3em;
          flex-basis: 5.3em;
        }
        &.next svg {
          width: 3.8em;
          flex-basis: 3.8em;
        }
        &.js svg {
          width: 2.5em;
          height: 2.5em;
          flex-basis: 2.5em;
          margin-left: 0.5em;
          margin-right: 0.5em;
        }
        &.html svg {
          width: 2.5em;
          height: 2.5em;
          flex-basis: 2.5em;
          margin-left: 0.5em;
          margin-right: 0.5em;
        }
        &.git svg {
          width: 4.5em;
          flex-basis: 4.5em;
        }
        &.vscode svg {
          width: 2.6em;
          flex-basis: 2.6em;
        }
        &.iterm svg {
          width: 2.5em;
          height: 2.5em;
          flex-basis: 2.5em;
        }
        &.digital svg {
          width: 2.5em;
          height: 2.5em;
          flex-basis: 2.5em;
          margin-left: 0.5em;
          margin-right: 0.5em;
        }
        &.analog {
          svg {
            width: 14em;
            height: 1.5em;
            flex-basis: 14em;
            transform: rotate(10deg) translateX(2em) translateY(1em);
          }
          &[data-ispencil='true'] svg {
            backface-visibility: hidden;
            height: 1.3em;
            transform: rotate(-5deg) translateX(-1em) translateY(0.5em);
          }
        }
      }
    }
    .about-back-block {
      ${flexUnit(1.3, 10, 24, 'vw', 'font-size')}
      // border: 1px solid rgba(255,255,255,.3);
      color: #fff;
      margin: 0.65em 0;
      &[data-small='true'] {
        margin: 0.3em 0;
      }
      display: flex;
      align-items: center;
      box-sizing: border-box;
      max-width: ${(props) => (props.width === 1 ? '15em' : '20em')};
      &.pref {
        max-width: 25em;
      }
      .pref-container {
        margin: 0;
        .bit {
          display: inline-flex;
          margin: 0.275em 0;
          align-items: center;
          border-radius: 3rem;
          padding: 0.3em;
          margin-right: 0.5em;
          background: #27261e;
        }
        span {
          font-size: 0.8em;
          position: inherit;
          font-weight: 400;
          margin-right: 0.75em;
          display: inline-block;
          padding: 0.33em 1em;
          border-radius: 3rem;
          margin: 0;
          &.yay {
            background: #44433b;
            color: #fff;
            &::before {
              color: #fff;
              opacity: 0.3;
              content: '\\2713';
              margin-right: 0.5em;
            }
          }
          &.nay {
            color: #898880;
          }
        }
      }
      p {
        margin: 0;
        font-family: Georgia, serif;
        span {
          font-family: Raleway, Helvetica, Arial, sans-serif;
          display: block;
          position: inherit;
          font-size: 0.8em;
          padding: 0;
          margin: 0;
          margin-top: 0.5em;
          font-weight: 400;
        }
      }
      svg {
        width: 2.5em;
        height: 2.5em;
        flex: 0 0 2.5em;
        margin-right: 1.2rem;
      }
    }
  }
  @media screen and (max-width: 600px) {
    flex-basis: ${(props) => (props.width === 1 ? '50%' : '100%')};
    order: ${(props) => props.mobileOrder || props.order};
    .back .about-back-block {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 800px) {
    .back .about-back-block[data-small='true'] svg {
      width: 1.5em;
      height: 1.5em;
      flex: 0 0 1.5em;
      margin-right: 0.75rem;
    }
  }
  @media screen and (max-width: 500px) {
    .back .about-back-block p span {
      display: none;
    }
  }
`;

const IntroBox: React.FC<IntroBoxProp> = ({
  icon,
  width = 1,
  backsideBg = '#333',
  color,
  order,
  mobileOrder,
  label,
  children,
}) => {
  const Icon = icon;
  return (
    <IntroBoxDiv
      width={width}
      backsideBg={backsideBg}
      color={color}
      order={order}
      mobileOrder={mobileOrder}
    >
      <div className="flipper">
        <div className="front">
          <Icon />
          <span>{label}</span>
        </div>
        <div className="back">{children}</div>
      </div>
    </IntroBoxDiv>
  );
};

type BackBulletProps = {
  icon: React.FC;
  main: string;
  hasTightGap?: boolean;
  sub?: string;
};
const BacksideBullets: React.FC<BackBulletProps> = ({
  icon,
  main,
  sub = '',
  hasTightGap = false,
}) => {
  const Icon = icon;
  return (
    <div
      className="about-back-block"
      data-small={!!hasTightGap}
      style={{
        width: '100%',
        margin: hasTightGap ? '0.3em 0' : '0.65em 0',
      }}
    >
      <Icon />
      <p>
        {main}
        {sub && <span>{sub}</span>}
      </p>
    </div>
  );
};
type DesignLogoProps = {
  logos: Array<{
    svg: React.FC<SVGAttributes<SVGElement>>;
    type: string;
    isPencil?: boolean;
  }>;
};
const LogoCollage: React.FC<DesignLogoProps> = ({ logos }) => (
  <div className="logo-collage">
    {logos.map((logo, index) => {
      const Icon = logo.svg;
      return (
        <div
          key={`des${index}`}
          className={logo.type}
          data-ispencil={logo.isPencil}
        >
          <Icon />
        </div>
      );
    })}
  </div>
);
type BackPrefersProps = {
  items: Array<Array<{ thing: string; preferred: boolean }>>;
};
const BacksidePrefers: React.FC<BackPrefersProps> = ({ items }) => (
  <div
    className="about-back-block pref"
    style={{
      width: '100%',
    }}
  >
    <div className="pref-container">
      {items.map((item, index) => (
        <div className="bit" key={`pref${index}`}>
          {item.map((thing, i) => (
            <span key={i} className={thing.preferred ? 'yay' : 'nay'}>
              {thing.thing}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
export { IntroBox, BacksideBullets, BacksidePrefers, LogoCollage };
