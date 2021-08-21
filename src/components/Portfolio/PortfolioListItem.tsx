import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Styles = styled.article`
  position: relative;
  transition: transform 0.2s;
  .thumb {
    border-radius: 1rem;
    /* border: 1px solid #ddd; */
    box-shadow: var(--pale-shadow);
    width: 100%;
    margin: 0;
    display: block;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .info {
    border-radius: 0.8rem;
    padding: 2rem;
    transform-origin: bottom left;
    &[data-short='true'] {
      color: #202020;
      position: static;
      text-shadow: none;
      padding-top: 1rem;
      padding: 1.8rem 1rem;
      h2 {
        font-size: 2rem;
      }
      span {
        margin-bottom: 0;
      }
    }
  }
  span {
    display: block;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 1em;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-top: 0;
    letter-spacing: -0.75px;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 0;
    font-family: 'Work sans', sans-serif;
    font-size: 1.5rem;
    /* max-width: 50ch; */
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    .thumb {
      transform: translateY(-2px);
      box-shadow: var(--hover-shadow);
    }
    .info {
      animation: pulse 1s infinite;
    }
  }
  @keyframes pulse {
    0% {
      transform: translateY(0);
    }
    33% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const PortfolioListItem = ({
  description = '',
  industry = '',
  title = '',
  tags = [],
  thumbnail,
  isShort = false,
  slug,
  category,
}) => {
  const gatsbyImageData = getImage(thumbnail);
  return (
    <Styles>
      <Link to={slug} state={{ from: category }}>
        {gatsbyImageData ? (
          <GatsbyImage className="thumb" image={gatsbyImageData} alt="" />
        ) : (
          <img src={thumbnail.publicURL} className="thumb" alt="" />
        )}
      </Link>
      <div className="info" data-short={isShort}>
        <Link to={slug} state={{ from: category }}>
          <h2>{title}</h2>
          {industry && <span>{industry}</span>}
          {tags && <span>{tags.join(' • ')}</span>}
          {!isShort && description && <p>{description}</p>}
        </Link>
      </div>
    </Styles>
  );
};

export default PortfolioListItem;
