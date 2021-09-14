import React from 'react';
import styled from 'styled-components';
import Swatch from './Swatch';
import TintedTable from './TintedPalette';

const Styles = styled.div`
  h5 {
    margin: 0 0 1rem;
    font-size: 1.5rem;
    color: var(--cyan700);
  }
  section {
    display: flex;
    position: relative;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }
  padding: 2rem;
  background: #fff;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  box-shadow: var(--pale-shadow);
  /* padding: 20% 17% 12%; */
  border-radius: 2rem;
  background-color: #fff;
  margin-bottom: 2rem;

  .hp {
    width: 80%;
  }
  .variations {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-basis: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 100px;
    .hpc {
      flex-basis: 100%;
      svg {
        max-width: 100%;
      }
      margin-bottom: 15%;
    }
    svg {
      width: 100%;
      max-width: 150px;
    }
    @media screen and (max-width: 820px) {
      flex-direction: column;
      padding-top: 50px;
      .hpc {
        width: 100%;
        flex-basis: auto;
        svg {
          width: 100%;
          height: auto;
        }
      }
      svg {
        width: 40%;
        max-width: 100%;
        height: auto;
      }
      svg + svg {
        margin-top: 30px;
      }
    }
  }
  .caption {
    text-align: center;
    display: block;
    width: 100%;
    margin-top: 2rem;
    font-size: 1.2rem;
    font-family: Georgia, serif;
    font-style: italic;
    color: var(--gray600);
  }
`;

const HomepointColors = () => (
  <Styles>
    <h5>Brand Colors</h5>
    <section>
      <Swatch
        hex="0D9BD5"
        cmyk="76/24/2/0"
        rgb="13/155/213"
        name="Light Blue"
        pms="299C"
      />
      <Swatch
        hex="0C3258"
        cmyk="100/84/39/32"
        rgb="12/50/88"
        name="Navy"
        pms="648C"
      />
      <Swatch
        hex="23D58C"
        cmyk="67/0/64/0"
        rgb="35/213/140"
        pms="7479C"
        name="Green"
      />
    </section>
    <h5>Support Colors</h5>
    <section style={{ marginBottom: 0 }}>
      <Swatch
        hex="33A1CE"
        cmyk="75/22/0/19"
        rgb="51/161/206"
        name="Sky 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="40BF8B"
        cmyk="66/0/27/25"
        rgb="64/191/139"
        name="Grass 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="46B7B2"
        cmyk="62/0/3/28"
        rgb="70/183/178"
        name="Turquoise 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="A54AB5"
        cmyk="9/59/0/29"
        rgb="165/74/181"
        name="Eggplant 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="7842BD"
        cmyk="37/65/0/26"
        rgb="120/66/189"
        name="Plum 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="FFB000"
        cmyk="0/31/100/0"
        rgb="255/176/0"
        name="Lemon 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="E4711E"
        cmyk="0/50/87/11"
        rgb="228/113/30"
        name="Orange 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="C23F6B"
        cmyk="0/68/45/24"
        rgb="194/63/107"
        name="Berry 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="628C9D"
        cmyk="38/11/0/38"
        rgb="98/140/157"
        name="Cool Gray 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="808080"
        cmyk="0/0/0/50"
        rgb="128/128/128"
        name="Neutral Gray 500"
        pms="TBD"
        isLeading
      />
    </section>
  </Styles>
);
const HomepointIdentityColors = () => (
  <Styles>
    <section style={{ margin: 0 }}>
      <Swatch
        hex="0D9BD5"
        cmyk="76/24/2/0"
        rgb="13/155/213"
        name="Light Blue"
        pms="299C"
      />
      <Swatch
        hex="0C3258"
        cmyk="100/84/39/32"
        rgb="12/50/88"
        name="Navy"
        pms="648C"
      />
      <Swatch
        hex="23D58C"
        cmyk="67/0/64/0"
        rgb="35/213/140"
        pms="7479C"
        name="Green"
      />
    </section>
  </Styles>
);
const HomepointSupportTints = () => (
  <Styles>
    <section style={{ margin: 0 }}>
      <TintedTable />
    </section>
  </Styles>
);
const HomepointSupportColors = () => (
  <Styles>
    <section style={{ margin: 0 }}>
      <Swatch
        hex="33A1CE"
        cmyk="75/22/0/19"
        rgb="51/161/206"
        name="Sky 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="40BF8B"
        cmyk="66/0/27/25"
        rgb="64/191/139"
        name="Grass 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="46B7B2"
        cmyk="62/0/3/28"
        rgb="70/183/178"
        name="Turquoise 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="A54AB5"
        cmyk="9/59/0/29"
        rgb="165/74/181"
        name="Eggplant 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="7842BD"
        cmyk="37/65/0/26"
        rgb="120/66/189"
        name="Plum 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="FFB000"
        cmyk="0/31/100/0"
        rgb="255/176/0"
        name="Lemon 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="E4711E"
        cmyk="0/50/87/11"
        rgb="228/113/30"
        name="Orange 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="C23F6B"
        cmyk="0/68/45/24"
        rgb="194/63/107"
        name="Berry 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="628C9D"
        cmyk="38/11/0/38"
        rgb="98/140/157"
        name="Cool Gray 500"
        pms="TBD"
        isLeading
      />
      <Swatch
        hex="808080"
        cmyk="0/0/0/50"
        rgb="128/128/128"
        name="Neutral Gray 500"
        pms="TBD"
        isLeading
      />
    </section>
  </Styles>
);

export default HomepointColors;

export {
  HomepointIdentityColors,
  HomepointSupportColors,
  HomepointSupportTints,
};
