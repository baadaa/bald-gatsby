import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import BaldBackgroundSection from '../components/BaldBackgroundSection';
import LogoAnimation from '../components/LogoAnimation/LogoAnimation';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { contactList } from '../content/page-content/contactList';

const HeroArea = styled(BaldBackgroundSection)`
  height: calc(100vh - var(--nav-height));
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  .contact {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-left: 0.5rem;
  }
  a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    padding: 0.4rem;
    font-size: 1.4rem;
    color: var(--cyan600);
    &:hover {
      text-decoration: underline;
    }
    &.resume {
      position: absolute;
      transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
      bottom: 3rem;
      display: block;
      padding: 1rem;
      text-align: center;
      border-radius: 3rem;
      width: 20rem;
      left: calc(50% - 10rem);
      background-color: var(--yellow500);
      color: var(--yellow900);
      &:hover {
        box-shadow: var(--base-shadow);
        transform: translateY(-2px);
        text-decoration: none;
        background-color: var(--yellow400);
      }
    }
  }
  svg {
    width: 2rem;
    margin-right: 0.5rem;
    height: 2rem;
  }
  p {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 768px) {
    p {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 480px) {
    p {
      font-size: 1.5rem;
    }
  }
`;
const ContactPage = () => (
  <Layout isFullWidth>
    <Seo
      title="B | Contact"
      description="Always open to new ideas. Let us connect."
      meta={[
        {
          property: `og:image`,
          content: 'https://bald.design/contact-og-image.jpg',
        },
      ]}
    />
    <HeroArea>
      <LogoAnimation size="8rem" logoOnly noMargin />
      <h1 style={{ marginTop: '.5em', marginBottom: '.2em' }}>
        <strong>Hello</strong> there!
      </h1>
      <p>Don't hesitate to reach out.</p>
      <div className="contact">
        {contactList.map((item, index) => (
          <a key={`contact${index}`} href={item.link}>
            {item.icon}
            {item.label}
          </a>
        ))}
      </div>
      <Link className="resume" to="/resume">
        Looking for a resume?
      </Link>
    </HeroArea>
  </Layout>
);

export default ContactPage;
