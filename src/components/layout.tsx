import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Header from './header';
import { Footer } from './UIElements';
import GlobalStyles from '../styles/GlobalStyles';
import Code from './code';

type LayoutProps = {
  heading?: string;
  isFullWidth?: boolean;
};
const components = {
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      );
    }
  },
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
  h1 {
    flex-basis: ${(props) => (props.isFullWidth ? 'auto' : '25%')};
  }
  & > div {
    width: 100%;
    flex: 1;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    h1 {
      flex-basis: auto;
      width: 100%;
    }
  }
`;
const Layout: React.FC<LayoutProps> = ({
  heading = '',
  children,
  isFullWidth: isPost = false,
}) => (
  <MDXProvider components={components}>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyles />
    <Header />
    <WrapperStyles isFullWidth={isPost}>
      {heading && <h1>{heading}</h1>}
      <div>{children}</div>
    </WrapperStyles>
    <Footer>© {new Date().getFullYear()} by Bumhan Yu</Footer>
  </MDXProvider>
);

export default Layout;
