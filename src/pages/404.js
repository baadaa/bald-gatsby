import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { Flip404Animation } from '../components/LogoAnimation/LogoAnimation';

// TODO: add `noindex;nofollow` prop rendering to SEO component

const NotFoundPage = () => (
  <Layout>
    <Seo
      title="404: Not found"
      meta={[
        {
          name: 'googlebot',
          content: 'noindex,nofollow',
        },
        {
          name: 'robots',
          content: 'noindex,nofollow',
        },
      ]}
    />
    <Flip404Animation size="5rem" />
    <div style={{ margin: '0 auto', maxWidth: '330px' }}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '1.8rem',
          fontWeight: 600,
          maxWidth: '20ch',
          margin: '1rem auto',
        }}
      >
        We couldn't find the page you were looking for.
      </h1>
      <div
        style={{
          fontSize: '1.2rem',
          lineHeight: '1.5',
          background: '#f0f0f0',
          padding: '2rem 3rem',
          marginTop: '2rem',
          marginBottom: '1.3rem',
        }}
      >
        Maybe there's a typo in the URL. Maybe the page has been moved or
        deleted. In any case, nothing to see here.
      </div>
      <Link
        to="/"
        style={{
          display: 'block',
          textAlign: 'center',
          fontSize: '1.3rem',
          color: 'var(--berry)',
        }}
      >
        Go back home
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
