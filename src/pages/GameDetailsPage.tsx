import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Heading, Spinner } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import ScreenShotsGrid from '../components/ScreenShotsGrid';

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText text={game.description_raw} maxChar={300} />
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <ScreenShotsGrid gameId={game.id} />
    </>
  );
};

export default GameDetailsPage;
