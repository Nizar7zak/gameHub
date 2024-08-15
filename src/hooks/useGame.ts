import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import gameService from '../services/gameService';
import { Game } from '../entities/Game';

const useGame = (slug?: string) => {
  const { data, error, isLoading } = useQuery<Game, Error>({
    queryKey: ['game', slug],
    queryFn: () => gameService.get(slug),
    staleTime: ms('24h'),
  });
  return { data, error, isLoading };
};

export default useGame;
