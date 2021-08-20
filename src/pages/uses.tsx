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
      @media screen and (max-width: 768px) {
        justify-content: center;
      }
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
      padding: 0.5rem 1.2rem;
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
    @media screen and (max-width: 370px) {
      li a {
        font-size: 1.1rem;
        padding: 0.4rem 1rem;
      }
      li {
        margin-right: 0.4rem;
      }
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
    @media screen and (max-width: 370px) {
      top: calc(var(--nav-height) + 5.3rem);
    }
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
  p + h3,
  ul + h3 {
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
  <Layout heading="Uses" subheading="A non-exhaustive list of things I use">
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
            <a href="#misc">Misc</a>
          </li>
        </ul>
      </nav>
      <section id="hw">
        <h2>Hardware</h2>
        <section className="sub">
          <span className="sub-heading">Computer</span>
          <div className="content">
            <h3>
              <a href="https://support.apple.com/kb/SP809?locale=en_US">
                MacBook Pro 16" 2019 <span>(Catalina 10.15.7)</span>
              </a>
            </h3>
            <p>Primary laptop for design and development work</p>
            <h3>
              <a href="https://support.apple.com/kb/sp719?locale=en_US">
                MacBook Pro 15" Mid-2015 <span>(High Sierra 10.13.6)</span>
              </a>
            </h3>
            <p>Secondary laptop for personal documents and archive</p>
            <h3>
              <a href="https://support.hp.com/us-en/document/c06336530">
                HP Zbook 14u G6{' '}
                <span>(Windows 10 Pro V.1909 Build 18363.1500)</span>
              </a>
            </h3>
            <p>Company-issued laptop for Windows tasks</p>
            <h3>
              <a href="https://www.pine64.org/pinebook-pro/">
                Pinebook Pro <span>(Linux Debian)</span>
              </a>
            </h3>
            <p>Personal tinkering and goofing around</p>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Screens</span>
          <div className="content">
            <h3>
              <a href="https://support.hp.com/us-en/document/c05802914">
                HP EliteDisplay E243 <span>(23.8")</span>
              </a>
            </h3>
            <p>
              Two screens connected to primary MacBook Pro via{' '}
              <small>HDMI</small>
            </p>
            <h3>
              <a href="https://www.asus.com/me-en/Commercial-Monitors/VH236H/">
                ASUS VH236H <span>(23")</span>
              </a>
            </h3>
            <p>Used for secondary MacBook Pro and Raspberry Pi devices.</p>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Raspberry Pi</span>
          <div className="content">
            <h3>
              NAS Drive{' '}
              <span>
                (
                <a href="https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/">
                  3B+
                </a>{' '}
                •{' '}
                <a href="https://en.wikipedia.org/wiki/Server_Message_Block">
                  SMB
                </a>{' '}
                •{' '}
                <a href="https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance">
                  DLNA
                </a>
                )
              </span>
            </h3>
            <h3>
              Retro Gaming Module{' '}
              <span>
                (
                <a href="https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/">
                  3B+
                </a>{' '}
                • <a href="https://retropie.org.uk/">RetroPie</a> •{' '}
                <a href="https://retroflag.com/nespi-case-plus.html">
                  NESPi Case+
                </a>{' '}
                •{' '}
                <a href="https://www.digikey.com/en/products/detail/adafruit-industries-llc/3368/6680553">
                  Cooling Fan
                </a>
                )
              </span>
            </h3>
            <h3>
              Photoframe • Pomodoro Timer{' '}
              <span>
                (
                <a href="https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/">
                  3B+
                </a>{' '}
                •{' '}
                <a href="https://github.com/baadaa/timer-over-photos">
                  Custom web app
                </a>
                •{' '}
                <a href="https://www.amazon.com/gp/product/B0153R2A9I/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1">
                  Touch Screen
                </a>
                )
              </span>
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
            <h3>
              <a href="https://en.wikipedia.org/wiki/Lomo_LC-A">
                Lomo LC-A <span>(35mm)</span>
              </a>
            </h3>
            <p>Used to be obsessed with this one in 2000s</p>
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
            <p>
              Surprisingly versatile and powerful. Japanese-only, and unusable
              when underlit.
            </p>
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
                  Night Owl Theme
                </a>
              </li>
              <li>Fira Code font • two spaces • non-blinking block cursor</li>
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
            <h3>JavaScript • TypeScript</h3>
            <ul>
              <li>Prefer semicolon, arrow functions, and named exports</li>
            </ul>
            <h3>HTML • CSS</h3>
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
                <a href="https://github.com/agkozak/zsh-z">Z</a>
              </li>
              <li>
                <a href="https://cmus.github.io/">CMUS</a>
              </li>
              <li>
                <a href="https://github.com/ytdl-org/youtube-dl">youtube-dl</a>
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
            <h3>
              <a href="https://tracesof.net/uebersicht/">Übersicht</a>
            </h3>
            <p>To view calendar, weather, multiple timezones on desktop</p>
            <h3>
              <a href="https://www.notion.so/">Notion</a>
            </h3>
            <p>For organizing thoughts and plans</p>
            <h3>
              <a href="alfredapp.com">Alfred</a>
            </h3>
            <p>For improved search and automation</p>
            <h3>
              <a href="https://boostnote.io/">Boostnote</a> •{' '}
              <a href="https://joplinapp.org/">Joplin</a>
            </h3>
            <p>For markdown note-taking</p>
            <h3>
              <a href="https://bitwarden.com/">Bitwarden</a>
            </h3>
            <p>Open source password manager</p>
            <h3>
              <a href="https://www.spectacleapp.com/">Spectacle</a> •{' '}
              <a href="https://rectangleapp.com/">Rectangle</a>
            </h3>
            <p>Simple windows management</p>
            <h3>
              <a href="https://matthewpalmer.net/rocket/">Rocket</a>
            </h3>
            <p>Slack-like emoji typing</p>
          </div>
        </section>
      </section>
      <section id="desk">
        <h2>Desk Setup</h2>
        <section className="sub">
          <span className="sub-heading">Computer Accessories</span>
          <div className="content">
            <h3>Dual monitor arm with cable management</h3>
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
            <h3>Cutting mat & blades</h3>
            <h3>T-square & tape measure</h3>
            <h3>Bunch of external HDDs</h3>
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
      <section id="misc">
        <h2>Miscellaneous</h2>
        <section className="sub">
          <span className="sub-heading">Automechanic</span>
          <div className="content">
            <h3>
              <a href="https://www.fixd.com/">FIXD</a>
            </h3>
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
