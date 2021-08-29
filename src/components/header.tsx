import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../styles/hamburgers.css';

const HeaderStyles = styled.header`
  background: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* max-width: var(--max-width); */
    margin: 0 auto;
    padding: 0 1.5rem;
    height: var(--nav-height);
  }
  .logo {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1;
    display: inline-flex;
    transition: transform 0.2s, text-shadow 0.2s;
    &:hover {
      animation: rainbow 3s infinite linear;
      text-shadow: var(--hover-shadow);
      transform: translateY(-2px);
    }
    &:hover span {
      animation: rainbowDark 3s infinite linear;
    }
  }
  @keyframes rainbow {
    0% {
      color: var(--cyan500);
    }
    25% {
      color: var(--green500);
    }
    50% {
      color: var(--yellow500);
    }
    75% {
      color: var(--red500);
    }
    100% {
      color: var(--cyan500);
    }
  }
  @keyframes rainbowDark {
    0% {
      color: var(--cyan600);
    }
    25% {
      color: var(--green600);
    }
    50% {
      color: var(--yellow600);
    }
    75% {
      color: var(--red600);
    }
    100% {
      color: var(--cyan600);
    }
  }
  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    transition: opacity 0.2s, transform 0.2s;
    padding: 0;
    align-items: stretch;
  }
  li {
    font-size: 2.5rem;
    margin: 0;
    transition: transform 0.2s, text-shadow 0.2s;
    letter-spacing: -0.5px;
    &:hover {
      animation: rainbow 3s infinite linear;
      transform: translateY(-2px);
      text-shadow: var(--hover-shadow);
    }
  }
  a {
    padding: 0.5em 1em;
    color: var(--cyan800);
    color: inherit;
    display: block;
    text-decoration: none;
  }
  .menu {
    display: none;
    z-index: 999;
  }
  @media screen and (max-width: 1024px) {
    li {
      font-size: 2.2rem;
    }
  }
  @media screen and (max-width: 768px) {
    li {
      font-size: 2rem;
    }
    a {
      padding: 0.5em 0.6em;
    }
  }
  @media screen and (max-width: 480px) {
    .menu {
      display: block;
    }
    nav ul {
      background: #fff;
      box-shadow: var(--base-shadow);
      opacity: 0;
      pointer-events: none;
      position: absolute;
      border-radius: 1rem;
      top: calc(var(--nav-height) + 0.5rem);
      padding: 1rem 3rem;
      right: 1.5rem;
      flex-direction: column;
      transform: translateY(-7rem);
      &[data-mobile='true'] {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
      }
    }
  }
`;

const nav = [
  {
    label: 'About',
    url: '/',
    partialMatch: false,
  },
  {
    label: 'Work',
    url: '/work/design',
    partialMatch: true,
  },
  // {
  //   label: 'Shop',
  //   url: '/shop',
  //   partialMatch: false,
  // },
  {
    label: 'Uses',
    url: '/uses',
    partialMatch: false,
  },
  {
    label: 'Blog',
    url: '/blog',
    partialMatch: true,
  },
  {
    label: 'Contact',
    url: '/contact',
    partialMatch: true,
  },
];
const Header: React.FC = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <HeaderStyles>
      <div className="wrapper">
        <div className="logo">
          <Link to="/" style={{ padding: 0 }}>
            B<span>.</span>
          </Link>
        </div>
        <nav>
          <ul data-mobile={menuIsActive}>
            {nav.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.url}
                  activeStyle={{ fontWeight: 700 }}
                  partiallyActive={item.partialMatch}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="menu">
            <button
              className={`hamburger hamburger--vortex ${
                menuIsActive ? 'is-active' : ''
              }`}
              type="button"
              onClick={() => setMenuIsActive(!menuIsActive)}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </span>
        </nav>
      </div>
    </HeaderStyles>
  );
};

export default Header;
