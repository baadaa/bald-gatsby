import React from 'react';
import BackgroundImage from 'gatsby-background-image';

import { graphql, useStaticQuery } from 'gatsby';

const BaldBackgroundSection = ({ className = '', children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "baldie.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor="#fff"
    >
      {children}
    </BackgroundImage>
  );
};

export default BaldBackgroundSection;
