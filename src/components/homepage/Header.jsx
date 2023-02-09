import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ topAnime }) => {
  console.log(topAnime);
  return (
    <div>
      <h1>
        Top Anime
      </h1>
      {topAnime.pagination.items.count}
    </div>
  );
};

Header.propTypes = {
  topAnime: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default Header;
