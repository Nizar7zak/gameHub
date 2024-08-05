import useData from './useData';
import { Genre } from './useGenres';
import { Platform } from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  parent_platforms: Platform | null
) =>
  useData<Game>('/games', [selectedGenre?.id, parent_platforms?.id], {
    params: {
      genres: selectedGenre?.id,
      parent_platforms: parent_platforms?.id,
    },
  });

export default useGames;
