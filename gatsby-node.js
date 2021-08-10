const path = require('path');

exports.createPates = async ({ graphql, actions, reporter }) => {
  const { createPates } = actions;

  const blogQuery = await graphql(`
    query {
      allMdx(
        sort: { fields: frontmatter___title }
        filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
            }
          }
          next {
            frontmatter {
              title
              slug
            }
          }
          previous {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);

  const blogPosts = blogQuery.data.allMdx.edges;
};
