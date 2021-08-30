import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  padding: 5px;
  z-index: 90;
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 1.2rem;
  text-align: right;
  box-sizing: border-box;
  cursor: crosshair;
  opacity: 0.3;
  background-color: #fff;
  color: var(--gray800);
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

const Footer = ({ click }) => (
  <FooterStyles onClick={click}>
    © {new Date().getFullYear()} by Bumhan Yu
  </FooterStyles>
);

export default Footer;
