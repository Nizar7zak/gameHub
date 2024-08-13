import { Heading } from '@chakra-ui/react';
import { Property } from '../App';
import { FetchResponse } from '../services/api-client';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
  property: Property;
}
const GameHeading = ({ property }: Props) => {
  const queryClient = useQueryClient();

  const cachedGenres = queryClient.getQueryData<FetchResponse<Genre>>([
    'genres',
  ]);

  const getSelectedGenreName = (genreId: number | undefined) =>
    cachedGenres?.results.find(genre => genre.id === genreId)?.name;

  const cachedPlatforms = queryClient.getQueryData<FetchResponse<Platform>>([
    'platforms',
  ]);

  const getSelectedPlatformName = (platformId: number | undefined) =>
    cachedPlatforms?.results.find(platform => platform.id === platformId)?.name;

  const heading = `
  ${getSelectedPlatformName(property.selectedPlatformId) || ''} 
  ${getSelectedGenreName(property.selectedGenreId) || ''} Games`;
  return (
    <Heading fontSize="5xl" mb={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
