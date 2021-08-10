import * as React from 'react';

import { Helmet } from 'react-helmet';
import Header from './header';

import GlobalStyles from '../styles/GlobalStyles';

const Layout = ({ children }) => (
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
    <main
      style={{
        maxWidth: 'var(--max-width)',
        margin: 'calc(var(--nav-height) + var(--layout-top-padding)) auto 0',
        padding: '0 1.5rem',
      }}
    >
      {children}
    </main>
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  </>
);

export default Layout;
