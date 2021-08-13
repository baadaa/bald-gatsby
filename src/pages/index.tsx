import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import BaldBackgroundSection from '../components/BaldBackgroundSection';
import LogoAnimation from '../components/LogoAnimation/LogoAnimation';

import Layout from '../components/layout';
import Seo from '../components/seo';

const HeroArea = styled(BaldBackgroundSection)`
  height: calc(100vh - var(--nav-height));
  border: 1px solid red;
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const IndexPage = () => (
  <Layout isFullWidth>
    <Seo title="Home" />
    <HeroArea>
      <LogoAnimation size="8rem" />
    </HeroArea>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
);

export default IndexPage;
