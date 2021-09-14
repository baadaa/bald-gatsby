import React, { useState } from 'react';
import ColorUtil from 'color';
import styled from 'styled-components';
import './homepointColors.css';

const Table = styled.div`
  margin: 2rem 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  font-size: 1.2rem;
  line-height: 1;
  text-align: center;
  .row {
    display: flex;
    border-bottom: 5px solid #fff;
    font-weight: 600;
    justify-content: space-between;
    flex-wrap: wrap;
    &.heading {
      position: sticky;
      top: 0px;
      background: #fff;
      @media screen and (max-width: 992px) {
        top: 80px;
      }
    }
    &.simple {
      .col {
        align-items: flex-start;
        padding: 4rem 2rem;
        @media screen and (max-width: 768px) {
          flex-basis: 100%;
          & + .col {
            margin-top: 6px;
          }
        }
      }
      .labelItem {
        padding-bottom: 0.75rem;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-size: 1rem;
        color: var(--hp-dark-gray);
        width: 100%;
        text-align: left;
        border-bottom: 1px solid var(--hp-medium-gray);
        margin-bottom: 2rem;
        &:nth-of-type(2) {
          margin-top: 5rem;
        }
      }
      h4 {
        padding-bottom: 4rem;
        margin: 0;
        font-size: 1.5rem;
        font-weight: 800;
      }
      h5 {
        font-weight: 400;
        margin: 0;
        font-size: 2.5rem;
        line-height: 1.75;
      }
      p {
        font-size: 1.4rem;
        margin: 0;
        font-family: 'Work sans', sans-serif;
        font-weight: 400;
      }
      p + p {
        margin-top: 1rem;
      }
      button {
        border: none;
        outline: none;
        padding: 1rem;
        font-size: 1.4rem;
        width: 100%;
        font-weight: 400;
        color: var(--hp-navy);
      }
      button + button {
        margin-top: 1rem;
      }
    }
    .legend {
      background: #fff;
      width: 100%;
      text-align: left;
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      svg {
        width: 12px;
        height: 12px;
        flex-basis: 12px;
        margin-right: 4px;
      }
      .elem {
        padding: 1rem 2rem;
        margin-left: auto;
        width: 320px;
        border: 1px solid #eee;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 2rem;
        span {
          display: flex;
          align-items: center;
          &:first-of-type {
            margin-top: 5px;
          }
        }
      }
      h3 {
        font-size: 1.6rem;
        font-weight: 700;
      }
    }
    &.heading .col {
      background: #fff;
      color: #555;
      font-weight: 700;
      // border: none;
      padding: 1rem;
      line-height: 1;
    }
  }
  .col {
    flex-basis: calc(50% - 5px);
    padding: 3rem 0.5rem;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    &.tight {
      flex-basis: calc(16.66666667% - 2px);
      @media screen and (max-width: 640px) {
        flex-basis: calc(33.333333% - 3px);
        &:nth-of-type(4),
        &:nth-of-type(5),
        &:nth-of-type(6) {
          margin-bottom: 1rem;
        }
      }
    }
  }
  .contrast {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    margin-top: 1rem;
    padding: 1rem;
    width: 7rem;
    letter-spacing: 1px;
    border: 1px solid #ddd;
    line-height: 1;
    font-size: 1rem;
    color: #202020;
    svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.2rem;
    }
    &:first-of-type {
      height: 5rem;
    }
  }
  .contrast + .contrast {
    margin-top: 0;
    border-top: none;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: background-color 0.2s;
  background: ${(props) => (props.isDark === true ? '#202020' : '#f0f0f0')};
  padding: ${(props) => (props.extraPadding ? '3rem' : '1.5rem')};
  label {
    cursor: pointer;
  }
  .example {
    padding: 2rem;
    flex-basis: 49%;
    background: #fff;
  }
  .fourCells {
    &::before {
      content: attr(data-name);
      color: var(--coolGray700);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      text-align: center;
      font-size: 1.7rem;
      font-weight: 600;
      transform: translateY(-3rem);
    }
    width: 48%;
    background: #fff;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 2.5rem;
    margin-top: 3rem;
    div {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1.3rem;
      font-weight: 500;
      span {
        display: block;
        margin-top: 1rem;
      }
    }
    &:last-of-type,
    &:nth-last-of-type(2) {
      margin-bottom: 0;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      &:nth-last-of-type(2) {
        margin-bottom: 2.5rem;
      }
    }
  }
  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    svg {
      width: 1.4rem;
      height: 1.4rem;
      margin-right: 0.5rem;
    }
  }
  p {
    font-size: 1.3rem;
    padding-left: 1.9rem;
  }
  .bg {
    padding: 4rem 2rem;
    font-size: 1.2rem;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    margin-top: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
  @media screen and (max-width: 700px) {
    .example {
      flex-basis: 100%;
    }
    .example + .example {
      margin-top: 1.5rem;
    }
  }
  .triad {
    background: #fff;
    height: 20rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
    width: 18%;
    margin-bottom: 1.5rem;
    position: relative;
    .dark,
    .primary,
    .small {
      text-align: center;
      font-size: 1.3rem;
      font-weight: 500;
      padding: 1rem 0;
      cursor: pointer;
      position: relative;
      transition: all 0.2s;
    }
    .dark {
      padding: 0.75rem;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        padding-top: 1rem;
        padding-bottom: 1rem;
        &::after {
          display: block;
          text-align: center;
          content: attr(data-tint);
          z-index: 99;
        }
      }
    }
    .primary {
      font-size: 1.6rem;
      padding: 1.6rem 0;
      &:hover {
        padding-top: 2rem;
        padding-bottom: 2rem;
        &::after {
          display: block;
          text-align: center;
          content: '500';
          z-index: 99;
          margin-top: 1rem;
          font-size: 1.3rem;
        }
      }
    }
    .small {
      width: 3rem;
      height: 3rem;
      border-radius: 3rem;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 1rem;
      padding: 0 1rem;
      bottom: 1rem;
      &:hover {
        width: 100%;
        border-radius: 6rem;
        &::after {
          display: block;
          text-align: center;
          content: attr(data-tint);
          z-index: 99;
          font-size: 1.3rem;
        }
      }
    }
    &:nth-of-type(5n) {
      margin-right: 0;
    }
    @media screen and (max-width: 678px) {
      width: 48%;
    }
  }
`;

