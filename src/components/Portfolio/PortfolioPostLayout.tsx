import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Seo from '../seo';
import Layout from '../layout';
import { IconMouse } from '../Icons';
import {
  BlogEntry,
  PortfolioHeroSection,
  PostContentArea,
  LabelPill,
  PostNav,
} from '../UIElements';

import Claps from '../Claps/Claps';
import TotalClaps from '../Claps/TotalClaps';
import { truncateStr } from '../utils';

const getBreadcrumb = (fromPath, baseCategory) => {
  const parentPaths = {
    caseStudy: {
      path: '/work/',
      label: 'Case Studies',
    },
    design: {
      path: '/work/design/',
      label: 'Design Works',
    },
    dev: {
      path: '/work/dev/',
      label: 'Dev Works',
    },
    personal: {
      path: '/work/personal/',
      label: 'Personal Projects',
    },
  };
  if (
    !fromPath ||
    ['caseStudy', 'dev', 'design', 'personal'].indexOf(fromPath) === -1
  ) {
    return {
      breadcrumbPath: parentPaths[baseCategory].path,
      breadcrumbLabel: parentPaths[baseCategory].label,
    };
  }
  const breadcrumbPath =
    parentPaths[fromPath].path || parentPaths[baseCategory].path;
  const breadcrumbLabel =
    parentPaths[fromPath].label || parentPaths[baseCategory].label;
  return { breadcrumbPath, breadcrumbLabel };
};
const PortfolioPostLayout = ({
  data: { mdx, site },
  pageContext,
  location,
}) => {
  const { body } = mdx;
  const { siteUrl } = site.siteMetadata;
  const { previous, next } = pageContext;
  const from = location.state ? location.state.from : undefined;
  const { tags, title, category, description, headerImg, slug } =
    mdx.frontmatter;
  const ogImage = headerImg.publicURL.endsWith('svg')
    ? 'https://bald.design/home-og-image.jpg'
    : `${siteUrl}${headerImg.publicURL}`;
  const baseCategory = category[0];
  const { breadcrumbPath, breadcrumbLabel } = getBreadcrumb(from, baseCategory);
  const prevArticle = previous && previous.frontmatter;
  const nextArticle = next && next.frontmatter;
  const gatsbyImageData = getImage(headerImg);

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
      <PortfolioHeroSection>
        <div className="text-area">
          <Link to={breadcrumbPath}>{breadcrumbLabel}</Link>
          <h1>{title}</h1>
          <p>{description}</p>
          <ul className="post-tags">
            {tags.map((tag, index) => (
              <LabelPill key={index}>{tag}</LabelPill>
            ))}
          </ul>
          <TotalClaps align="left" slug={slug} />
          <button
            className="scrollPrompt"
            type="button"
            onClick={() => {
              document.querySelector('#entryArea').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start',
              });
            }}
          >
            <IconMouse width="20" height="20" />
            Scroll down
            <br />
          </button>
        </div>
        <div className="image-area">
          {gatsbyImageData ? (
            <GatsbyImage
              image={gatsbyImageData}
              alt={title}
              className="gatsby-img"
              objectFit="cover"
            />
          ) : (
            <img
              src={headerImg.publicURL}
              className="non-gatsby-img"
              alt={title}
              loading="lazy"
            />
          )}
        </div>
      </PortfolioHeroSection>
      <BlogEntry id="entryArea">
        <PostContentArea>
          <MDXRenderer>{body}</MDXRenderer>
          <Claps slug={slug} />
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
        slug
        category
        description
        headerImg {
          publicURL
          childImageSharp {
            gatsbyImageData(
              formats: AUTO
              layout: CONSTRAINED
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
