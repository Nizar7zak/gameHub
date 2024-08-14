import { useInfiniteQuery } from '@tanstack/react-query';
import { FetchResponse } from '../services/api-client';
import { Platform } from './usePlatforms';
import gamesService from '../services/gamesService';
import ms from 'ms';
import { Property } from '../store';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGame = (selectedProperty: Property) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', selectedProperty],
    queryFn: ({ pageParam = 1 }) =>
      gamesService.getAll({
        params: {
          genres: selectedProperty.selectedGenreId,
          parent_platforms: selectedProperty.selectedPlatformId,
          ordering: selectedProperty.selectedSort,
          search: selectedProperty.searchText,
          page_size: 12,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
export default useGame;
