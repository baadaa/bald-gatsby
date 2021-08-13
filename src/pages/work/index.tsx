import React from 'react';
import { graphql } from 'gatsby';

import PortfolioLayout from '../../components/PortfolioLayout';

const CaseStudyPage = ({ data: { allMdx } }) => {
  const workItems = allMdx.edges.map((edge) => {
    const { frontmatter } = edge.node;
    return {
      category: frontmatter.category,
      slug: frontmatter.slug,
      thumbnail: frontmatter.thumbnail,
      title: frontmatter.title,
      description: frontmatter.description,
    };
  });
  return <PortfolioLayout category="Case Studies" workItems={workItems} />;
};

export default CaseStudyPage;

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___order, order: ASC }
      filter: {
        frontmatter: { type: { eq: "work" }, category: { eq: "case-study" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            category
            description
            thumbnail {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  formats: AUTO
                  width: 1200
                  height: 600
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
