import React, { useState } from 'react';
import styled from 'styled-components';
import './iconStyles.css';

import {
  Icon01d,
  Icon01n,
  Icon02d,
  Icon02n,
  Icon0304,
  Icon09,
  Icon10d,
  Icon10n,
  Icon11,
  Icon13,
  Icon50,
} from './weatherIconCollection';

const IconContainer = styled.div`
  position: relative;
  max-width: 70rem;
  margin: 0 auto;
  background-color: var(--bg);
  padding: 4rem 2rem 2rem;
  border-radius: 1rem;
  box-shadow: var(--hover-shadow);
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  transition: background-color 0.2s;
  justify-content: center;
  --icon-size: 16rem;
  svg {
    z-index: 1;
    flex-basis: var(--icon-size);
    width: var(--icon-size);
    height: var(--icon-size);
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
  button {
    position: absolute;
    top: 2rem;
    right: 2rem;
    line-height: 1;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    background: var(--cyan700);
    color: var(--cyan50);
    border: none;
    outline: none;
    border-radius: 3rem;
    z-index: 3;
    padding: 1rem;
    transition: box-shadow 0.2s, transform 0.2s;
    &:hover {
      box-shadow: var(--base-shadow);
      transform: scale(1.02) translateY(-1px);
    }
  }
  &[data-darkicons='true'] button {
    background: var(--cyan500);
    color: var(--cyan900);
  }
  @media screen and (max-width: 768px) {
    --icon-size: 14rem;
  }
  @media screen and (max-width: 550px) {
    --icon-size: 12rem;
  }
`;
export const WeatherIcons = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <IconContainer className="weather-icons" data-darkicons={isDark}>
      <button type="button" onClick={() => setIsDark(!isDark)}>
        Click for {!isDark ? 'Dark' : 'Light'} Mode
      </button>
      <Icon01d />
      <Icon01n />
      <Icon02d />
      <Icon02n />
      <Icon0304 />
      <Icon09 />
      <Icon10d />
      <Icon10n />
      <Icon11 />
      <Icon13 />
      <Icon50 />
    </IconContainer>
  );
};
