import { Property } from '../App';
import useData from './useData';
import { Platform } from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (property: Property) =>
  useData<Game>('/games', [property], {
    params: {
      genres: property.selectedGenre?.id,
      parent_platforms: property.selectedPlatform?.id,
      ordering: property.selectedSort,
    },
  });

export default useGames;
