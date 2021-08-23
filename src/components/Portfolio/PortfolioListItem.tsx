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
    display: inline-block;
    font-size: 1.2rem;
    /* text-transform: uppercase; */
    /* font-weight: 600; */
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
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;
  }
  span,
  li {
    font-size: 1rem;
    line-height: 1;
    text-transform: capitalize;
    padding: 0.4rem 0.8rem;
    background: var(--cyan50);
    color: var(--cyan800);
    border: 1px solid var(--cyan200);
    margin-top: 0.3rem;
    border-radius: 2rem;
  }
  li + li {
    margin-left: 0.5rem;
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
      animation: pulseSideways 1s infinite;
    }
  }
  @keyframes pulseSideways {
    0% {
      transform: translateX(0);
    }
    33% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
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
          {tags && (
            <ul>
              {tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
          )}
          {!isShort && description && <p>{description}</p>}
        </Link>
      </div>
    </Styles>
  );
};

export default PortfolioListItem;
