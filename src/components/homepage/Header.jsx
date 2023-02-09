import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ topAnime }) => (
  <header>
    <h1>
      Top Anime
    </h1>
    {topAnime.pagination.items.count}
  </header>
);

Header.propTypes = {
  topAnime: PropTypes.shape({
    pagination: PropTypes.shape({
      items: PropTypes.shape({
        count: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Header;
