import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  topAnime: state.topAnime,
});

const AnimeDetailNotConectect = ({ topAnime }) => {
  const { index } = useParams();
  console.log(index, 'Index coming from URL');
  console.log(topAnime.topAnime.data[index], 'anime detail');
  return (
    <div>
      Perfil del Usuario
    </div>
  );
};

const AnimeDetail = connect(mapStateToProps)(AnimeDetailNotConectect);

export default AnimeDetail;
