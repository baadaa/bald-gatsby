import React from 'react';
import styled from 'styled-components';
import LogoAnimation from './LogoAnimation/LogoAnimation';

const InfoWrapperStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 91;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-100vw);
  opacity: 0;
  transition: transform 0.2s, opacity 0.2s;
  &[data-active='true'] {
    opacity: 1;
    transform: translateX(0);
  }
  .card {
    background-color: #2d2d2d;
    width: 100%;
    max-width: 32rem;
    box-sizing: border-box;
    border-radius: 0.7rem;
    box-shadow: var(--base-shadow);
    padding: 4rem 2rem 3rem;
    position: relative;
    border: 1px solid #575757;
    color: #ddd;
    .chrome {
      position: absolute;
      padding: 0.75rem;
      display: flex;
      align-items: center;
      line-height: 1;
      top: 0;
      left: 0;
      right: 0;
      border-radius: 0.7rem 0.7rem 0 0;
      background-color: #3a3a3a;
      border-bottom: 1px solid #000;
    }
    span {
      color: #fff;
    }
    button,
    span.button {
      width: 1.4rem;
      height: 1.4rem;
      font-size: 1rem;
      margin-right: 0.85rem;
      padding: 0;
      display: inline-block;
      background-color: #6a6a6a;
      border: none;
      outline: none;
      border-radius: 2rem;
    }
    .close {
      cursor: pointer;
      background-color: #ff544d;
      line-height: 1;
      border: none;
      outline: 0;
      color: #ff544d;
      font-size: 1.5rem;
      font-weight: 800;
      &:hover {
        color: #990000;
      }
    }
    @keyframes colorLoop {
      0% {
        background-color: var(--green500);
      }
      25% {
        background-color: var(--blue500);
      }
      50% {
        background-color: var(--red500);
      }
      75% {
        background-color: var(--yellow500);
      }
      100% {
        background-color: var(--green500);
      }
    }
    h5 {
      text-align: center;
      font-size: 2.4rem;
      margin: 1.5rem 0 0;
      font-weight: 400;
      color: #999;
      span {
        font-weight: 700;
        color: #fff;
      }
    }
    p {
      font-family: 'Work sans', sans-serif;
      font-size: 1.2rem;
      text-align: center;
      margin: 0;
    }
    a {
      color: inherit;
    }
  }
`;

type SiteInfoProps = { isVisible: boolean; cb: any };

const SiteInfo: React.FC<SiteInfoProps> = ({ isVisible, cb }) => {
  console.log(isVisible);

  return (
    <InfoWrapperStyles data-active={isVisible}>
      <div className="card">
        <div className="chrome">
          <button className="close" type="button" onClick={cb}>
            &times;
          </button>
          <span className="button" />
          <span className="button" />
        </div>
        <LogoAnimation size="7rem" noMargin noScale logoOnly click={cb} />
        <h5>
          <span>B</span> as in <span>BALD</span>
        </h5>
        <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>Version 0.1.1</p>
        <p>
          Built with <a href="https://gatsbyjs.org/">Gatsby</a> &{' '}
          <a href="https://styled-components.com/">styled-components</a>
        </p>
        <p>
          Repo at <a href="https://github.com/baadaa/bald-gatsby">GitHub</a> &
          Hosted via <a href="https://www.netlify.com/">Netlify</a>
        </p>
        <p style={{ marginTop: '2rem' }}>
          &copy; {new Date().getFullYear()} by Bumhan Yu
        </p>
      </div>
    </InfoWrapperStyles>
  );
};

export default SiteInfo;
