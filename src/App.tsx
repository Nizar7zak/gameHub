import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelected from './components/PlatformSelected';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        md: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
}

export default App;
