import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';
import GameTrailer from '../entities/GameTrailer';

const useGameTrailer = (gameId: number) => {
  const trailerService = new APIClient<GameTrailer>(`/games/${gameId}/movies`);
  const { data, error, isLoading } = useQuery<
    FetchResponse<GameTrailer>,
    Error
  >({
    queryKey: ['trailers', gameId],
    queryFn: trailerService.getAll,
  });
  return { data, error, isLoading };
};

export default useGameTrailer;