const SingleComboExample = () => {
  const [isDark, setIsDark] = useState(false);
  const combos = [
    { label: 'Sky', name: 'sky', labelColor: 'var(--sky900)' },
    { label: 'Plum', name: 'plum', labelColor: '#fff' },
    { label: 'Grass', name: 'grass', labelColor: 'var(--grass900)' },
    {
      label: 'Turquoise',
      name: 'turquoise',
      labelColor: 'var(--turquoise900)',
    },
    { label: 'Eggplant', name: 'eggplant', labelColor: '#fff' },
    { label: 'Berry', name: 'berry', labelColor: '#fff' },
    { label: 'Lemon', name: 'lemon', labelColor: 'var(--lemon900)' },
    { label: 'Orange', name: 'orange', labelColor: 'var(--orange900)' },
    { label: 'Cool Gray', name: 'coolgray', labelColor: 'var(--coolgray900)' },
    {
      label: 'Neutral Gray',
      name: 'neutralgray',
      labelColor: 'var(--neutral900)',
    },
  ];
  return (
    <Wrapper extraPadding isDark={isDark}>
      <label
        htmlFor="singleColorMode"
        style={{
          flex: '100% 0 0',
          display: 'flex',
          fontSize: '1.5rem',
          alignItems: 'center',
          marginBottom: '1.5rem',
          fontWeight: 500,
          color: isDark ? '#fff' : '#202020',
        }}
      >
        <input
          type="checkbox"
          id="singleColorMode"
          name="mode"
          value="singleColorMode"
          checked={isDark}
          onChange={() => setIsDark(!isDark)}
          style={{ marginRight: '1rem' }}
        />{' '}
        Dark mode
      </label>
      {combos.map((tint) => (
        <div className="triad" key={tint.name}>
          <div
            className="dark"
            style={{
              background: `var(--${tint.name}700)`,
              flex: isDark ? 1 : '',
              order: isDark ? 2 : 0,
            }}
            data-tint={`${tint.label} ${700}`}
          />
          <div
            className="primary"
            style={{
              color: tint.labelColor,
              background: `var(--${tint.name}500)`,
            }}
            data-tint={`${tint.label} ${500}`}
          >
            {tint.label}
          </div>
          <div
            className="small"
            style={{ background: `var(--${tint.name}200)` }}
            data-tint={`${tint.label} ${200}`}
          />
        </div>
      ))}
    </Wrapper>
  );
};
const DualComboExample = () => {
  const [isDark, setIsDark] = useState(false);
  const combos = [
    {
      label: 'Sky',
      name: 'sky',
      labelColor: 'var(--sky900)',
      lightAccent: 'var(--eggplant500)',
      lightAccentLabel: 'Purple 500',
      lightAccentLabelColor: '#fff',
      darkAccent: 'var(--lemon500)',
      darkAccentLabel: 'Yellow 500',
      darkAccentLabelColor: 'var(--lemon900)',
    },
    {
      label: 'Plum',
      name: 'plum',
      labelColor: '#fff',
      lightAccent: 'var(--grass500)',
      lightAccentLabel: 'Grass 500',
      lightAccentLabelColor: 'var(--grass900)',
      darkAccent: 'var(--grass500)',
      darkAccentLabel: 'Grass 500',
      darkAccentLabelColor: 'var(--grass900)',
    },
    {
      label: 'Grass',
      name: 'grass',
      labelColor: 'var(--grass900)',
      lightAccent: 'var(--lemon500)',
      lightAccentLabel: 'Yellow 500',
      lightAccentLabelColor: 'var(--lemon900)',
      darkAccent: 'var(--lemon500)',
      darkAccentLabel: 'Yellow 500',
      darkAccentLabelColor: 'var(--lemon900)',
    },
    {
      label: 'Turquoise',
      name: 'turquoise',
      labelColor: 'var(--turquoise900)',
      lightAccent: 'var(--coolgray500)',
      lightAccentLabel: 'Cool Gray 500',
      lightAccentLabelColor: 'var(--coolgray900)',
      darkAccent: 'var(--orange500)',
      darkAccentLabel: 'Orange 500',
      darkAccentLabelColor: 'var(--orange900)',
    },
    {
      label: 'Eggplant',
      name: 'eggplant',
      labelColor: '#fff',
      lightAccent: 'var(--sky500)',
      lightAccentLabel: 'Sky 500',
      lightAccentLabelColor: 'var(--sky900)',
      darkAccent: 'var(--berry500)',
      darkAccentLabel: 'Berry 500',
      darkAccentLabelColor: '#fff',
    },
    {
      label: 'Berry',
      name: 'berry',
      labelColor: '#fff',
      lightAccent: 'var(--lemon500)',
      lightAccentLabel: 'Yellow 500',
      lightAccentLabelColor: 'var(--lemon900)',
      darkAccent: 'var(--lemon500)',
      darkAccentLabel: 'Yellow 500',
      darkAccentLabelColor: 'var(--lemon900)',
    },
    {
      label: 'Lemon',
      name: 'lemon',
      labelColor: 'var(--lemon900)',
      lightAccent: 'var(--orange500)',
      lightAccentLabel: 'Orange 500',
      lightAccentLabelColor: '#fff',
      darkAccent: 'var(--grass500)',
      darkAccentLabel: 'Grass 500',
      darkAccentLabelColor: 'var(--grass900)',
    },
    {
      label: 'Orange',
      name: 'orange',
      labelColor: 'var(--orange900)',
      lightAccent: 'var(--sky500)',
      lightAccentLabel: 'Sky 500',
      lightAccentLabelColor: 'var(--sky900)',
      darkAccent: 'var(--sky500)',
      darkAccentLabel: 'Sky 500',
      darkAccentLabelColor: 'var(--sky900)',
    },
    {
      label: 'Cool Gray',
      name: 'coolgray',
      labelColor: 'var(--coolgray900)',
      lightAccent: 'var(--turquoise500)',
      lightAccentLabel: 'Turquoise 500',
      lightAccentLabelColor: 'var(--turquoise900)',
      darkAccent: 'var(--turquoise500)',
      darkAccentLabel: 'Turquoise 500',
      darkAccentLabelColor: 'var(--turquoise900)',
    },
    {
      label: 'Neutral Gray',
      name: 'neutralgray',
      labelColor: 'var(--neutral900)',
      lightAccent: 'var(--lemon500)',
      lightAccentLabel: 'Yellow 500',
      lightAccentLabelColor: 'var(--lemon900)',
      darkAccent: 'var(--lemon500)',
      darkAccentLabel: 'Yellow 500',
      darkAccentLabelColor: 'var(--lemon900)',
    },
  ];
  return (
    <Wrapper extraPadding isDark={isDark}>
      <label
        htmlFor="dualColorMode"
        style={{
          flex: '100% 0 0',
          display: 'flex',
          fontSize: '1.5rem',
          alignItems: 'center',
          marginBottom: '1.5rem',
          fontWeight: 500,
          color: isDark ? '#fff' : '#202020',
        }}
      >
        <input
          type="checkbox"
          id="dualColorMode"
          name="mode"
          value="dualColorMode"
          checked={isDark}
          onChange={() => setIsDark(!isDark)}
          style={{ marginRight: '1rem' }}
        />{' '}
        Dark mode
      </label>
      {combos.map((tint) => (
        <div className="triad" key={tint.name}>
          <div
            className="dark"
            style={{
              background: `var(--${tint.name}700)`,
              flex: isDark ? 1 : '',
              order: isDark ? 2 : 0,
            }}
            data-tint={`${tint.label} ${700}`}
          />
          <div
            className="primary"
            style={{
              color: tint.labelColor,
              background: `var(--${tint.name}500)`,
            }}
            data-tint={`${tint.label} ${500}`}
          >
            {tint.label}
          </div>
          <div
            className="small"
            style={{
              background: isDark ? tint.darkAccent : tint.lightAccent,
              color: isDark
                ? tint.darkAccentLabelColor
                : tint.lightAccentLabelColor,
            }}
            data-tint={isDark ? tint.darkAccentLabel : tint.lightAccentLabel}
          />
        </div>
      ))}
    </Wrapper>
  );
};

