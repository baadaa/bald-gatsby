import * as React from 'react';
import styled from 'styled-components';
import BaldBackgroundSection from '../components/BaldBackgroundSection';
import LogoAnimation from '../components/LogoAnimation/LogoAnimation';
import {
  IconGitHub,
  IconPhone,
  IconMail,
  IconLinkedIn,
} from '../components/Icons';
import Layout from '../components/layout';
import Seo from '../components/seo';

const contactList = [
  {
    icon: <IconPhone />,
    link: 'tel:3473618412',
    label: '(347) 361-8412',
  },
  {
    icon: <IconMail />,
    link: 'mailto:hello@bald.design',
    label: 'hello@bald.design',
  },
  {
    icon: <IconGitHub />,
    link: 'https://github.com/baadaa',
    label: '@baadaa',
  },
  {
    icon: <IconLinkedIn />,
    link: 'https://www.linkedin.com/in/bumhan/',
    label: '/in/bumhan',
  },
];

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
  }
  svg {
    width: 2rem;
    margin-right: 0.5rem;
    height: 2rem;
  }
`;
const ContactPage = () => (
  <Layout isFullWidth>
    <Seo title="Contact" />
    <HeroArea>
      <LogoAnimation size="8rem" logoOnly noMargin />
      <h1 style={{ marginTop: '.5em', marginBottom: '.2em' }}>
        <strong>Hello</strong> there!
      </h1>
      <p>Don't hesitate to reach out</p>
      <div className="contact">
        {contactList.map((item, index) => (
          <a key={`contact${index}`} href={item.link}>
            {item.icon}
            {item.label}
          </a>
        ))}
      </div>
    </HeroArea>
  </Layout>
);

export default ContactPage;
