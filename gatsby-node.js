const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

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
  blogPosts.forEach(({ node, next, previous }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve('./src/components/BlogPostLayout.tsx'),
      context: { id: node.id, next, previous },
    });
  });
};