const DefaultTextSamples = () => (
  <Table>
    <div className="row simple">
      <div className="col" style={{ background: '#fff' }}>
        <h4>White BG</h4>
        <span className="labelItem">Heading</span>
        <h5 style={{ color: 'var(--hp-navy)' }}>HP Navy</h5>
        <h5 style={{ color: 'var(--hp-light-blue)' }}>HP Light Blue</h5>
        <span className="labelItem">Body text</span>
        <p style={{ color: 'var(--neutralgray900)' }}>Neutral Gray 900</p>
        <p style={{ color: 'var(--coolgray900)' }}>Cool Gray 900</p>
      </div>
      <div className="col" style={{ background: 'var(--neutralgray50)' }}>
        <h4>Off-White BG (Neutral Gray 50)</h4>
        <span className="labelItem">Heading</span>
        <h5 style={{ color: 'var(--hp-navy)' }}>HP Navy</h5>
        <h5 style={{ color: 'var(--hp-light-blue)' }}>HP Light Blue</h5>
        <span className="labelItem">Body text</span>
        <p style={{ color: 'var(--neutralgray900)' }}>Neutral Gray 900</p>
        <p style={{ color: 'var(--coolgray900)' }}>Cool Gray 900</p>
      </div>
    </div>
    <div className="row simple">
      <div className="col" style={{ background: 'var(--hp-navy' }}>
        <h4 style={{ color: '#fff' }}>HP Navy BG</h4>
        <span className="labelItem" style={{ color: '#fff' }}>
          Heading
        </span>
        <h5 style={{ color: '#fff' }}>White</h5>
        <h5 style={{ color: 'var(--hp-light-blue)' }}>HP Light Blue</h5>
        <h5 style={{ color: 'var(--hp-green)' }}>HP Green</h5>
        <span className="labelItem" style={{ color: '#fff' }}>
          Body text
        </span>
        <p style={{ color: '#FFF' }}>White</p>
      </div>
      <div className="col" style={{ background: 'var(--hp-light-blue)' }}>
        <h4>HP Light Blue BG</h4>
        <span
          className="labelItem"
          style={{ color: 'var(--hp-navy)', borderColor: 'var(--hp-navy)' }}
        >
          Heading
        </span>
        <h5 style={{ color: '#fff' }}>White</h5>
        <h5 style={{ color: 'var(--hp-navy)' }}>HP Navy</h5>
        <span
          className="labelItem"
          style={{ color: 'var(--hp-navy)', borderColor: 'var(--hp-navy)' }}
        >
          Body text
        </span>
        <p style={{ color: 'var(--neutralgray900)' }}>Neutral Gray 900</p>
        <p style={{ color: 'var(--coolgray900)' }}>Cool Gray 900</p>
      </div>
    </div>
  </Table>
);

