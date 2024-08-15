import { useParams } from 'react-router-dom';

const GameDetailsPage = () => {
  const params = useParams();
  return <div>GamePage{params.id}</div>;
};

export default GameDetailsPage;
