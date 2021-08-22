import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import BaldBackgroundSection from '../components/BaldBackgroundSection';
import LogoAnimation from '../components/LogoAnimation/LogoAnimation';
import Curtain from '../components/IntroElements/Curtain';
import { flexUnit } from '../components/utils';

import Layout from '../components/layout';
import Seo from '../components/seo';
import {
  IconScrollDown,
  IconFigma,
  IconSketch,
  IconPrinciple,
  IconPhotoshop,
  IconIllustrator,
  IconInDesign,
  IconAfterEffects,
  IconLightroom,
  IconPencil,
  IconCutter,
  IconReact,
  IconGatsby,
  IconNextjs,
  IconHtml,
  IconCss,
  IconJs,
  IconTs,
  IconGit,
  IconVscode,
  IconIterm,
  IconAdvertising,
  IconBranding,
  IconDesignThinking,
  IconDev,
  IconDevRed,
  IconDirection,
  IconMotion,
  IconProduct,
  IconStrategy,
  IconTypography,
  IconPsychology,
  IntroShoes,
  IconLingo,
  IconUx,
  IntroEducation,
  IntroProficiency,
  IntroCode,
  IntroDesign,
  IntroCats,
} from '../components/Icons';
import {
  IntroBox,
  BacksideBullets,
  BacksidePrefers,
  LogoCollage,
} from '../components/IntroElements/IntroBox';

const industryBullets = [
  {
    icon: IconDirection,
    main: 'Design Direction',
  },
  {
    icon: IconBranding,
    main: 'Brand Strategy & Identity',
  },
  {
    icon: IconAdvertising,
    main: 'Communications Design',
  },
  {
    icon: IconProduct,
    main: 'Product & UI/UX',
  },
  {
    icon: IconDevRed,
    main: 'Front-end Engineering',
  },
];
const proficiencyBullets = [
  {
    icon: IconDesignThinking,
    main: 'Design Concept & Strategy',
  },
  {
    icon: IconTypography,
    main: 'Typography',
  },
  {
    icon: IconMotion,
    main: 'Motion Design',
  },
  {
    icon: IconUx,
    main: 'UX/UI & Prototyping',
  },
  {
    icon: IconDev,
    main: 'Front-end Development',
  },
];
const educationBullets = [
  {
    icon: IconStrategy,
    main: 'Communications Design',
    sub: 'M.S.',
  },
  {
    icon: IconPsychology,
    main: 'Clinical Psychology',
    sub: 'M.A. dropout',
  },
  {
    icon: IconLingo,
    main: 'Linguistics • Psychology',
    sub: 'B.A.',
  },
];
const designLogos = [
  { svg: IconFigma, type: 'digital' },
  { svg: IconSketch, type: 'digital' },
  { svg: IconPrinciple, type: 'digital' },
  { svg: IconPhotoshop, type: 'digital' },
  { svg: IconIllustrator, type: 'digital' },
  { svg: IconInDesign, type: 'digital' },
  { svg: IconAfterEffects, type: 'digital' },
  { svg: IconLightroom, type: 'digital' },
  { svg: IconPencil, type: 'analog', isPencil: true },
  { svg: IconCutter, type: 'analog' },
];
const devLogos = [
  { svg: IconReact, type: 'react' },
  { svg: IconGatsby, type: 'gatsby' },
  { svg: IconNextjs, type: 'next' },
  { svg: IconJs, type: 'js' },
  { svg: IconTs, type: 'js' },
  { svg: IconHtml, type: 'html' },
  { svg: IconCss, type: 'html' },
  { svg: IconGit, type: 'git' },
  { svg: IconVscode, type: 'vscode' },
  { svg: IconIterm, type: 'iterm' },
];
const preferenceItems = [
  [
    { thing: 'space', preferred: true },
    { thing: 'tab', preferred: false },
  ],
  [
    { thing: 'rebase', preferred: false },
    { thing: 'merge', preferred: true },
  ],
  [
    { thing: 'Star Wars', preferred: true },
    { thing: 'Star Trek', preferred: false },
  ],
  [
    { thing: 'atheist', preferred: false },
    { thing: 'agnostic', preferred: true },
  ],
  [
    { thing: 'classicism', preferred: false },
    { thing: 'modernism', preferred: true },
  ],
  [
    { thing: 'dog', preferred: false },
    { thing: 'cat', preferred: true },
  ],
  [
    { thing: 'Helvetica', preferred: false },
    { thing: 'Univers', preferred: true },
  ],
  [
    { thing: 'work', preferred: false },
    { thing: 'family', preferred: true },
  ],
  [
    { thing: 'Rogers', preferred: true },
    { thing: 'Skinner', preferred: false },
  ],
  [
    { thing: 'Moleskine', preferred: true },
    { thing: 'iPad', preferred: false },
  ],
];
const HeroArea = styled(BaldBackgroundSection)`
  height: calc(100vh - var(--nav-height));
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const IntroCopy = styled.div`
  ${flexUnit(3, 30, 60, 'vw', 'font-size')}
  scroll-margin-top: var(--nav-height);
  position: relative;
  padding: 2.5em 2rem;
  box-sizing: border-box;
  background: #333;
  text-align: center;
  color: #fff;
  h3,
  h5,
  h1 {
    max-width: 500px;
    margin: 0 auto;
  }
  h3 {
    ${flexUnit(3, 30, 60, 'vw', 'font-size')}
    font-weight: 200;
    margin-bottom: 0.5em;
  }
  h5 {
    ${flexUnit(2, 20, 40, 'vw', 'font-size')}
    font-weight: 400;
    margin-bottom: 0.7em;
  }
  h1 {
    ${flexUnit(1.8, 18, 36, 'vw', 'font-size')}
    font-family: Georgia, serif;
    line-height: 1.5;
    font-weight: 200;
    color: #888;
    max-width: 13em;
    margin-bottom: 1em;
  }
  a.resume {
    background: #fff;
    ${flexUnit(1.3, 13, 26, 'vw', 'font-size')}
    letter-spacing: -.02em;
    padding: 1em 2em;
    color: #202020;
    text-decoration: none;
    border-radius: 3em;
    box-sizing: border-box;
    transition: background 0.2s;
    &:hover {
      background: var(--yellow500);
    }
  }
