import { Heading } from '@chakra-ui/react';
import { Property } from '../App';

interface Props {
  property: Property;
}
const GameHeading = ({ property }: Props) => {
  const heading = `${property.selectedPlatform?.name || ''} ${property.selectedGenre?.name || ''} Games`;
  return (
    <Heading fontSize="5xl" mb={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
