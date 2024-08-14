import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameStore from '../store';

const GameHeading = () => {
  const selectedGenreId = useGameStore(s => s.property.selectedGenreId);
  const selectedPlatformId = useGameStore(s => s.property.selectedPlatformId);

  const selectedGenreName = useGenre(selectedGenreId);

  const getSelectedPlatformName = usePlatform(selectedPlatformId);

  const heading = `
  ${getSelectedPlatformName || ''} ${selectedGenreName || ''} Games`;

  return (
    <Heading fontSize="5xl" mb={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
