import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import Detail from './Detail';

const Detaillist = ({ animeDetail }) => {
  const { title } = animeDetail;

  const styleUser = { color: 'white' };
  return (
    <section className="detailSection">
      <div
        className="containerSection"
        style={{
          backgroundImage: `url(${animeDetail.images.jpg.large_image_url})`,
          backgroundSize: '5rem 5rem',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top 2rem left 5rem',
        }}
      >
        <h2>
          {title}
        </h2>
        <Link
          to="/"
          className="back"
        >
          <IoArrowBackCircleOutline style={styleUser} />
        </Link>
      </div>
      <h3>
        DETAILS
      </h3>
      <ul>
        <Detail animeDetail={animeDetail} />
      </ul>
    </section>
  );
};

Detaillist.propTypes = {
  animeDetail: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        large_image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Detaillist;
