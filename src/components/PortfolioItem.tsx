import React from 'react';
import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

type WorkItemProps = {
  company?: string;
  description?: string;
  title?: string;
  tags?: Array<string>;
  industry?: string;
  image: string;
  slug: string;
};
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
      rgba(0, 0, 0, 0.5) 66%
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
      @media screen and (max-width: 640px) {
        color: #202020;
        position: static;
        background: transparent;
        text-shadow: none;
        padding-top: 1rem;
        padding: 1rem;
        h2 {
          font-size: 1.7rem;
        }
        span {
          margin-bottom: 0;
        }
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
    font-size: 2.2rem;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 0;
    font-size: 1.4rem;
    max-width: 50ch;
  }
  &:hover {
    img {
      box-shadow: var(--hover-shadow);
    }
    transform: translateY(-2px);
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

const WorkItem: React.FC<WorkItemProps> = ({
  company = '',
  description = '',
  industry = '',
  title = '',
  tags = [],
  image,
  slug,
}) => (
  <WorkItemStyle>
    <Link to={slug}>
      <img src={image} alt={`${company}: ${description}`} />
    </Link>
    <div className="info" data-short={!company}>
      <h2>{company || title}</h2>
      {industry && <span>{industry}</span>}
      {tags && <span>{tags.join(' • ')}</span>}
      {description && <p>{description}</p>}
    </div>
  </WorkItemStyle>
);

export default WorkItem;
