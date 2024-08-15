import { Grid, Show, GridItem, Flex, Box } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelected from '../components/PlatformSelected';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        md: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        md: '200px 1fr',
      }}
    >
      <Show above="md">
        <GridItem paddingX={2} area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box pl={2.5}>
          <GameHeading />
          <Flex mb={5}>
            <Box mr={5}>
              <PlatformSelected />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
