import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --max-width: 1140px;
  --pale-shadow: 0 2px 15px rgba(0,0,0,.075);
  --base-shadow: 0 1px 10px rgba(0,0,0,.2);
  --hover-shadow: 3px 7px 15px rgba(0,0,0,.1), -1px 3px 25px rgba(0,0,0,.1);
  --nav-height: 8rem;
  --layout-top-padding: 4rem;
  --post-top-padding: 1rem;
  --cyan900: #0A2129;
  --cyan800: #154251;
  --cyan700: #1F637A;
  --cyan600: #2984A3;
  --cyan500: #34A5CB;
  --cyan400: #5CB7D6;
  --cyan300: #85C9E0;
  --cyan200: #AEDBEA;
  --cyan100: #D6EDF5;
  --cyan50: #EBF6FA;
  --green900: #18260D;
  --green800: #304C1A;
  --green700: #487227;
  --green600: #609834;
  --green500: #79BF42;
  --green400: #93CB67;
  --green300: #AED88D;
  --green200: #C9E5B3;
  --green100: #E4F2D9;
  --green50: #F1F9EC;
  --yellow900: #302303;
  --yellow800: #5F4707;
  --yellow700: #8F6A0A;
  --yellow600: #BF8E0D;
  --yellow500: #EFB212;
  --yellow400: #F2C140;
  --yellow300: #F5D070;
  --yellow200: #F8E0A0;
  --yellow100: #FCEFCF;
  --yellow50: #FDF7E7;
  --red900: #260D11;
  --red800: #4D1922;
  --red700: #732634;
  --red600: #9A3245;
  --red500: #C03F56;
  --red400: #CD6578;
  --red300: #D98C9A;
  --red200: #E6B2BB;
  --red100: #F2D9DD;
  --red50: #F9ECEE;
  --coolGray900: #141c1f;
  --coolGray800: #27383f;
  --coolGray700: #3b545e;
  --coolGray600: #3b545e;
  --coolGray500: #628c9d;
  --coolGray400: #81a3b1;
  --coolGray300: #a1bac4;
  --coolGray200: #c0d1d8;
  --coolGray100: #e0e8eb;
  --coolGray50: #eff4f5;
  --gray900: #1a1a1a;
  --gray800: #333333;
  --gray700: #4d4d4d;
  --gray600: #666666;
  --gray500: #808080;
  --gray400: #999999;
  --gray300: #B3B3B3;
  --gray200: #CCCCCC;
  --gray100: #E6E6E6;
  --gray50: #F2F2F2;


  @media screen and (max-width: 1024px) {
    --nav-height: 6rem;
  }
  @media screen and (max-width: 768px) {
  --layout-top-padding: 3rem;
  }
}
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 62.5%/1.45em "Work Sans", sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
  position: relative;
  transition: transform .2s, filter .2s;
}
body::-webkit-scrollbar {
  width: 11px;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--gray900);
  font-size: 1.6rem;
  line-height: 1.5;
  font-family: "Work Sans", sans-serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
  scrollbar-width: thin;
  scrollbar-color: var(--yellow500) var(--cyan700);
}
body::-webkit-scrollbar-track {
  background: var(--gray100);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--yellow500);
  border-radius: 6px;
  border: 3px solid transparent;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
