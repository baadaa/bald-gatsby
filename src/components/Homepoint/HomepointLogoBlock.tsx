import React, { useState } from 'react';
import styled from 'styled-components';
import {
  HomepointLogo,
  ThePointLogo,
  HPCLogo,
  HPAMLogo,
  HPMACLogo,
} from './HomepointLogo';

type HpLogoProps = {
  isDark?: boolean;
};

const LogoStyles = styled.div<HpLogoProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: var(--pale-shadow);
  padding: 20% 17% 12%;
  border-radius: 2rem;
  transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;
  background-color: ${(props) => (props.isDark ? '#0c3258' : '#fff')};
  margin-bottom: 2rem;
  .hp {
    width: 80%;
  }
  button {
    position: absolute;
    top: 2rem;
    right: 2rem;
    border: none;
    outline: none;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: ${(props) =>
      props.isDark ? 'var(--cyan500)' : 'var(--cyan100)'};
    border-radius: 3rem;
    transition: background 0.2s;
    &:hover {
      background: var(--cyan400);
    }
  }
  &:hover {
    box-shadow: var(--hover-shadow);
    transform: translateY(-1px);
  }
  .variations {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-basis: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 100px;
    .hpc {
      flex-basis: 100%;
      svg {
        max-width: 100%;
      }
      margin-bottom: 15%;
    }
    svg {
      width: 100%;
      max-width: 150px;
    }
    @media screen and (max-width: 820px) {
      flex-direction: column;
      padding-top: 50px;
      .hpc {
        width: 100%;
        flex-basis: auto;
        svg {
          width: 100%;
          height: auto;
        }
      }
      svg {
        width: 40%;
        max-width: 100%;
        height: auto;
      }
      svg + svg {
        margin-top: 30px;
      }
    }
  }
  .caption {
    text-align: center;
    display: block;
    width: 100%;
    margin-top: 2rem;
    font-size: 1.2rem;
    font-family: Georgia, serif;
    font-style: italic;
    color: ${(props) => (props.isDark ? 'var(--gray300)' : 'var(--gray600)')};
  }
`;

const HomepointLogoBlock = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <LogoStyles isDark={isDark}>
      <button type="button" onClick={() => setIsDark(!isDark)}>
        View on {isDark ? 'light' : 'dark'} background
      </button>
      <div className="hp">
        <HomepointLogo isDark={isDark} />
      </div>
      <span className="caption">Logo for primary operation</span>
      <div className="variations">
        <div className="hpc">
          <HPCLogo isDark={isDark} />
          <span className="caption">Logo for parent company</span>
        </div>
        <ThePointLogo isDark={isDark} />
        <HPAMLogo isDark={isDark} />
        <HPMACLogo isDark={isDark} />
        <span className="caption">
          Logos for digital app & sister companies
        </span>
      </div>
    </LogoStyles>
  );
};

export default HomepointLogoBlock;
