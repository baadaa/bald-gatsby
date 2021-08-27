import React, { useState } from 'react';

import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Header from './header';
import { Footer } from './UIElements';
import GlobalStyles from '../styles/GlobalStyles';
import EasterEggs from './EasterEggs';
import SiteInfo from './SiteInfo';

type LayoutProps = {
  heading?: string;
  subheading?: string;
  isFullWidth?: boolean;
};

const WrapperStyles = styled.main<LayoutProps>`
  max-width: ${(props) => (props.isFullWidth ? 'auto' : 'var(--max-width)')};
  margin: 0 auto;
  margin-top: ${(props) =>
    props.isFullWidth
      ? 'var(--nav-height)'
      : 'calc(var(--nav-height) + var(--layout-top-padding))'};
  padding: ${(props) => (props.isFullWidth ? '0' : '0 1.5rem')};
  display: flex;
  align-items: flex-start;
  position: relative;
  h1.side {
    position: sticky;
    top: calc(var(--nav-height) + 20px);
    flex-basis: ${(props) => (props.isFullWidth ? 'auto' : '25%')};
    &::after {
      content: '${(props) => props.subheading}';
      display: block;
      font-size: 1.6rem;
      font-weight: 400;
      max-width: 16ch;
      line-height: 1.5;
      margin-top: 0.6em;
    }
  }
  & > div {
    width: 100%;
    flex: 1;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    h1.side {
      flex-basis: auto;
      position: static;
      width: 100%;
      &::after {
        max-width: 100%;
      }
    }
  }
`;
const Layout: React.FC<LayoutProps> = ({
  heading = '',
  subheading = '',
  children,
  isFullWidth: isPost = false,
}) => {
  const [siteInfoIsShowing, setSiteInfoIsShowing] = useState(false);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <Header />
      <WrapperStyles isFullWidth={isPost} subheading={subheading}>
        {heading && <h1 className="side">{heading}</h1>}
        <div>{children}</div>
      </WrapperStyles>
      <Footer onClick={() => setSiteInfoIsShowing(true)}>
        © {new Date().getFullYear()} by Bumhan Yu
      </Footer>
      <SiteInfo
        isVisible={siteInfoIsShowing}
        cb={() => setSiteInfoIsShowing(false)}
      />
      <EasterEggs />
    </>
  );
};

export default Layout;
