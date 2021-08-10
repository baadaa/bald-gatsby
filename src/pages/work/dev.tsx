// If you don't want to use TypeScript you can delete this file!
import * as React from 'react';

import PortfolioLayout from '../../components/PortfolioLayout';

const workItems = [
  {
    title: 'Homepoint.design',
    tags: ['React', 'Gatsby', 'Auth0'],
    image: 'https://picsum.photos/id/1009/300/300',
    slug: '/work/test-case',
  },
  {
    title: 'Updater.design',
    tags: ['React', 'Gatsby'],
    image: 'https://picsum.photos/id/1009/300/300',
    slug: '/work/test-case',
  },
  {
    title: 'Homepoint.com',
    tags: ['React', 'Next.js', 'Typescript'],
    image: 'https://picsum.photos/id/1006/300/300',
    slug: '/work/test-case',
  },
  {
    title: 'Mortgage.dance',
    tags: ['React', 'Gatsby', 'Typescript'],
    image: 'https://picsum.photos/id/1020/300/300',
    slug: '/work/test-case',
  },
];
const CaseStudyPage: React.FC = () => (
  <PortfolioLayout category="Dev Works" workItems={workItems} />
);

export default CaseStudyPage;
