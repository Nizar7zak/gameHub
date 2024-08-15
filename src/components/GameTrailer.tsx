import { Spinner } from '@chakra-ui/react';
import useGameTrailer from '../hooks/useGameTrailer';

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailer(gameId);

  const first = data?.results[0];

  if (error) throw error;

  return isLoading ? (
    <Spinner />
  ) : first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
