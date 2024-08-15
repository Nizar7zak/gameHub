import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';
import { GameScreenShots } from '../entities/GameScreenShots';

const useGameScreenShots = (gameId: number) => {
  const screenShotsService = new APIClient<GameScreenShots>(
    `/games/${gameId}/screenshots`
  );
  const { data, error, isLoading } = useQuery<
    FetchResponse<GameScreenShots>,
    Error
  >({
    queryKey: ['screenshots', gameId],
    queryFn: screenShotsService.getAll,
  });
  return { data, error, isLoading };
};

export default useGameScreenShots;
