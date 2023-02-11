import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const Anime = ({ topAnimeData }) => {
  const styleUser = { color: 'white' };
  return (
    topAnimeData.map((anime, index) => (
      <li
        key={anime.mal_id}
        style={{
          backgroundImage: `url(${anime.images.jpg.large_image_url})`,
          backgroundSize: '70% 70%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top 1.4rem left 0.5rem',
        }}
      >
        <h3>{anime.title}</h3>

        <Link
          to={`/anime/${index}`}
          className="forward"
        >
          <IoArrowForwardCircleOutline style={styleUser} />
        </Link>
        <p>{anime.rating}</p>
      </li>
    ))
  );
};

Anime.propTypes = {
  topAnimeData: PropTypes.arrayOf(PropTypes.shape({
    mal_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        large_image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  })).isRequired,
};
export default Anime;
