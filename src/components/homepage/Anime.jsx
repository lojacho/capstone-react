import React from 'react';
import PropTypes from 'prop-types';

const Anime = ({ topAnimeData }) => (
  topAnimeData.map((anime) => (
    <li key={anime.mal_id}>
      <p>{anime.title}</p>
      <img
        src={anime.images.jpg.small_image_url}
        alt={anime.title}
      />
    </li>
  ))
);

Anime.propTypes = {
  topAnimeData: PropTypes.arrayOf(PropTypes.shape({
    mal_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        small_image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  })).isRequired,
};
export default Anime;
