import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  item: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ item, children }: Props) => {
  return (
    <Box marginY={5} >
      <Heading as="dt" color="gray.600" fontSize="md">
        {item}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
