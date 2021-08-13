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

  const portfolioQuery = await graphql(`
    query {
      allMdx(
        sort: { fields: frontmatter___order, order: ASC }
        filter: { frontmatter: { type: { eq: "work" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              order
              category
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

  if (blogQuery.errors || portfolioQuery.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const blogPosts = blogQuery.data.allMdx.edges;
  const workPosts = portfolioQuery.data.allMdx.edges;
  blogPosts.forEach(({ node, next, previous }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve('./src/components/Blog/BlogPostLayout.tsx'),
      context: { id: node.id, next, previous },
    });
  });

  workPosts.forEach(({ node, next, previous }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(
        './src/components/Portfolio/PortfolioPostLayout.tsx'
      ),
      context: { id: node.id, next, previous },
    });
  });
};
