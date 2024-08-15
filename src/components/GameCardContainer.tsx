import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      className="game-card"
      _hover={{
        transform: 'scale(1.05)',
      }}
      transition="transform 0.2s ease-out"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
