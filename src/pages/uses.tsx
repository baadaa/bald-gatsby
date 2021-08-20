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
    em,
    span {
      font-style: italic;
      font-size: 1.4rem;
      color: #888;
    }
    em {
      /* font-size: 1.5rem; */
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
  p + ul,
  ul + p {
    margin-top: 0.5rem;
  }
  h3 + h3,
  p + h3,
  ul + h3 {
    margin-top: 1.4rem;
  }
  a {
    color: inherit;
    transition: color 0.2s;
    text-decoration: underline;
    text-decoration-color: var(--yellow400);
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
                  Custom web app{' '}
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
            <p>
              Mostly{' '}
              <a href="https://www.usa.canon.com/internet/portal/us/home/support/self-help-center/eos-webcam-utility">
                using it as a webcam
              </a>{' '}
              with a{' '}
              <a href="https://www.amazon.com/gp/product/B08ZCW4N6V/ref=ppx_yo_dt_b_search_asin_title">
                table mount arm
              </a>
            </p>
            <ul>
              <li>
                <a href="https://www.amazon.com/Sigma-Aspherical-Angle-Digital-Cameras/dp/B00005RKSK">
                  Sigma 20mm Wide Angle, f/1.8
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Canon-24-85mm-3-5-4-5-Standard-Cameras/dp/B000053HHD">
                  Canon EF 24-85mm Standard Zoom, f/3.5-4.5 USM
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Canon-50mm-1-8-Camera-Lens/dp/B00007E7JU">
                  Canon EF 50mm Standard, f/1.8 II
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Canon-EF-S-55-250mm-4-0-5-6-Telephoto/dp/B0011NVMO8">
                  Canon EF-S 55-250mm Telephoto Zoom, f/4.0-5.6 IS II
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Rokinon-FE8M-C-Fisheye-Fixed-Canon/dp/B002LTXQUE">
                  Rokinson 8mm Fisheye, f/3.5
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Holga-60mm-Lens-Canon-Black/dp/B005OFK89E">
                  Holga 60mm Toy lens, f/8
                </a>
              </li>
            </ul>
            <h3>
              <a href="https://en.wikipedia.org/wiki/Panasonic_Lumix_DMC-LX3">
                Panasonic Lumix DMC-LX3{' '}
                <span>(24mm wide angle, f/2.0–2.8)</span>
              </a>
            </h3>
            <p>Leica lens with full manual control can do magic</p>
            <h3>
              <a href="https://en.wikipedia.org/wiki/Lomo_LC-A">
                Lomo LC-A <span>(32mm, f/2.8)</span>
              </a>
            </h3>
            <p>Produces brilliant colors, but gathering dust in a drawer</p>
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
              Surprisingly versatile and powerful. PIA: Japanese-only UI,
              unusable in underlit conditions.
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
                <a href="https://ohmyz.sh/">Zsh</a> •{' '}
                <a href="https://github.com/zsh-users/zsh-syntax-highlighting">
                  Syntax Highlighting
                </a>
              </li>
            </ul>
            <h3>
              <a href="https://fonts.google.com/specimen/Fira+Code?preview.text=!(font%20!%3D%3D%20fira%20%7C%7C%20weight%20%3C%3D%20400)%20&preview.text_type=custom">
                Fira Code Font
              </a>
            </h3>
            <h3>
              Dot files, configs, aliases <span>(repo coming soon)</span>
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
              <a href="https://www.notion.so/">Notion</a> •{' '}
              <a href="https://miro.com/">Miro</a> •{' '}
              <a href="https://www.mural.co/">Mural</a>
            </h3>
            <p>
              For organizing thoughts, planning things out, and collaborating
              with others
            </p>
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
            <h3>Monitor stands & mounts</h3>
            <ul>
              <li>
                <a href="https://www.amazon.com/gp/product/B009S750LA/ref=ppx_yo_dt_b_search_asin_title">
                  VIVO Dual Monitor Arm
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/gp/product/B08F1ZQSDS/ref=ppx_yo_dt_b_search_asin_title">
                  Pannon Foldable Laptop Stand
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/gp/product/B08L3TMM2X/ref=ppx_yo_dt_b_search_asin_title">
                  BoYata Monitor Stand
                </a>
              </li>
            </ul>
            <h3>
              <a href="https://www.amazon.com/gp/product/B08PP8HYR9/ref=ppx_yo_dt_b_search_asin_title">
                iVANKY MacBook Pro Docking Station
              </a>
            </h3>
            <p>
              Runs two external monitors via <small>HDMI</small>, connects
              multiple <small>USB</small> devices, and handles <small>SD</small>{' '}
              cards <em>simultaneously</em> without a hitch
            </p>
            <h3>Printers & Scanners</h3>
            <ul>
              <li>
                <a href="https://www.amazon.com/HP-Laserjet-Multi-Function-Wireless-W2G55A/dp/B087CB66X1/ref=sr_1_4">
                  HP LaserJet MPF M28W (scanner & printer)
                </a>
              </li>
              <li>
                <a href="https://www.usa.canon.com/internet/portal/us/home/support/details/scanners/support-scanners-canoscan-series/canoscan-lide-25">
                  Canon CanoScan LiDE 25
                </a>
              </li>
            </ul>
            <h3>Generic Input Devices</h3>
            <ul>
              <li>
                <a href="https://www.amazon.com/Wacom-Intuos-Medium-CTH680-Version/dp/B00EN27UC2">
                  Wacom Intuos CTH680 Pen and Touch Tablet
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Wacom-CTE-430-Tablet-Model-Cte-430/product-reviews/B001BXUW7G">
                  Wacom Graphire CTE430 Pen Tablet
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Wacom-Bamboo-Small-Tablet-Cordless/dp/B0055ZWBA2">
                  Wacom Bamboo CTE450 Pen Tablet
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Apple-Wireless-Keyboard-Silver-MLA22LL/dp/B01NABDNPH">
                  Apple Magic Keyboard 2 (A1644)
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Apple-Magic-Mouse-Wireless-Rechargable/dp/B016QO5YNG">
                  Apple Magic Mouse 2 (A1657)
                </a>
              </li>
            </ul>
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
            <h3>
              <a href="https://www.amazon.com/gp/product/B00IIFW2L4/ref=ppx_yo_dt_b_search_asin_title">
                Amazon Basic Mesh Chair
              </a>
            </h3>
            <h3>Cutting mat & blades</h3>
            <h3>T-square & tape measure</h3>
            <h3>Bunch of external HDDs</h3>
            <h3>Piles of paper, Post-Its, pens, and pencils</h3>
          </div>
        </section>
      </section>
      <section id="misc">
        <h2>Miscellaneous</h2>
        <section className="sub">
          <span className="sub-heading">Gizmos</span>
          <div className="content">
            <h3>
              <a href="https://www.fixd.com/">FIXD Automotive Sensor</a>
            </h3>
            <h3>EGO Power Tools</h3>
            <ul>
              <li>
                <a href="https://egopowerplus.com/21-inch-self-propelled-mower/">
                  21" Self-Propelled Mower
                </a>
              </li>
              <li>
                <a href="https://egopowerplus.com/14-inch-chain-saw/">
                  14" Chain Saw
                </a>
              </li>
              <li>
                <a href="https://egopowerplus.com/blower-530cfm/">
                  530 CFM Blower
                </a>
              </li>
            </ul>
            <h3>Home Security</h3>
            <ul>
              <li>
                <a href="https://www.amazon.com/gp/product/B08DXD8LSR/ref=ppx_yo_dt_b_search_asin_title">
                  Eufy Video Doorbell
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/gp/product/B07W1HKYQK/ref=ppx_yo_dt_b_search_asin_title">
                  Eufy Security Cameras
                </a>{' '}
                with{' '}
                <a href="https://www.amazon.com/gp/product/B08L3NN3W2/ref=ppx_yo_dt_b_search_asin_title">
                  Solar Panels
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/gp/product/B0868GS77L/ref=ppx_yo_dt_b_search_asin_title">
                  ICNX Solar Powered Flood Light
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="sub">
          <span className="sub-heading">Favorite Podcasts</span>
          <div className="content">
            <h3>
              <a href="https://www.designmattersmedia.com/">
                Design Matters <em>by Debbie Millman</em>
              </a>
            </h3>
            <h3>
              <a href="https://www.ridehome.info/show/techmeme-ride-home/">
                Techmeme Ride Home <em>by Brian McCullough</em>
              </a>
            </h3>
            <h3>
              <a href="https://www.thenewsworthy.com/">
                The Newsworthy <em>by Erica Mandy</em>
              </a>
            </h3>
            <h3>
              <a href="https://syntax.fm/">
                Syntax <em>by Scott Tolinski &amp; Wes Bos</em>
              </a>
            </h3>
            <h3>
              <a href="https://shoptalkshow.com/">
                ShopTalk Show <em>by Dave Rupert &amp; Chris Coyier</em>
              </a>
            </h3>
            <h3>
              <a href="https://devchat.tv/show/javascript-jabber/">
                JavaScript Jabber <em>by Devchat.tv</em>
              </a>
            </h3>
            <h3>
              <a href="https://changelog.com/jsparty">
                JS Party <em>by Changelog</em>
              </a>
            </h3>
            <h3>
              <a href="https://www.designbetter.co/podcast">
                The Design Better <em>by InVision</em>
              </a>
            </h3>
            <h3>
              <a href="https://developertea.com/">
                Developer Tea <em>by Jonathan Cutrell</em>
              </a>
            </h3>
            <h3>
              <a href="https://www.heavybit.com/library/podcasts/jamstack-radio/">
                JAMstack Radio <em>by Heavybit</em>
              </a>
            </h3>
          </div>
        </section>
      </section>
    </UsesStyles>
  </Layout>
);

export default UsesPage;