progress {
  vertical-align: baseline;
}
[hidden],
template {
  display: none;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
a:active,
a:hover {
  outline-width: 0;
}
abbr[title] {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
  text-decoration: none;
}
b,
strong {
  font-weight: inherit;
  font-weight: bolder;
}
dfn {
  font-style: italic;
}
mark {
  background-color: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
svg:not(:root) {
  overflow: hidden;
}
code,
kbd,
pre,
samp {
  font-family: monospace;
  font-size: 1em;
}
figure {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
hr {
  box-sizing: content-box;
  overflow: visible;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: calc(1.45rem - 1px);
  background: hsla(0, 0%, 0%, 0.2);
  border: none;
  height: 1px;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
}
optgroup {
  font-weight: 700;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  border: 1px solid silver;
  padding: 0.35em 0.625em 0.75em;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}
h1 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  color: inherit;
  font-weight: 300;
  font-family: "Work Sans", sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 4.8rem;
  line-height: 1.1;
  letter-spacing: -.5px;
  margin-bottom: 1em;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 3.6rem;
    margin-bottom: .5em;
  }
  @media screen and (max-width: 480px) {
    font-size: 2.8rem;
  }
}
h2 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-top: 1.5em;
  margin-bottom: 1em;
  color: inherit;
  font-weight: 300;
  font-family: "Work Sans", sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 3.9rem;
  letter-spacing: -.5px;
  line-height: 1.1;
  @media screen and (max-width: 768px) {
    font-size: 2.925rem;
    font-weight:400;
    margin-bottom: .5em;
  }
  @media screen and (max-width: 480px) {
    font-size: 2.275rem;
  }
}
h3 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-top: 1.5em;
  margin-bottom: 1em;
  color: inherit;
  font-weight: 400;
  font-family: "Work Sans", sans-serif;
  text-rendering: optimizeLegibility;
  letter-spacing: -.6px;
  font-size: 3.1rem;
  line-height: 1.1;
  @media screen and (max-width: 768px) {
    font-size: 2.325rem;
    font-weight:400;
    margin-bottom: .5em;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
}
h4 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-top: 1.5em;
  margin-bottom: 1em;
  color: inherit;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  text-rendering: optimizeLegibility;
  letter-spacing: -.5px;
  font-size: 2.5rem;
  line-height: 1.1;
}
h5 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-top: 1.5em;
  margin-bottom: 1em;
  color: inherit;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 2rem;
  letter-spacing: -.3px;
  line-height: 1.1;
}
h6 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-top: 1.5em;
  margin-bottom: 1em;
  color: inherit;
  font-weight: 700;
  font-family: "Work Sans", sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 1.6rem;
  line-height: 1.1;
}
hgroup {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
ul {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}
ol {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}
dl {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
dd {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
p {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  font-family: Georgia, serif;
  margin-bottom: 1.45rem;
}
pre {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1.45rem;
  font-size: 1.36rem;
  line-height: 1.42;
  background: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  overflow: auto;
  word-wrap: normal;
  padding: 1.45rem;
}
table {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  font-size: 1.6rem;
  line-height: 1.45rem;
  border-collapse: collapse;
  width: 100%;
}
blockquote {
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
form {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
noscript {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
iframe {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
address {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
b {
  font-weight: bold;
}
strong {
  font-weight: bold;
}
dt {
  font-weight: bold;
}
th {
  font-weight: bold;
}
li {
  margin-bottom: calc(1.45rem / 2);
}
ol li {
  padding-left: 0;
}
ul li {
  padding-left: 0;
}
li > ol {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);
}
li > ul {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);
}
blockquote *:last-child {
  margin-bottom: 0;
}
li *:last-child {
  margin-bottom: 0;
}
p *:last-child {
  margin-bottom: 0;
}
li > p {
  margin-bottom: calc(1.45rem / 2);
}
code {
  font-size: 1.36rem;
  line-height: 1.45rem;
}
kbd {
  font-size: 1.36rem;
  line-height: 1.45rem;
}
samp {
  font-size: 1.36rem;
  line-height: 1.45rem;
}
abbr {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}
acronym {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}
thead {
  text-align: left;
}
td,
th {
  text-align: left;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  font-feature-settings: "tnum";
  -moz-font-feature-settings: "tnum";
  -ms-font-feature-settings: "tnum";
  -webkit-font-feature-settings: "tnum";
  padding-left: 0.96667rem;
  padding-right: 0.96667rem;
  padding-top: 0.725rem;
  padding-bottom: calc(0.725rem - 1px);
}
th:first-child,
td:first-child {
  padding-left: 0;
}
th:last-child,
td:last-child {
  padding-right: 0;
}
tt,
code {
  background-color: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
    "Liberation Mono", Menlo, Courier, monospace;
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}
pre code {
  background: none;
  line-height: 1.42;
}
code::before,
code::after,
tt::before,
tt::after {
  letter-spacing: -0.2em;
  content: "";
}
pre code:before,
pre code:after,
pre tt:before,
pre tt:after {
  content: "";
}
/* @media only screen and (max-width: 480px) {
  html {
    font-size: 70%;
  }
} */
`;

export default GlobalStyles;
