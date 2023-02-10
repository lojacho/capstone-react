import { useParams } from 'react-router-dom';

const AnimeDetail = () => {
  const { index } = useParams();
  console.log(index, 'Index coming from URL');
  return (
    <div>
      Perfil del Usuario
    </div>
  );
};

export default AnimeDetail;
