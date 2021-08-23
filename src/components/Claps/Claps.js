import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';
import styled from 'styled-components';

import debounce from 'lodash.debounce';
import { IconClap } from '../Icons';
import { getFirebase } from '../../firebase';

// Learned from
// https://github.com/kyleshevlin/blog/blob/main/src/components/BeardStrokes.js

const LOCAL_STORAGE_KEY = 'baldDesign:claps';

const ClapperStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  line-height: 1.4;
  .wrapper {
    width: 100%;
    max-width: var(--max-width);
    padding: 0 1.25rem;
    display: flex;
    @media screen and (min-width: 768px) {
      padding: 0 2rem;
    }
  }
  .clickArea {
    text-align: center;
    margin-right: 1rem;
  }

  .clapBtn {
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    outline: none;
    transition: transform 0.2s;
    svg {
      fill: var(--coolGray500);
    }
    &:hover {
      transform: scale(1.15) rotate(-5deg);
    }
    &:active {
      transform: scale(1.2) rotate(5deg);
    }
  }
`;

function getClicksForPostFromLocalStorage(slug) {
  let data = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  let count = 0;

  if (data) {
    data = JSON.parse(data);

    if (data[slug]) {
      count = data[slug];
    }
  }

  return count;
}

function setClicksForPostInLocalStorage(slug, count) {
  let data = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  let update = { [slug]: count };

  if (data) {
    data = JSON.parse(data);
    update = { ...data, [slug]: count };
  }

  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(update));
}

function addClicksToDatabase({ count, lastUpdateCount, slug, database }) {
  if (database) {
    database
      .ref(`posts/${slug}`)
      .once('value')
      .then((snapshot) => {
        const value = snapshot.val();
        const currentTotal = value || 0;

        database
          .ref('posts')
          .child(slug)
          // If we don't track and subtract the lastUpdateCount, then if a user
          // leaves and comes back to a post, we'll be adding whatever clicks
          // they had stored in localStorage AGAIN to the database if they choose
          // to like the post some more.
          .set(currentTotal + count - lastUpdateCount);
      });
  }
}

const useDatabase = () => {
  const database = useRef(null);
  useEffect(() => {
    const lazyApp = import('@firebase/app');
    const lazyDatabase = import('@firebase/database');

    Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
      database.current = getFirebase(firebase).database();
    });
  }, []);

  return database.current;
};
const useClap = (slug) => {
  const database = useDatabase();
  const [count, setCount] = useState(0);
  const [lastUpdateCount, setLastUpdateCount] = useState(0);
  const maximumClapped = count >= 50;

  const handleClap = useCallback(() => {
    if (count >= 50) return;
    setCount((s) => s + 1);
  }, [count]);

  const storeClaps = useMemo(
    () =>
      debounce(({ count, database, lastUpdateCount, slug }) => {
        setClicksForPostInLocalStorage(slug, count);
        addClicksToDatabase({
          count,
          database,
          lastUpdateCount,
          slug,
        });
        setLastUpdateCount(count);
      }, 500),
    []
  );
  useEffect(() => {
    const localCount = getClicksForPostFromLocalStorage(slug);
    setCount(localCount);
    setLastUpdateCount(localCount);
  }, [slug]);
  useEffect(() => {
    storeClaps({ count, database, lastUpdateCount, slug });
  }, [count, database, lastUpdateCount, slug]);

  return { count, handleClap, maximumClapped };
};

const Claps = ({ slug }) => {
  const { count, handleClap, maximumClapped } = useClap(slug);
  return (
    <ClapperStyles>
      <div className="wrapper">
        <div className="clickArea">
          <button
            type="button"
            onClick={handleClap}
            disabled={maximumClapped}
            className="clapBtn"
          >
            <IconClap width={40} />
          </button>
          <div style={{ color: 'var(--coolGray600)' }}>{`+${count}`}</div>
        </div>
        <div style={{ color: 'var(--coolGray800)' }}>
          Clap a few times
          <br />
          if you liked it
        </div>
      </div>
    </ClapperStyles>
  );
};

export default Claps;
