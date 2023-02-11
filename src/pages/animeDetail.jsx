import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Detaillist from '../components/animeDetail/Detaillist';
import './animeDetail.scss';

const AnimeDetail = () => {
  const { index } = useParams();
  const animeDetail = useSelector((state) => state.topAnime.topAnime.data[index]);

  return (
    <main>
      <Detaillist animeDetail={animeDetail} />
    </main>
  );
};

export default AnimeDetail;
