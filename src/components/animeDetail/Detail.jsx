import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

const Detail = ({ animeDetail }) => {
  const {
    duration,
    episodes,
    members,
    popularity,
    rank,
    rating,
    score,
    season,
    source,
    year,
  } = animeDetail;
  const styleUser = { color: 'white' };
  return (
    <>
      <li key={1}>
        <p>
          Duration
        </p>
        <div>
          {duration}
        </div>
        <Link
          to="/"
          className="smallBack"
        >
          <IoArrowBackCircleOutline style={styleUser} />
        </Link>
      </li>
      <li key={2}>
        <p>
          Episodes
        </p>
        <div>
          {episodes}
        </div>
        <Link
          to="/"
          className="smallBack"
        >
          <IoArrowBackCircleOutline style={styleUser} />
        </Link>
      </li>
      <li key={3}>
        <p>
          Members
        </p>
        <div>
          {members}
        </div>
        <Link
          to="/"
          className="smallBack"
        >
          <IoArrowBackCircleOutline style={styleUser} />
        </Link>
      </li>
      <li key={4}>
        <p>
          Popularity
        </p>
        <div>
          {popularity}
        </div>
        <Link
          to="/"
          className="smallBack"
        >
          <IoArrowBackCircleOutline style={styleUser} />
        </Link>
      </li>
      <li key={5}>
        <p>
          Rank
        </p>
        <div>
          {rank}
        </div>
        <Link
          to="/"
          className="smallBack"
        >
          <IoArrowBackCircleOutline style={styleUser} />
        </Link>
      </li>
      <li key={6}>
        <p>
          Rating
        </p>
        <div>
          {rating}
        </div>
        <Link
          to="/"
          className="smallBack"
        >
          <IoArrowBackCircleOutline style={styleUser} />
        </Link>
      </li>
      <li key={7}>
        <p>
          Score
        </p>
        <div>
          {score}
        </div>
        <Link
          to="/"
          className="smallBack"
        >
          <IoArrowBackCircleOutline style={styleUser} />
        </Link>
      </li>
      <li key={8}>
        <p>
          Season
        </p>
        <div>
          {season}
        </div>
        <Link
          to="/"
          className="smallBack"
        >
          <IoArrowBackCircleOutline style={styleUser} />
        </Link>
      </li>
      <li key={9}>
        <p>
          Source
        </p>
        <div>
          {source}
        </div>
        <Link
          to="/"
          className="smallBack"
        >
          <IoArrowBackCircleOutline style={styleUser} />
        </Link>
      </li>
      <li key={10}>
        <p>
          Year
        </p>
        <div>
          {year}
        </div>
        <Link
          to="/"
          className="smallBack"
        >
          <IoArrowBackCircleOutline style={styleUser} />
        </Link>
      </li>
    </>
  );
};

Detail.propTypes = {
  animeDetail: PropTypes.shape({
    episodes: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    season: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    members: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
  }).isRequired,
};
export default Detail;
