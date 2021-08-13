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

const BlogPostLayout = ({ data: { mdx }, pageContext }) => {
  const { body } = mdx;
  const { previous, next } = pageContext;
  const { date, tags, title, headerImg, headerBg, headerTextColor } =
    mdx.frontmatter;
  const prevArticle = previous && previous.frontmatter;
  const nextArticle = next && next.frontmatter;
  return (
    <Layout isFullWidth>
      <Seo title={title} />
      <PostHeroImgSection
        headerImg={headerImg.publicURL}
        headerTextColor={headerTextColor}
        style={{
          backgroundPosition: 'center bottom',
          backgroundSize: '562px 315px',
          backgroundColor: headerBg,
        }}
      >
        <Link to="/blog">Blog</Link>
        <h1 style={{ width: '100%' }}>{title}</h1>
        <time dateTime={date}>{date}</time>
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
              <Link to={prevArticle.slug} className="previous">
                {truncateStr(prevArticle.title, 50)}
              </Link>
            ) : (
              ''
            )}
            {nextArticle ? (
              <Link to={nextArticle.slug} className="next">
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

export default BlogPostLayout;

export const blogQuery = graphql`
  query blogQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
        description
        headerImg {
          publicURL
        }
        headerBg
        headerTextColor
      }
    }
  }
`;