`;

const ScrollDown = styled.button`
  width: 3rem;
  height: 3rem;
  padding: 0;
  border: none;
  display: inline-flex;
  outline: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
  top: -1.5em;
  left: calc(50% - 1.5rem);
  opacity: 0.85;
  animation: pulseScale 3s infinite;
  &:hover {
    animation-play-state: initial;
  }
  @keyframes pulseScale {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const IntroBoxContainer = styled.section`
  background: #282828;
  display: flex;
  flex-wrap: wrap;
`;
const IndexPage = () => {
  const [curtainIsDown, setCurtainIsDown] = useState(false);
  return (
    <Layout isFullWidth>
      <Seo
        title="B | About"
        description="Bumhan Yu, aka B as in Bald, is a designer and developer based in New York City."
        meta={[
          {
            property: `og:image`,
            content: 'https://bald.design/home-og-image.jpg',
          },
        ]}
      />
      <HeroArea>
        <LogoAnimation
          size="8rem"
          click={() => setCurtainIsDown(!curtainIsDown)}
        />
      </HeroArea>
      <IntroCopy id="introCopyBlock">
        <ScrollDown
          onClick={() => {
            document.querySelector('#introCopyBlock').scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'start',
            });
          }}
        >
          <IconScrollDown width="3rem" height="3rem" />
        </ScrollDown>
        <h3>
          Hello, I am <strong>B</strong>.
        </h3>
        <h5>Nice to meet you.</h5>
        <h1>
          I am a design director and front-end engineer with backgrounds in
          psychology, linguistics, and branding.
        </h1>
        <Link className="resume" to="/resume">
          View Resume
        </Link>
      </IntroCopy>
      <IntroBoxContainer>
        <IntroBox
          icon={IntroShoes}
          width={2}
          order={0}
          backsideBg="#475f7d"
          mobileOrder={5}
          label="Industry Experience"
        >
          {industryBullets.map((item, index) => (
            <BacksideBullets
              key={`exp${index}`}
              icon={item.icon}
              main={item.main}
              hasTightGap
            />
          ))}
        </IntroBox>
        <IntroBox
          icon={IntroEducation}
          width={1}
          order={1}
          backsideBg="#334d5c"
          label="Education"
        >
          {educationBullets.map((item, index) => (
            <BacksideBullets
              key={`ed${index}`}
              icon={item.icon}
              main={item.main}
              sub={item.sub}
            />
          ))}
        </IntroBox>
        <IntroBox
          icon={IntroProficiency}
          width={1}
          order={3}
          backsideBg="#20575A"
          label="Proficiency"
        >
          {proficiencyBullets.map((item, index) => (
            <BacksideBullets
              key={`exp${index}`}
              icon={item.icon}
              main={item.main}
              hasTightGap
            />
          ))}
        </IntroBox>
        <IntroBox
          icon={IntroCode}
          width={1}
          order={7}
          color="#11342d"
          backsideBg="#001122"
          label="Dev"
        >
          <LogoCollage logos={devLogos} />
        </IntroBox>
        <IntroBox
          icon={IntroDesign}
          width={1}
          order={9}
          backsideBg="#00373A"
          label="Design"
        >
          <LogoCollage logos={designLogos} />
        </IntroBox>
        <IntroBox
          icon={IntroCats}
          width={2}
          order={11}
          backsideBg="#54534B"
          label="Preferences"
        >
          <BacksidePrefers items={preferenceItems} />
        </IntroBox>
      </IntroBoxContainer>
      <Curtain
        isDown={curtainIsDown}
        toggle={() => setCurtainIsDown(!curtainIsDown)}
      />
    </Layout>
  );
};

export default IndexPage;
