import React, { Component } from 'react';
import styled from 'styled-components';
import { getFirebase } from '../../firebase';
import { IconClap } from '../Icons';
import { inflect } from '../utils';

// Learned from
// https://github.com/kyleshevlin/blog/blob/main/src/components/TotalBeardStrokes.js

const SpanStyles = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  margin-top: 0;
  svg {
    fill: var(--coolGray700);
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1) rotate(-5deg);
    }
  }
  .num {
    margin-left: 5px;
    font-size: small;
    color: var(--coolGray800);
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

class TotalClaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      hasFetchedOnce: false,
    };
  }

  componentDidMount() {
    const lazyApp = import('@firebase/app');
    const lazyDatabase = import('@firebase/database');
    const { slug } = this.props;

    Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
      const database = getFirebase(firebase).database();

      database.ref(`posts/${slug}`).on('value', (snapshot) => {
        const value = snapshot.val();
        const update = { hasFetchedOnce: true };

        if (value) {
          update.count = value;
        }

        this.setState(update);
      });
    });
  }

  render() {
    const { count, hasFetchedOnce } = this.state;
    const isBrowser = typeof window !== 'undefined';
    const toBottom = () =>
      isBrowser &&
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    return (
      <SpanStyles
        style={{
          opacity: hasFetchedOnce ? 1 : 0,
        }}
      >
        <IconClap width={24} onClick={toBottom} style={{ cursor: 'pointer' }} />
        <span className="num">
          {count} <span>{inflect('clap')(count)} earned</span>
        </span>
      </SpanStyles>
    );
  }
}

export default TotalClaps;
