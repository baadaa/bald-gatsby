import React from 'react';
import { graphql } from 'gatsby';

import PortfolioLayout from '../../components/PortfolioLayout';

const DesignSamplePage = ({ data: { allMdx } }) => {
  const workItems = allMdx.edges.map((edge) => {
    const { frontmatter } = edge.node;
    return {
      category: frontmatter.category,
      slug: frontmatter.slug,
      thumbnail: frontmatter.thumbnail,
      title: frontmatter.title,
      description: frontmatter.description,
      tags: frontmatter.tags,
    };
  });
  return <PortfolioLayout category="Design" workItems={workItems} />;
};

export default DesignSamplePage;
export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___order, order: ASC }
      filter: {
        frontmatter: { type: { eq: "work" }, category: { eq: "design" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            category
            description
            tags
            thumbnail {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  formats: AUTO
                  width: 884
                  height: 660
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`;
