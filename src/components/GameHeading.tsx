import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameStore from '../store';

const GameHeading = () => {
  const {
    property: { selectedGenreId, selectedPlatformId },
  } = useGameStore();
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
