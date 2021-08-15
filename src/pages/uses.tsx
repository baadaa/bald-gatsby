import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Seo from '../components/seo';

const UsesStyles = styled.div`
  margin-bottom: 8rem;
  position: relative;
  ul {
    position: sticky;
    background-color: #fff;
    top: var(--nav-height);
    display: flex;
    list-style: none;
    margin: 0 0 3rem 0;
    padding: 2rem 0 1rem;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 1;
  }
  li a {
    font-size: 1.3rem;
    color: inherit;
    color: var(--cyan800);
    text-decoration: none;
    display: block;
    line-height: 1;
    border-radius: 3rem;
    background-color: var(--cyan100);
    padding: 0.5rem 1.5rem;
    transition: transform 0.2s, background-color 0.2s;
    &:hover {
      transform: translateY(-2px);
      background-color: var(--cyan200);
    }
  }
  li + li {
    margin-left: 0.6rem;
  }
  section {
    scroll-margin-top: calc(var(--nav-height) + 6rem);
  }
  section + section {
    margin-top: 4rem;
  }
  .sub {
    display: flex;
  }
  .sub + .sub {
    margin-top: 3rem;
  }
  .sub-heading {
    font-weight: 600;
    flex-basis: 130px;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
  h2 {
    flex-basis: 20%;
    margin: 0 0 2rem;
    font-size: 2.2rem;
    padding-bottom: 1rem;
    position: sticky;
    top: calc(var(--nav-height) + 6rem);
    font-weight: 400;
    background-color: #fff;
    color: var(--cyan800);
    border-bottom: 2px solid var(--cyan100);
  }
  h3,
  p {
    margin: 0;
  }
  h3 {
    font-size: 1.7rem;
    font-weight: 400;
    margin-bottom: 0.75rem;
    span {
      font-style: italic;
      font-size: 1.4rem;
      color: #888;
    }
  }
  p {
    font-size: 1.4rem;
    color: #555;
  }
  h3 + h3,
  p + h3 {
    margin-top: 1.4rem;
  }
  a {
    color: var(--cyan600);
    transition: transform 0.2s;
    display: block;
    &:hover {
      transform: scale(1.02);
    }
  }
  @media screen and (max-width: 768px) {
    section {
      display: block;
    }
  }
  @media screen and (max-width: 550px) {
    .sub {
      display: block;
    }
    .sub-heading {
      display: block;
      margin-bottom: 1.5rem;
    }
  }
`;
const UsesPage: React.FC = () => (
  <Layout heading="Uses">
    <Helmet>
      <style>
        {`html {
            scroll-behavior: smooth;
          }`}
      </style>
    </Helmet>
    <Seo title="Uses" />
    <UsesStyles>
      <ul>
        <li>
          <a href="#hw">Hardware</a>
        </li>
        <li>
          <a href="#sw">Software</a>
        </li>
        <li>
          <a href="#peripheral">Peripheral</a>
        </li>
        <li>
          <a href="#lang">Languages</a>
        </li>
      </ul>
      <section id="hw">
        <h2>Hardware</h2>
        <section className="sub">
          <span className="sub-heading">Computer</span>
          <div className="content">
            <h3>
              MacBook Pro 16" 2019 <span>(Catalina 10.15.7)</span>
            </h3>
            <p>Primary laptop for design and development work</p>
            <h3>
              MacBook Pro 17" 2016 <span>(Catalina 10.15.7)</span>
            </h3>
            <p>Secondary laptop for personal documents and archive</p>
            <h3>
              HP XYX <span>(Windows 10.15.7)</span>
            </h3>
            <p>Company-issued laptop for Windows tasks</p>
            <h3>
              Pinebook Pro <span>(Linux Debian)</span>
            </h3>
            <p>Personal tinkering and goofing around</p>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Screens</span>
          <div className="content">
            <h3>
              HP <span>(3B+ • SMB • DLNA)</span>
            </h3>
            <h3>
              ASUS <span>(3B+ • RetroPie)</span>
            </h3>
            <h3>
              LG <span>(3B+ • touchscreen)</span>
            </h3>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Raspberry Pi</span>
          <div className="content">
            <h3>
              NAS Drive <span>(3B+ • SMB • DLNA)</span>
            </h3>
            <h3>
              Retro Gaming Module <span>(3B+ • RetroPie)</span>
            </h3>
            <h3>
              Photoframe • Pomodoro Timer <span>(3B+ • touchscreen)</span>
            </h3>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Music/Audio</span>
          <div className="content">
            <h3>Yamaha Digital Piano</h3>
            <h3>
              <a href="https://m-audio.com/products/view/axiom-25">
                M-Audio Axiom 25
              </a>
            </h3>
            <h3>Yeti Blue Microphone</h3>
            <h3>Arylic Up2stream Mini V2</h3>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Photo/Video</span>
          <div className="content">
            <h3>Canon EOS 60D</h3>
            <p>Lenses: 10mm, 15mm, 20mm, 24–85mm, 145mm</p>
            <h3>Lumix</h3>
            <h3>Lomo</h3>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Note-taking</span>
          <div className="content">
            <h3>Supernote A6</h3>
            <p>Lenses: 10mm, 15mm, 20mm, 24–85mm, 145mm</p>
            <h3>Sharp E-note</h3>
          </div>
        </section>
      </section>
      <section id="sw">
        <h2>Software</h2>
        <section className="sub">
          <span className="sub-heading">Development</span>
          <div className="content">
            <h3>Visual Studio Code</h3>
            <p>Nightowl theme, </p>
            <h3>iTerm2</h3>
            <p>Cobalt2 theme + ZSH</p>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Frontend Tooling</span>
          <div className="content">
            <h3>JS•HTML•CSS</h3>
            <h3>TypeScript</h3>
            <h3>React</h3>
            <h3>Gatsby</h3>
            <h3>Next.js</h3>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Comms Design</span>
          <div className="content">
            <h3>Adobe Creative Cloud</h3>
            <p>Photoshop, Illustrator, InDesign, Acrobat, Lightroom</p>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Product/UI/UX</span>
          <div className="content">
            <h3>Figma</h3>
            <h3>Sketch</h3>
            <h3>Principle</h3>
            <h3>Zeplin</h3>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Audio/Video</span>
          <div className="content">
            <h3>Adobe Creative Cloud</h3>
            <p>Audition, After Effects, Media Encoder</p>
            <h3>Logic Pro X</h3>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Productivity</span>
          <div className="content">
            <h3>Notion</h3>
            <h3>Alfred</h3>
            <h3>Boostnote</h3>
            <h3>Joplin</h3>
            <h3>Bitwarden</h3>
            <h3>Spectacle & Rectangle</h3>
            <h3>Rocket</h3>
          </div>
        </section>
      </section>
      <section id="peripheral">
        <h2>Peripheral</h2>
        <section className="sub">
          <span className="sub-heading">Computer Accessories</span>
          <div className="content">
            <h3>Laptop stand</h3>
            <h3>Microphone Boom arm</h3>
            <h3>DSLR arm stand</h3>
            <h3>Apple Magic Mouse</h3>
            <h3>Apple Magic Keyboard</h3>
            <h3>Wacom Tablet</h3>
            <h3>Ivanky Dock</h3>
            <h3>HP Printer/Scanner</h3>
            <h3>Canon Scanner</h3>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Desk Setup</span>
          <div className="content">
            <h3>IKEA desk</h3>
            <h3>IKEA chair</h3>
            <h3>Sketch</h3>
            <h3>Principle</h3>
            <h3>Zeplin</h3>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Productivity</span>
          <div className="content">
            <h3>Notion</h3>
            <h3>Alfred</h3>
            <h3>Boostnote</h3>
            <h3>Joplin</h3>
            <h3>Bitwarden</h3>
            <h3>Spectacle & Rectangle</h3>
            <h3>Rocket</h3>
          </div>
        </section>
      </section>
    </UsesStyles>
  </Layout>
);

export default UsesPage;
