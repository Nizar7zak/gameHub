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

const useGames = ({ selectedGenre, selectedPlatform }: Property) =>
  useData<Game>('/games', [selectedGenre?.id, selectedPlatform?.id], {
    params: {
      genres: selectedGenre?.id,
      parent_platforms: selectedPlatform?.id,
    },
  });

export default useGames;
