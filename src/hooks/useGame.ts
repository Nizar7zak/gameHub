import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Game } from './useGames';
import gameService from '../services/gameService';

const useGame = (slug?: string) => {
  const { data, error, isLoading } = useQuery<Game, Error>({
    queryKey: ['game', slug],
    queryFn: () => gameService.get(slug),
    staleTime: ms('24h'),
  });
  return { data, error, isLoading };
};

export default useGame;
