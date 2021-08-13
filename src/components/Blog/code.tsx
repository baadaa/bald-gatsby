import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import styled from 'styled-components';
import { copyToClipboard } from '../utils';

const RE = /{([\d,-]+)}/;

const calculateLinesToHighlight = (meta) => {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map((v) => v.split('-').map((y) => parseInt(y, 10)));
    return (index) => {
      const lineNumber = index + 1;
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      );
      return inRange;
    };
  }
  return () => false;
};
export const Pre = styled.pre`
  text-align: left;
  margin: rem 0;
  padding: 4rem 2rem 2rem;
  overflow-x: auto;
  border-radius: 0.5rem;

  & .token-line {
    line-height: 2rem;
    height: 2rem;
  }
  font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
    'Liberation Mono', Menlo, Courier, monospace;
  font-size: 1.4rem;
  position: relative;
  .language-spec,
  .filename {
    position: absolute;
    top: 0;
    left: 2rem;
    padding: 0.5rem 1rem;
    background: var(--yellow500);
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0 0 0.5rem 0.5rem;
    text-transform: uppercase;
  }
  .filename {
    top: 0.3rem;
    left: auto;
    background: transparent;
    color: var(--yellow500);
    font-size: 1.2rem;
    right: 2rem;
    text-transform: none;
  }
  &.language-scss .language-spec,
  &.language-css .language-spec {
    background: var(--red500);
    color: #fff;
  }
  &.language-shell .language-spec,
  &.language-bash .language-spec {
    background: var(--green500);
    color: #fff;
  }
  &.language-html .language-spec {
    background: var(--cyan500);
    color: #fff;
  }
  .highlight-line {
    background: #022b4e;
    margin: 0 -2rem;
    padding: 0 1.5rem;
    border-left: 0.5rem solid var(--cyan500);
  }
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 3rem;
  box-sizing: border-box;
  user-select: none;
  text-align: right;
  padding-right: 1rem;
  opacity: 0.2;
  margin-right: 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.6);
`;

const CopyCode = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: 0;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 1em;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

const retrieveFilename = (metastring) => {
  const stringArr = metastring ? metastring.split(' ') : null;
  const filenameItem = stringArr
    ? stringArr.find((item) => item.indexOf('filename:') !== -1)
    : null;
  const filename = filenameItem
    ? filenameItem.slice(9, filenameItem.length)
    : null;
  return filename;
};

const Code = ({ codeString, language, metastring }) => {
  const filename = retrieveFilename(metastring);
  const handleClick = () => {
    copyToClipboard(codeString);
  };
  const fileName = metastring && filename ? filename : '';
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre
          className={className}
          style={{
            ...style,
            paddingTop: !language && !filename ? '2rem' : '4rem',
          }}
        >
          {language && <span className="language-spec">{language}</span>}
          <span
            style={{ display: fileName ? 'block' : 'none' }}
            className="filename"
          >
            {fileName}
          </span>
          <CopyCode onClick={handleClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div
              {...getLineProps({
                line,
                key: i,
                className: shouldHighlightLine(i) ? 'highlight-line' : '',
              })}
            >
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default Code;
