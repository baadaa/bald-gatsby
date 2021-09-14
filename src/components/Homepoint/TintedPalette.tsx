import React from 'react';
import styled from 'styled-components';
import ColorUtil from 'color';

const lightnessSpectrum = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95];
const contentPalette = [
  { name: 'Sky', hex: '#33A1CE', skip: 50, readable: 700 },
  { name: 'Grass', hex: '#40BF8B', skip: 50, readable: 700 },
  { name: 'Turquoise', hex: '#46B7B2', skip: 50, readable: 700 },
  { name: 'Eggplant', hex: '#A54AB5', skip: 50, readable: 500 },
  { name: 'Plum', hex: '#7842BD', skip: 50, readable: 500 },
  { name: 'Lemon', hex: '#FFB000', skip: 50, readable: 700 },
  { name: 'Orange', hex: '#E4711E', skip: 50, readable: 600 },
  { name: 'Berry', hex: '#C23F6B', skip: 50, readable: 500 },
  { name: 'Cool Gray', hex: '#628C9D', skip: 50, readable: 600 },
  { name: 'Neutral Gray', hex: '#808080', skip: 50, readable: 600 },
];
const Table = styled.div`
  /* margin: 2rem 0; */
  width: 100%;
  position: relative;
  background: #fff;
  /* box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1); */
  /* padding: 1rem; */
  border-radius: 1.5rem;
  font-size: 1.2rem;
  line-height: 1;
  text-align: center;
  .formRow {
    font-weight: 500;
    text-align: right;
    position: sticky;
    z-index: 10;
    top: 30px;
    label {
      background: rgba(255, 255, 255, 0.6);
      font-size: 1.4rem;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      padding: 1rem;
    }
    input {
      margin-right: 0.5rem;
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  h4 {
    flex-basis: 100%;
    text-align: left;
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
    span {
      font-size: 1.2rem;
      font-weight: 400;
      display: none;
    }
  }
  .row {
    display: flex;
    padding: 1rem 0;
    font-weight: 600;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .col {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
    font-weight: 500;
    position: relative;
    .readable {
      position: absolute;
      top: 1rem;
      left: 1rem;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
  .swatch {
    width: 100%;
    outline: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    margin-top: 1rem;
    letter-spacing: 1px;
    border: 1px solid #ddd;
    line-height: 1;
    font-size: 1rem;
    color: #202020;
    transition: transform 0.2s;
    transform-origin: center 60%;
    cursor: pointer;
    &[data-main='true'] {
      transform: scaleY(1.1);
      box-shadow: var(--base-shadow);
      z-index: 9;
      &:hover {
        transform: scaleY(1.1) translateY(-5px);
      }
    }
    &:hover {
      transform: translateY(-5px);
    }
    span {
      opacity: 0;
      display: block;
      position: absolute;
      bottom: 1rem;
      left: 0;
      right: 0;
      text-align: center;
      font-size: inherit;
      transition: opacity 0.2s, transform 0.2s;
    }
    &[data-clicked='clicked'] {
      span {
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }
  .isMain {
    width: 1.5rem;
    height: 1.5rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .swatchText {
    padding-top: 0.5rem;
    span {
      margin-top: 1em;
      font-family: monospace;
      opacity: 0.9;
      font-weight: 400;
      display: block;
      line-height: 1.5;
      font-size: 0.85rem;
      @media screen and (max-width: 500px) {
        display: none;
      }
    }
  }
`;
const Row = ({
  contentHue = { name: '', hex: '', skip: 0, readable: 700 },
}) => (
  <div className="row">
    <h4>
      {contentHue.name}{' '}
      <span>
        &bull;{' '}
        {`HSL(${ColorUtil(contentHue.hex)
          .hsl()
          .color.map((val) => Math.round(val))
          .join(',')})`}
        &bull; {contentHue.hex}
      </span>
    </h4>
    {lightnessSpectrum.map((lightness, i) => {
      const lightnessVariation = ColorUtil(contentHue.hex).hsl().color;
      lightnessVariation[2] = lightness;
      const isMainTint = contentHue.skip === lightness;
      const isReadable = contentHue.readable === (100 - lightness) * 10;
      const tint = isMainTint
        ? contentHue.hex
        : ColorUtil.hsl(lightnessVariation);
      const rgbIndex = ['R', 'G', 'B'];
      const cmykIndex = ['C', 'M', 'Y', 'K'];
      const colorValue = {
        hex: ColorUtil(tint).hex(),
        rgb: ColorUtil(tint)
          .rgb()
          .color.map((num, index) => rgbIndex[index] + Math.round(num))
          .join('<br />'),
        cmyk: ColorUtil(tint)
          .cmyk()
          .color.map((num, index) => cmykIndex[index] + Math.round(num))
          .join('<br />'),
      };

      return (
        <div className="col" key={`${contentHue.name}row${i}`}>
          <div
            className="swatch"
            style={{
              background: tint,
              borderColor: tint,
              marginBottom: '1rem',
              height: '8rem',
            }}
            data-main={isMainTint}
          >
            {isReadable ? (
              <div
                className="readable"
                style={{
                  background: '#fff',
                  color: tint,
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                T
              </div>
            ) : null}
          </div>
          <div className="swatchText" style={{ display: 'block' }}>
            {(100 - lightness) * 10}
          </div>
        </div>
      );
    })}
  </div>
);
const TintedTable = () => (
  <Table>
    <div className="row" style={{ fontWeight: 500 }}>
      <p style={{ fontSize: 'inherit', marginBottom: '1rem' }}>
        <span
          style={{
            background: 'var(--cyan800)',
            color: '#fff',
            fontFamily: '"Work sans", sans-serif',
            fontSize: '1rem',
            padding: '0 .5rem',
            borderRadius: '3rem',
            fontWeight: 600,
          }}
        >
          T
        </span>{' '}
        indicates that it passes WCAG AA and thus can be used as text color on
        white background.
      </p>
    </div>
    {contentPalette.map((contentHue) => (
      <Row contentHue={contentHue} key={`${contentHue.name}row`} />
    ))}
  </Table>
);

export default TintedTable;
