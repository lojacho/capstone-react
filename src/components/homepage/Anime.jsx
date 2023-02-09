import React from 'react';
import PropTypes from 'prop-types';

const Anime = ({ topAnimeData }) => (
  topAnimeData.map((anime) => (
    <li key={anime.mal_id} />
  ))
);

Anime.propTypes = {
  topAnimeData: PropTypes.arrayOf(PropTypes.shape({
    mal_id: PropTypes.number.isRequired,
  })).isRequired,
};
export default Anime;
