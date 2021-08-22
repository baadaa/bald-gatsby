import React from 'react';
import { graphql } from 'gatsby';

import PortfolioList from '../../components/Portfolio/PortfolioList';

const CaseStudyPage = ({ data: { allMdx } }) => {
  const workItems = allMdx.edges.map((edge) => {
    const { frontmatter } = edge.node;
    return {
      category: frontmatter.category,
      industry: frontmatter.industry,
      slug: frontmatter.slug,
      thumbnail: frontmatter.thumbnail,
      title: frontmatter.title,
      description: frontmatter.description,
    };
  });
  return <PortfolioList category="caseStudy" workItems={workItems} />;
};

export default CaseStudyPage;

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___order, order: ASC }
      filter: {
        frontmatter: { type: { eq: "work" }, category: { eq: "caseStudy" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            category
            industry
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
