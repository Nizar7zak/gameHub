import { Image, SimpleGrid } from '@chakra-ui/react';
import useGameScreenShots from '../hooks/useGameScreenShots';

interface Props {
  gameId: number;
}
const ScreenShotsGrid = ({ gameId }: Props) => {
  const { data, error } = useGameScreenShots(gameId);
  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
      {data?.results.map(item => <Image key={item.id} src={item.image} />)}
    </SimpleGrid>
  );
};

export default ScreenShotsGrid;
