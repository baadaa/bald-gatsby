import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogListStyle = styled.div`
  --thumbnail-size: 13rem;
  article {
    display: flex;
    padding: 1.5rem 0;
    align-items: center;
    background-color: #fff;
    * {
      transition: transform 0.2s;
    }
    &:first-of-type {
      padding-top: 0;
    }
    &:hover > .thumbnail {
      transform: translateX(2px);
    }
    &:hover > .postInfo {
      transform: translateX(-2px);
    }
  }
  .thumbnail {
    width: var(--thumbnail-size);
    flex-basis: var(--thumbnail-size);
    height: var(--thumbnail-size);
    border: 1px solid #eee;
    img.notGatsby {
      flex-basis: var(--thumbnail-size);
      width: var(--thumbnail-size);
      height: var(--thumbnail-size);
      object-fit: cover;
      margin: 0;
    }
    margin-right: 2.7rem;
  }
  .postInfo {
    flex: 1;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  time {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    display: block;
    color: #666;
  }
  h3 {
    font-weight: 400;
    font-size: 2.2rem;
    line-height: 1.4;
    letter-spacing: -0.5px;
    margin-bottom: 0.2em;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  li {
    background-color: var(--cyan50);
    color: var(--cyan800);
    border: 1px solid var(--cyan200);
    font-size: 1rem;
    line-height: 1;
    margin-bottom: 0;
    font-weight: 400;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
  }
  li + li {
    margin-left: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    article {
      max-width: 550px;
      margin-left: auto;
      margin-right: auto;
    }
    ul {
      display: none;
    }
    time {
      margin-bottom: 0;
    }
    h3 {
      font-size: 2rem;
    }
    --thumbnail-size: 10rem;
  }
  @media screen and (max-width: 640px) {
    --thumbnail-size: 8rem;
    h3 {
      font-size: 1.6rem;
    }
  }
`;

const BlogPage = ({ data: { allMdx } }) => {
  const posts = allMdx.edges.map((edge) => edge.node);
  return (
    <Layout heading="Blog">
      <Seo title="Blog" />
      <BlogListStyle>
        {posts.map((post) => {
          const gatsbyImageData = getImage(post.frontmatter.headerImg);
          return (
            <article key={post.id}>
              <div className="thumbnail">
                <Link to={post.frontmatter.slug}>
                  {gatsbyImageData ? (
                    <GatsbyImage
                      image={gatsbyImageData}
                      alt=""
                      objectFit="cover"
                    />
                  ) : (
                    <img
                      className="notGatsby"
                      src={post.frontmatter.headerImg.publicURL}
                      alt=""
                    />
                  )}
                </Link>
              </div>
              <div className="postInfo">
                <Link to={post.frontmatter.slug}>
                  <h3>{post.frontmatter.title}</h3>
                </Link>
                <Link to={post.frontmatter.slug}>
                  <time dateTime={post.frontmatter.date}>
                    {post.frontmatter.date}
                  </time>
                </Link>
                <ul>
                  {post.frontmatter.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </BlogListStyle>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            tags
            headerImg {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  formats: AUTO
                  width: 600
                  aspectRatio: 1
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
            date(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`;
