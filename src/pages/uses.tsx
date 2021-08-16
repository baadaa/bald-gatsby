import * as React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Seo from '../components/seo';

const UsesStyles = styled.div`
  margin-bottom: 8rem;
  position: relative;
  nav {
    position: sticky;
    background-color: #fff;
    top: var(--nav-height);
    z-index: 1;
    margin: 0 0 3rem 0;

    ul {
      padding: 2rem 0 1rem;
      display: flex;
      list-style: none;
      flex-wrap: wrap;
      margin: 0;
      /* justify-content: center; */
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
        color: var(--cyan900);
        transform: translateY(-2px);
        background-color: var(--cyan200);
      }
    }
    li {
      margin-right: 0.6rem;
    }
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
    top: calc(var(--nav-height) + 5.7rem);
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
  p,
  ul {
    font-size: 1.4rem;
    color: #555;
  }
  ul:last-of-type {
    margin-bottom: 0;
  }
  li {
    margin-bottom: 0.5rem;
  }
  h3 + h3,
  p + h3 {
    margin-top: 1.4rem;
  }
  a {
    color: inherit;
    transition: color 0.2s;
    text-decoration: var(--yellow400) underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
    &:hover {
      color: var(--red600);
      text-decoration-color: var(--red600);
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
      <nav>
        <ul>
          <li>
            <a href="#hw">Hardware</a>
          </li>
          <li>
            <a href="#sw">Software</a>
          </li>
          <li>
            <a href="#desk">Desk Setup</a>
          </li>
          <li>
            <a href="#things">Thingamajig</a>
          </li>
        </ul>
      </nav>
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
            <h3>
              <a href="https://usa.yamaha.com/products/musical_instruments/pianos/p_series/p-105/index.html">
                Yamaha P-105 Digital Piano
              </a>
            </h3>
            <h3>
              <a href="https://m-audio.com/products/view/axiom-25">
                M-Audio Axiom 25
              </a>
            </h3>
            <h3>
              <a href="https://www.bluemic.com/en-us/products/yeti/">
                Yeti Blue Microphone
              </a>
            </h3>
            <ul>
              <li>
                <a href="https://www.amazon.com/gp/product/B01L3LL95O/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1">
                  InnoGear boom suspension stand
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/gp/product/B01FQB3DD8/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1">
                  Auphonix shock mount
                </a>
              </li>
            </ul>
            <h3>
              <a href="https://www.amazon.com/Up2Stream-Mini-V2-Speaker-Arylic-Up2stream/dp/B07W7QB2RX">
                Arylic Up2stream Mini V2
              </a>
            </h3>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Photo/Video</span>
          <div className="content">
            <h3>
              <a href="https://www.usa.canon.com/internet/portal/us/home/products/details/cameras/eos-dslr-and-mirrorless-cameras/dslr/eos-60d">
                Canon EOS 60D
              </a>
            </h3>
            <p>Lenses: 10mm, 15mm, 20mm, 24–85mm, 145mm</p>
            <h3>Lumix</h3>
            <h3>Lomo</h3>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Note-taking</span>
          <div className="content">
            <h3>
              <a href="https://youtu.be/wKW9bIMB-Mo">Supernote A6</a>
            </h3>
            <p>
              Neat e-ink touch device with pressure sensitivity. Lovely little
              device for note-taking and reading books.
            </p>
            <h3>
              <a href="https://www.ebay.com/p/1451261732">
                Sharp E-note WG-S50
              </a>
            </h3>
            <p>Can't beat the price for its features. Japanese-only UI</p>
          </div>
        </section>
      </section>
      <section id="sw">
        <h2>Software</h2>
        <section className="sub">
          <span className="sub-heading">Editor & Terminal</span>
          <div className="content">
            <h3>
              <a href="https://code.visualstudio.com/">Visual Studio Code</a>
            </h3>
            <ul>
              <li>
                <a href="https://github.com/sdras/night-owl-vscode-theme">
                  Night Owl theme
                </a>
              </li>
              <li>
                <a href="https://github.com/BriteSnow/vscode-toggle-quotes">
                  Toggle Quotes
                </a>
              </li>
            </ul>
            <h3>
              <a href="https://iterm2.com/">iTerm2</a>
            </h3>
            <ul>
              <li>
                <a href="https://github.com/wesbos/Cobalt2-iterm">
                  Cobalt2 theme
                </a>
              </li>
              <li>
                <a href="https://ohmyz.sh/">Zsh</a>
              </li>
              <li>
                <a href="https://github.com/agkozak/zsh-z">Z</a>
              </li>
            </ul>
            <h3>
              <a href="https://fonts.google.com/specimen/Fira+Code?preview.text=!(font%20!%3D%3D%20fira%20%7C%7C%20weight%20%3C%3D%20400)%20&preview.text_type=custom">
                Fira Code Font
              </a>
            </h3>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Tools & Frameworks</span>
          <div className="content">
            <h3>JS•HTML•CSS</h3>
            <h3>TypeScript</h3>
            <h3>JS Frameworks</h3>
            <ul>
              <li>
                <a href="https://reactjs.org/">React</a>
              </li>
              <li>
                <a href="https://www.gatsbyjs.com/">Gatsby</a>
              </li>
              <li>
                <a href="https://nextjs.org/">Next.js</a>
              </li>
            </ul>
            <h3>Linting & Formatting</h3>
            <ul>
              <li>
                <a href="https://midnight-commander.org/">
                  No-Sweat&trade; ESLint & Prettier by Wes Bos
                </a>
              </li>
              <li>
                <a href="https://github.com/prettier/prettier-vscode">
                  Prettier for VS Code
                </a>
              </li>
              <li>
                <a href="https://github.com/Microsoft/vscode-eslint">
                  ESLint for VS Code
                </a>
              </li>
            </ul>
            <h3>CLI tools</h3>
            <ul>
              <li>
                <a href="https://midnight-commander.org/">
                  Moonlight Commander
                </a>
              </li>
              <li>
                <a href="https://github.com/so-fancy/diff-so-fancy">
                  diff-so-fancy
                </a>
              </li>
              <li>
                <a href="https://cmus.github.io/">CMUS</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Design Tools</span>
          <div className="content">
            <h3>Communications Design</h3>
            <ul>
              <li>
                <a href="https://www.adobe.com/creativecloud.html">
                  Adobe Creative Cloud <br />
                  <em>
                    (Photoshop, Illustrator, InDesign, Acrobat, Lightroom, After
                    Effects, Media Encoder, Audition)
                  </em>
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/logic-pro/">Logic Pro X</a>
              </li>
              <li>
                <a href="https://cmus.github.io/">CMUS</a>
              </li>
            </ul>

            <h3>Product/UI/UX Design</h3>
            <ul>
              <li>
                <a href="https://www.figma.com/">Figma</a>
              </li>
              <li>
                <a href="https://www.sketch.com/">Sketch</a>
              </li>
              <li>
                <a href="https://principleformac.com/">Principle</a>
              </li>
              <li>
                <a href="https://zeplin.io/">Zeplin</a>
              </li>
              <li>
                <a href="https://lucid.app/">Lucidchart</a>
              </li>
            </ul>
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
      <section id="desk">
        <h2>Desk Setup</h2>
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
            <h3>
              <a href="https://www.ikea.com/us/en/p/lagkapten-tabletop-white-00460836/">
                Lagkapten desktop
              </a>{' '}
              +{' '}
              <a href="https://www.ikea.com/us/en/p/adils-leg-white-90217972/">
                Adils legs
              </a>
            </h3>
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
      <section id="things">
        <h2>Thingamajig</h2>
        <section className="sub">
          <span className="sub-heading">Automechanic</span>
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
