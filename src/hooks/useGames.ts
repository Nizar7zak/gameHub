import { Property } from '../App';
import { Platform } from './usePlatforms';
import useData from './useData';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (property: Property) =>
  useData<Game>('/games', [property], {
    params: {
      genres: property.selectedGenre?.id,
      parent_platforms: property.selectedPlatform?.id,
      ordering: property.selectedSort,
      search: property.searchText,
    },
  });

export default useGames;
