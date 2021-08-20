import * as React from 'react';
import styled from 'styled-components';

import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import {
  IconGitHub,
  IconPhone,
  IconMail,
  IconLinkedIn,
} from '../components/Icons';

const ResumeStyles = styled.div`
  display: flex;
  padding-bottom: 6rem;
  p,
  ul {
    color: #444;
  }
  .impression {
    --headshot-size: 20rem;
    margin-right: calc(var(--headshot-size) / 3);
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
    @media screen and (max-width: 768px) {
      margin-right: calc(var(--headshot-size) / 5);
    }
    @media screen and (max-width: 640px) {
      margin-right: calc(var(--headshot-size) / 5.5);
      .contact svg {
        display: none;
      }
    }
    @media screen and (max-width: 480px) {
      .contact {
        display: none;
      }
    }
  }
  .intro a.download {
    background-color: var(--yellow500);
    color: var(--yellow900);
    font-size: 1.4rem;
    letter-spacing: -0.05rem;
    padding: 0.7rem 1.8rem;
    display: inline-block;
    border-radius: 4rem;
    transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
    &:hover {
      text-decoration: none;
      transform: translateY(-2px);
      box-shadow: var(--base-shadow);
      background-color: var(--yellow400);
    }
  }
  .headshot {
    border-radius: var(--headshot-size);
    width: var(--headshot-size);
    height: var(--headshot-size);
    display: block;
    margin-bottom: calc(var(--headshot-size) / 7);
    @media screen and (max-width: 1200px) {
      --headshot-size: 15vw;
    }
    @media screen and (max-width: 768px) {
      --headshot-size: 12rem;
    }
    @media screen and (max-width: 640px) {
      --headshot-size: 10rem;
    }
  }
  .mainColumn {
    flex: 1;
    padding-top: 2rem;
    a {
      color: var(--cyan800);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  h1 {
    margin-bottom: 0.5em;
  }
  h2 {
    font-size: 1.2rem;
    margin: 0 0 3rem;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    font-weight: 700;
    color: var(--cyan800);
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--cyan100);
  }
  h3,
  h4 {
    margin: 0;
  }
  h3 {
    font-size: 1.7rem;
    color: var(--cyan800);
    font-weight: 600;
    margin-bottom: 0.65em;
  }
  h4 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 0.5em;
  }
  h5,
  time {
    font-size: 1.3rem;
    color: #888;
    font-weight: 400;
  }
  h5 {
    margin: 0 0 0.55em 0;
    color: var(--cyan800);
    &::before {
      content: '(';
    }
    &::after {
      content: ')';
    }
  }
  p {
    max-width: 65rem;
  }
  ul li {
    letter-spacing: -0.025em;
    font-size: 1.5rem;
    margin-bottom: 0.33em;
  }
  .intro {
    margin-bottom: 4rem;
  }
  .period + .period {
    margin-top: 4rem;
  }
  .education .period .overview {
    flex-basis: 34rem;
  }
  .education .details p {
    max-width: 33rem;
  }
  .period {
    display: flex;
    align-items: flex-start;
    margin-top: 2rem;
    .overview {
      flex-basis: 24rem;
    }
    .details {
      flex: 1;
    }
    @media screen and (max-width: 900px) {
      display: block;
      h3 {
        margin-bottom: 1rem;
      }
      h4,
      h5 {
        display: inline-block;
      }
      h4 {
        margin-right: 0.5rem;
      }
      time {
        display: block;
        margin-bottom: 1.2rem;
      }
    }
  }
  .box-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 550px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  h6 {
    font-weight: 600;
    font-size: 1.6rem;
    color: var(--cyan800);
    margin: 0 0 0.5em;
  }
  section + section {
    margin-top: 6rem;
  }
  @media screen and (max-width: 768px) {
    h1 {
      text-align: left;
    }
  }
  @media screen and (max-width: 480px) {
    .mainColumn {
      padding-top: 1rem;
    }
    display: block;
  }
`;
const experiences = [
  {
    title: 'Design Director',
    company: 'Homepoint',
    industry: 'Financial Services',
    time: '2020–Present',
    link: 'https://homepointfinancial.com',
    summary:
      'Responsible for ensuring consistent brand experience via visual, motion, verbal, and UX design. Collaborate with marketing, engineering, and product design teams to  develop solutions that drive measurable results. Guide direct reports and manage external vendors. Accomplishments include:',
    bullets: [
      'Leading the corporate rebrand and developing the branding strategy',
      'Outlining brand guidelines and developing the tooling in React/Gatsby',
      'Designing, developing, and launching the new website in React/Next.JS',
      'Prototyping and developing various proof-of-concept applications in React',
      'Creating a roadmap and leading the UX design for major B2B application',
    ],
  },
  {
    title: 'Brand Designer',
    company: 'Updater Inc.',
    industry: 'Software • IT',
    time: '2018–2020',
    link: 'https://updater.com',
    summary:
      'Manage all brand communications, creative-direct and execute a variety of marketing materials, and participate in UI/UX design of the product features. Collaborate with engineering and product teams. Accomplishments include:',
    bullets: [
      'Developing branding strategy, visual identity, and design system',
      'Establishing the new design system in React',
      'Designing, developing, and launching the new website in custom stack',
      'Designing and developing internal tools for marketing team in React',
      'Leading several major feature releases as a product designer',
    ],
  },
  {
    title: 'Digital Solutionist',
    company: 'The Moderns Ltd.',
    industry: 'Branding Agency',
    time: '2013–2016',
    link: null,
    summary:
      'Project-manage, develop and execute digital & non-digital design solutions to various branding, communications, and marketing challenges. Manage client relations and help organize brand workshops. Responsibilities include:',
    bullets: [
      'Developing brand strategy and visual identity systems',
      'Creating communication design and motion graphics',
      'Lead UI/UX design and create wireframes',
      'Develop front-end/digital deliverable',
    ],
  },
  {
    title: 'Lead Designer/Developer',
    company: 'Young & Rubicam Group',
    industry: 'Advertising Agency',
    time: '2009–2013',
    link: null,
    summary:
      'Provide creative and technical solutions for advertising & marketing via various channels of print, interactive, and motion media as a team lead. Collaborate with other teams and functions. Responsibilities include:',
    bullets: [
      'Visual identity systems',
      'Typography-based designs and editorial layout',
      'New business pitch materials, ad materials for print/digital/outdoor media',
      'Custom digital deliverables, including motion, websites, ads, and emails',
    ],
  },
];
const education = [
  {
    major: 'Communications Design',
    school: 'Pratt Institute',
    degree: 'M.S.',
    time: '2010–2013',
    summary:
      'Graduated with Distinction, with focus on digital design and communications.',
  },
  {
    major: 'Clinical & Counseling Psychology',
    school: 'Korea Univeristy',
    degree: 'M.A. (incomplete)',
    time: '2003–2004',
    summary:
      'One year coursework completed. Participated in a research program as a co-author.',
  },
  {
    major: 'Linguistics & Psychology',
    school: 'Korea Univeristy',
    degree: 'B.A.',
    time: '1999–2003',
    summary: 'Graduaded Cum Laude, double-major.',
  },
];
const skills = [
  {
    category: 'Visual Design',
    items:
      'Branding & identity, motion design, UX/UI, typography, data visualization',
  },
  {
    category: 'Frontend Code',
    items:
      'JavaScript/TypeScript, React/Gatsby/Next.JS, Node.JS tooling, CSS-in-JS, HTML/CSS',
  },
  {
    category: 'Software Tools',
    items:
      'Adobe CC, Figma, Sketch, Principle, Git, Visual Studio Code, command-line shell',
  },
  {
    category: 'Soft Skills',
    items:
      'Verbal & written communications, constant learning, team-first mindset',
  },
];
const misc = [
  {
    category: 'Millitary Disciplined',
    items:
      'Served in ROK Army. Result-oriented, team-first, and stress-tested. Has an ego as tiny as an ant.',
  },
  {
    category: 'Veteran Translator',
    items:
      'Skilled communicator with cross-cultural and multidisciplinary perspectives',
  },
  {
    category: 'Problem Solving',
    items:
      'Calm disposition and detail-orientation while investigating solutions under stress',
  },
  {
    category: 'Other Titles',
    items:
      'Husband, dad, marathoner, black belt, agnostic, omnivore, guitar/piano lover',
  },
];
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
const ResumePage: React.FC = () => (
  <Layout>
    <Seo title="Resume" />
    <ResumeStyles>
      <div className="impression">
        <StaticImage
          src="../images/bumhan_yu.jpg"
          quality={70}
          alt="Bumhan Yu"
          objectFit="cover"
          width={200}
          height={200}
          className="headshot"
        />
        <div className="contact">
          {contactList.map((item, index) => (
            <a key={`contact${index}`} href={item.link}>
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mainColumn">
        <section className="intro">
          <h1>
            Bumhan &ldquo;<strong>B</strong>&rdquo; Yu
          </h1>
          <p>
            Designer who writes front-end code—with a career built around
            psychology, communications, design, and technology. Big believer in
            design thinking and scientific methods. Experienced across
            advertising, branding, and software, and financial industries.
          </p>
          <a className="download" href="/resume_bumhan_yu_2021.pdf">
            Download resume as PDF
          </a>
          {/* <p>
            Passionate about creating excellent human experience and delivering
            measurable results. Genuinely interested in human connection and
            communication through diverse channels. Always eager to keep
            learning and growing.
          </p> */}
        </section>
        <section className="experience">
          <h2>Experience</h2>
          {experiences.map((experience, index) => (
            <div className="period" key={`exp${index}`}>
              <div className="overview">
                <h3>{experience.title}</h3>
                <h4>
                  {experience.link ? (
                    <a href={experience.link}>{experience.company}</a>
                  ) : (
                    experience.company
                  )}
                </h4>
                <h5>{experience.industry}</h5>
                <time>{experience.time}</time>
              </div>
              <div className="details">
                <p>{experience.summary}</p>
                <ul>
                  {experience.bullets.map((bullet, i) => (
                    <li key={`${index}${i}`}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
        <section className="education">
          <h2>Education</h2>
          {education.map((ed, index) => (
            <div className="period" key={`exp${index}`}>
              <div className="overview">
                <h3>{ed.major}</h3>
                <h4>
                  {ed.school}, <em>{ed.degree}</em>
                </h4>
                <time>{ed.time}</time>
              </div>
              <div className="details">
                <p>{ed.summary}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="skills">
          <h2>Skills &amp; Expertise</h2>
          <div className="box-wrapper">
            {skills.map((skill, index) => (
              <div className="box" key={`exp${index}`}>
                <h6>{skill.category}</h6>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="misc">
          <h2>miscellaneous</h2>
          <div className="box-wrapper">
            {misc.map((thing, index) => (
              <div className="box" key={`exp${index}`}>
                <h6>{thing.category}</h6>
                <p>{thing.items}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ResumeStyles>
  </Layout>
);

export default ResumePage;
