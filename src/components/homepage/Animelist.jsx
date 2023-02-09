import React from 'react';
import PropTypes from 'prop-types';
import Anime from './Anime';

const Animelist = ({ topAnime }) => (
  <section>
    <ul>
      <Anime topAnimeData={topAnime.data} />
    </ul>
  </section>
);

Animelist.propTypes = {
  topAnime: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      mal_id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Animelist;
