import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = ({ data: { allMdx } }) => {
  const posts = allMdx.edges.map((edge) => edge.node);
  console.log(posts);
  return (
    <Layout>
      <Seo title="Blog" />
      <h1>Blog</h1>
      {posts.map((post) => {
        const image = getImage(post.frontmatter.headerImg);
        return (
          <article key={post.id}>
            <Link to={post.frontmatter.slug}>
              {post.frontmatter.headerImg.chidImageSharp ? (
                <GatsbyImage image={image} alt="" />
              ) : (
                <img src={post.frontmatter.headerImg.publicURL} alt="" />
              )}
            </Link>
            <Link to={post.frontmatter.slug}>
              <h3>{post.frontmatter.title}</h3>
            </Link>
            <Link to={post.frontmatter.slug}>
              <time datatime={post.frontmatter.date}>
                {post.frontmatter.date}
              </time>
            </Link>
            <ul>
              {post.frontmatter.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </article>
        );
      })}
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
                  width: 1200
                  placeholder: BLURRED
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
