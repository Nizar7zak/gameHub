import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelected from './components/PlatformSelected';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';

export interface Property {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property>(
    {} as Property
  );
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
          <GenreList
            selectedProperty={selectedProperty.selectedGenre}
            onSelectedProperty={property =>
              setSelectedProperty({
                ...selectedProperty,
                selectedGenre: property,
              })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2.5} mb={5}>
          <PlatformSelected
            selectedProperty={selectedProperty.selectedPlatform}
            onSelectedProperty={property =>
              setSelectedProperty({
                ...selectedProperty,
                selectedPlatform: property,
              })
            }
          />
          <SortSelector />
        </HStack>
        <GameGrid selectedProperty={selectedProperty} />
      </GridItem>
    </Grid>
  );
}

export default App;
