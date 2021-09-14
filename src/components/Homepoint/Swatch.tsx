import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  width: 32%;
  margin-right: 2%;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  box-sizing: border-box;
  background: #fff;
  transition: transform 0.2s, box-shadow 0.2s;
  h3 {
    font-size: 12px;
    margin: 0;
    flex: 0;
  }
  p {
    font-size: 8px;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
  &:last-of-type {
    margin-right: 0;
  }
  .swatchColor {
    height: 150px;
    flex-basis: 200px;
    color: var(--gray800);
    display: flex;
    font-weight: 200;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    span {
      opacity: 0;
      font-size: inherit;
      transition: opacity 0.2s, transform 0.2s;
      &.clicked {
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }
  .swatchText {
    flex-basis: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 1rem;
      margin-top: 0;
      line-height: 1;
      flex: 0;
      padding: 0;
      color: var(--gray800);
    }
    box-sizing: border-box;
    padding: 20px 10px;
    color: var(--gray800);
    width: 100%;
    line-height: 1.5;
    font-weight: 400;
    text-align: center;
    span {
      font-family: monospace;
      opacity: 0.9;
      font-weight: 400;
      display: block;
      line-height: 1.5;
      font-size: 0.85rem;
    }
    .hexString {
      font-weight: 400;
    }
  }
  &[data-type='nonPrimary'] {
    width: 15%;
    flex-direction: column;
    .swatchColor,
    .swatchText {
      flex-basis: 100px;
    }
  }
  &[data-tints='isLeading'] {
    width: 18.4%;
    flex-direction: column;
    margin-bottom: 1.5rem;
    .swatchColor,
    .swatchText {
      flex-basis: 100px;
    }
    &:nth-of-type(5n) {
      margin-right: 0;
    }
    &:nth-of-type(n + 6) {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 768px) {
    &:not([data-type='nonPrimary']) {
      width: 49%;
      margin-bottom: 1.5rem;
      &:nth-of-type(2) {
        margin-right: 0;
      }
      &:last-of-type {
        margin-bottom: 0;
        margin-right: 0;
      }
    }
    &[data-type='nonPrimary'] {
      width: 32%;
      margin-top: 1.5rem;
      &:nth-of-type(3n) {
        margin-right: 0;
      }
      &:nth-of-type(1),
      &:nth-of-type(2),
      &:nth-of-type(3) {
        margin-top: 0;
      }
    }
    &[data-tints='isLeading'] {
      width: calc(33.33333333% - 1rem);
      margin-right: 1.5rem;
      &:nth-of-type(5n),
      &:nth-of-type(2n) {
        margin-right: 1.5rem;
      }
      &:nth-of-type(n + 6) {
        margin-bottom: 1.5rem;
      }
      margin-bottom: 1.5rem;
      &:nth-of-type(3n) {
        margin-right: 0;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  @media screen and (max-width: 550px) {
    &:not([data-type='nonPrimary']) {
      width: 100%;
      margin-bottom: 1.5rem;
      margin-right: 0;
      &:last-of-type {
        margin-bottom: 0;
      }
      .swatchColor {
        flex-grow: 1;
      }
    }
    &[data-type='nonPrimary'] {
      width: 49%;
      margin-top: 1.5rem;
      &:nth-of-type(2n) {
        margin-right: 0;
      }
      &:nth-of-type(3) {
        margin-right: 2%;
        margin-top: 1.5rem;
      }
      &:last-of-type {
        margin-bottom: 0;
        margin-right: 0;
      }
    }
    &[data-tints='isLeading'] {
      width: calc(50% - 0.75rem);
      margin-bottom: 1.5rem;
      margin-right: 1.5rem;
      &:nth-of-type(3n) {
        margin-right: 1.5rem;
      }
      &:nth-of-type(2n) {
        margin-right: 0;
      }
      &:nth-last-of-type(2) {
        margin-bottom: 0;
      }
      &:last-of-type {
        margin-bottom: 0;
        margin-right: 0;
      }
    }
  }
`;

type SwatchProps = {
  name: string;
  hex: string;
  rgb: string;
  pms?: string;
  cmyk?: string;
  nonPrimary?: boolean;
  isLeading?: boolean;
};

const Swatch: React.FC<SwatchProps> = ({
  name,
  hex,
  rgb,
  cmyk,
  pms,
  nonPrimary,
  isLeading,
}) => (
  <Card
    data-type={nonPrimary ? 'nonPrimary' : ''}
    data-tints={isLeading ? 'isLeading' : ''}
  >
    <div className="swatchColor" style={{ backgroundColor: `#${hex}` }} />
    <div className="swatchText">
      <h3>{name}</h3>
      <span className="hexString">{`#${hex}`}</span>
      <span>RGB: {rgb}</span>
      <span>CMYK: {cmyk}</span>
      <span style={{ display: !pms ? 'none' : '' }}>PMS: {pms}</span>
    </div>
  </Card>
);

export default Swatch;
