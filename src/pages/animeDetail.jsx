import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  topAnime: state.topAnime,
});

const AnimeDetailNotConectect = ({ topAnime }) => {
  const { index } = useParams();
  console.log(index, 'Index coming from URL');
  console.log(topAnime.topAnime.data[index], 'anime detail');
  return (
    <main>
      Perfil del Usuario
    </main>
  );
};

const AnimeDetail = connect(mapStateToProps)(AnimeDetailNotConectect);

AnimeDetailNotConectect.propTypes = {
  topAnime: PropTypes.shape({
    topAnime: PropTypes.shape({
      data: PropTypes.arrayOf.isRequired,
    }).isRequired,
  }).isRequired,
};

export default AnimeDetail;