const LegibleCombinations = () => {
  const combos = [
    {
      name: 'sky',
      label: 'Sky',
      hex: '#33A1CE',
      textOnLight: 700,
      textOnPrimary: 900,
    },
    {
      name: 'grass',
      label: 'Grass',
      hex: '#40BF8B',
      textOnLight: 800,
      textOnPrimary: 900,
    },
    {
      name: 'turquoise',
      label: 'Turquoise',
      hex: '#46B7B2',
      textOnLight: 800,
      textOnPrimary: 900,
    },
    {
      name: 'eggplant',
      label: 'Eggplant',
      hex: '#AF3FC2',
      textOnLight: 600,
      textOnPrimary: 0,
    },
    {
      name: 'plum',
      label: 'Plum',
      hex: '#7526D9',
      textOnLight: 500,
      textOnPrimary: 0,
    },
    {
      name: 'lemon',
      label: 'Lemon',
      hex: '#FFB000',
      textOnLight: 800,
      textOnPrimary: 900,
    },
    {
      name: 'orange',
      label: 'Orange',
      hex: '#F06E0F',
      textOnLight: 700,
      textOnPrimary: 900,
    },
    {
      name: 'berry',
      label: 'Berry',
      hex: '#CF3066',
      textOnLight: 700,
      textOnPrimary: 0,
    },
    {
      name: 'coolgray',
      label: 'Cool Gray',
      hex: '#628C9D',
      textOnLight: 700,
      textOnPrimary: 900,
    },
    {
      name: 'neutralgray',
      label: 'Neutral Gray',
      hex: '#808080',
      textOnLight: 600,
      textOnPrimary: 900,
    },
  ];
  return (
    <Wrapper extraPadding>
      {combos.map((tint) => {
        const tints = {
          0: ColorUtil(tint.hex).lightness(100),
          50: ColorUtil(tint.hex).lightness(95),
          100: ColorUtil(tint.hex).lightness(90),
          200: ColorUtil(tint.hex).lightness(80),
          300: ColorUtil(tint.hex).lightness(70),
          400: ColorUtil(tint.hex).lightness(60),
          500: ColorUtil(tint.hex).lightness(50),
          600: ColorUtil(tint.hex).lightness(40),
          700: ColorUtil(tint.hex).lightness(30),
          800: ColorUtil(tint.hex).lightness(20),
          900: ColorUtil(tint.hex).lightness(10),
        };
        const contrastOver500 = ColorUtil(tints[tint.textOnPrimary])
          .contrast(ColorUtil(tints[500]))
          .toFixed(1);
        const textOver500 =
          tint.textOnPrimary === 0 ? 'White' : tint.textOnPrimary;
        return (
          <div className="fourCells" key={tint.name} data-name={tint.label}>
            <div className="bgWhite" style={{ color: tints[700] }}>
              700 over white
              <span>
                (
                {ColorUtil(tints[700]).contrast(ColorUtil(tints[0])).toFixed(1)}
                :1)
              </span>
            </div>
            <div
              className="bg50"
              style={{
                color: tints[tint.textOnLight],
                background: tints[50],
              }}
            >
              {tint.textOnLight} over 50
              <span>
                (
                {ColorUtil(tints[tint.textOnLight])
                  .contrast(ColorUtil(tint.hex).lightness(95))
                  .toFixed(1)}
                :1)
              </span>
            </div>
            <div
              className="bg700"
              style={{ color: tints[0], background: tints[700] }}
            >
              White over 700
              <span>
                ({ColorUtil(tints[0]).contrast(tints[700]).toFixed(1)}
                :1)
              </span>
            </div>
            <div
              className="bg500"
              style={{
                color: tints[tint.textOnPrimary],
                background: tints[500],
              }}
            >
              {contrastOver500 >= 4.5 ? `${textOver500} over 500` : null}
              <span>
                {contrastOver500 >= 4.5
                  ? `(${contrastOver500}:1)`
                  : 'NOT SUITABLE AS TEXT BG'}
              </span>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export {
  SingleComboExample,
  DualComboExample,
  DefaultTextSamples,
  LegibleCombinations,
};
