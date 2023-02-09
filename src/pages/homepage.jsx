import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnime } from '../features/homepage/animes.slice';
import Header from '../components/homepage/Header';

const Homepage = () => {
  const dispatch = useDispatch();
  const animeLoading = useSelector((state) => state.topAnime.loading);
  const error = useSelector((state) => state.topAnime.error);
  const topAnime = useSelector((state) => state.topAnime.topAnime);
  useEffect(() => {
    if (animeLoading === 'idle') {
      dispatch(fetchAnime());
    }
  }, [dispatch, animeLoading]);

  let tobeDisplay = '';
  if (animeLoading === 'loading') {
    tobeDisplay = <div>Loading</div>;
  } else if (animeLoading === 'succeeded') {
    tobeDisplay = (
      <main>
        <Header topAnime={topAnime} />
      </main>
    );
  } else if (animeLoading === 'failed') {
    tobeDisplay = <em>{error}</em>;
  }
  return tobeDisplay;
};

export default Homepage;
