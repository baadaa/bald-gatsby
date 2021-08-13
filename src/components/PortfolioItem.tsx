import React from 'react';
import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const WorkItemStyle = styled.article`
  position: relative;
  transition: transform 0.2s;
  img {
    border-radius: 1rem;
    width: 100%;
    margin: 0;
    display: block;
    transition: box-shadow 0.2s;
  }
  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    border-radius: 0.8rem;
    padding: 2rem;
    padding-top: 5rem;
    color: #fff;
    transform-origin: bottom left;
    /* background: rgb(0, 0, 0); */
    background: linear-gradient(
      900deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.75) 66%
    );
    text-shadow: 0 1px 7px rgba(0, 0, 0, 0.5);
    @media screen and (max-width: 480px) {
      p {
        display: none;
      }
      span {
        margin-bottom: 0;
      }
    }
    &[data-short='true'] {
      /* @media screen and (max-width: 640px) { */
      color: #202020;
      position: static;
      background: transparent;
      text-shadow: none;
      padding-top: 1rem;
      padding: 1rem;
      h2 {
        font-size: 2rem;
      }
      span {
        margin-bottom: 0;
      }
      /* } */
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
    font-size: 3.1rem;
    font-weight: 500;
    margin-top: 0;
    letter-spacing: -0.75px;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 0;
    font-size: 1.4rem;
    max-width: 50ch;
  }
  &:hover {
    transform: translateY(-2px) scale(1.015);
    .info > * {
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

const WorkItem = ({
  description = '',
  industry = '',
  title = '',
  tags = [],
  thumbnail,
  isShort = false,
  slug,
}) => {
  const gatsbyImageData = getImage(thumbnail);
  return (
    <WorkItemStyle>
      <Link to={slug}>
        {gatsbyImageData ? (
          <GatsbyImage image={gatsbyImageData} alt="" />
        ) : (
          <img src={thumbnail.publicURL} alt="" />
        )}
      </Link>
      <div className="info" data-short={isShort}>
        <h2>{title}</h2>
        {industry && <span>{industry}</span>}
        {tags && <span>{tags.join(' • ')}</span>}
        {!isShort && description && <p>{description}</p>}
      </div>
    </WorkItemStyle>
  );
};

export default WorkItem;
