import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ topAnime }) => (
  <header>
    <h1>
      The Anime Hub
    </h1>
    <hr className="separator" />
    <p>
      {topAnime.pagination.items.count}
      &nbsp;most view animes
    </p>
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
