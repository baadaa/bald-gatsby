// If you don't want to use TypeScript you can delete this file!
import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from './layout';
import Seo from './seo';

import WorkItem from './PortfolioItem';

const WorkListLayout = styled.div`
  display: flex;
  nav {
    flex-basis: 20rem;
    a {
      color: inherit;
      display: block;
      transition: transform 0.2s;
      padding: 0.75rem 0;
      text-decoration: none;
      &::before {
        content: '\\25B6';
        color: var(--red500);
        font-size: small;
        opacity: 0;
        visibility: hidden;
        margin-right: 1rem;
      }
      &.current::before {
        visibility: visible;
        opacity: 1;
      }
      &:hover {
        transform: translateX(2px);
      }
    }
    ul {
      list-style: none;
      max-width: 15rem;
      padding: 0;
      margin: 0;
      margin-left: auto;
    }
  }
  article + article {
    margin-top: 2rem;
  }
  section {
    margin-left: 5rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  section[data-col='1'] {
    article {
      flex-basis: 100%;
      margin-top: 2rem;
      &:first-of-type {
        margin-top: 0;
      }
    }
  }
  section[data-col='2'] {
    article {
      flex-basis: calc(50% - 1rem);
      width: calc(50% - 1rem);
      margin-top: 2rem;
      &:nth-of-type(1),
      &:nth-of-type(2) {
        margin-top: 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    nav {
      flex-basis: auto;
      position: sticky;
      top: var(--nav-height);
      z-index: 3;
      padding: 1rem 0;
      li {
        margin: 0;
        font-size: 1.3rem;
      }
      a {
        padding: 0.5rem 1rem;
        text-align: center;
        border-radius: 3rem;
        border-bottom: none;
        &:hover {
          transform: translateY(-2px);
        }
      }
      a::before {
        display: none;
      }
      a.current {
        font-weight: 600;
        color: var(--cyan800);
        background-color: var(--cyan100);
      }
      li + li {
        margin-left: 0.3rem;
      }
      ul {
        display: flex;
        justify-content: center;
        max-width: 100%;
        margin: 0;
      }
    }
    section {
      margin-top: 2rem;
      margin-left: 0;
    }
  }
`;

const workSubnav = [
  {
    label: 'Case Studies',
    url: '/work',
  },
  {
    label: 'Design Works',
    url: '/work/design',
  },
  {
    label: 'Dev Works',
    url: '/work/dev',
  },
];
const PortfolioLayout = ({ category, workItems }) => {
  const isShort = category !== 'Case Studies';
  return (
    <Layout heading="Work">
      <Seo title={`Work: ${category}`} />
      <WorkListLayout>
        <nav>
          <ul>
            {workSubnav.map((item, index) => (
              <li key={index}>
                <Link to={item.url} activeClassName="current">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <section data-col={isShort ? 2 : 1}>
          {workItems.map((item, index) => (
            <WorkItem
              key={index}
              description={item.description}
              industry={item.industry}
              title={item.title}
              tags={item.tags}
              slug={item.slug}
              isShort={isShort}
              thumbnail={item.thumbnail}
            />
          ))}
        </section>
      </WorkListLayout>
    </Layout>
  );
};

export default PortfolioLayout;
