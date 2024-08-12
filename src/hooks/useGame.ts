import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from '../services/api-client';
import { Property } from '../App';
import { Platform } from './usePlatforms';
import gamesService from '../services/gamesService';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGame = (selectedProperty: Property) => {
  const { data, error, isLoading } = useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', selectedProperty],
    queryFn: () =>
      gamesService.getAll({
        params: {
          genres: selectedProperty.selectedGenre?.id,
          parent_platforms: selectedProperty.selectedPlatform?.id,
          ordering: selectedProperty.selectedSort,
          search: selectedProperty.searchText,
        },
      }),
  });
  return { data, error, isLoading };
};

export default useGame;
