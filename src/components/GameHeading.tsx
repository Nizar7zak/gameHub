import { Heading } from '@chakra-ui/react';
import { Property } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface Props {
  property: Property;
}
const GameHeading = ({ property }: Props) => {
  const selectedGenreName = useGenre(property.selectedGenreId);
  const getSelectedPlatformName = usePlatform(property.selectedPlatformId);
  const heading = `
  ${getSelectedPlatformName || ''} ${selectedGenreName || ''} Games`;
  return (
    <Heading fontSize="5xl" mb={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
