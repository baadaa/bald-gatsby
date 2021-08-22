import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Seo from '../seo';
import Layout from '../layout';
import {
  BlogEntry,
  PostHeroImgSection,
  PostContentArea,
  LabelPill,
  PostNav,
} from '../UIElements';
import { truncateStr } from '../utils';

const PortfolioPostLayout = ({
  data: { mdx, site },
  pageContext,
  location,
}) => {
  const { body } = mdx;
  const { siteUrl } = site.siteMetadata;
  const { previous, next } = pageContext;
  const from = location.state ? location.state.from : undefined;
  const {
    tags,
    title,
    category,
    description,
    headerImg,
    headerShadow,
    headerBreadcrumbBg,
    headerTextColor,
  } = mdx.frontmatter;
  const ogImage = headerImg.publicURL.endsWith('svg')
    ? 'https://bald.design/home-og-image.jpg'
    : `${siteUrl}${headerImg.publicURL}`;
  const parentPaths = {
    caseStudy: '/work',
    design: '/work/design',
    dev: '/work/dev',
  };
  const baseCategory = category[0];
  const back = parentPaths[from] || parentPaths[baseCategory];
  const prevArticle = previous && previous.frontmatter;
  const nextArticle = next && next.frontmatter;
  return (
    <Layout isFullWidth>
      <Seo
        title={title}
        description={description}
        meta={[
          {
            property: `og:image`,
            content: ogImage,
          },
        ]}
      />
      <PostHeroImgSection
        headerImg={headerImg.publicURL}
        headerTextColor={headerTextColor}
        headerShadow={headerShadow}
        headerBreadcrumbBg={headerBreadcrumbBg}
      >
        <Link to={back}>Work</Link>
        <h1
          style={{ marginTop: '16rem', marginBottom: '19rem', width: '100%' }}
        >
          {title}
        </h1>
      </PostHeroImgSection>
      <BlogEntry>
        <PostContentArea>
          <ul className="post-tags">
            {tags.map((tag, index) => (
              <LabelPill key={index}>{tag}</LabelPill>
            ))}
          </ul>
          <MDXRenderer>{body}</MDXRenderer>
          <PostNav>
            {prevArticle ? (
              <Link
                to={prevArticle.slug}
                className="previous"
                state={{ from: location.pathname }}
              >
                {truncateStr(prevArticle.title, 50)}
              </Link>
            ) : (
              ''
            )}
            {nextArticle ? (
              <Link
                to={nextArticle.slug}
                className="next"
                state={{ from: location.pathname }}
              >
                {truncateStr(nextArticle.title, 50)}
              </Link>
            ) : (
              ''
            )}
          </PostNav>
        </PostContentArea>
      </BlogEntry>
    </Layout>
  );
};

export default PortfolioPostLayout;

export const portfolioQuery = graphql`
  query portfolioQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
        category
        description
        headerImg {
          publicURL
        }
        headerShadow
        headerBreadcrumbBg
        headerTextColor
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
