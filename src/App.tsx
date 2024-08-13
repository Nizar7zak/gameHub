import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelected from './components/PlatformSelected';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface Property {
  selectedGenreId?: number;
  selectedPlatformId?: number ;
  selectedSort: string;
  searchText: string;
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
        <NavBar
          onSearch={searchText =>
            setSelectedProperty({ ...selectedProperty, searchText })
          }
        />
      </GridItem>
      <Show above="md">
        <GridItem paddingX={2} area="aside">
          <GenreList
            selectedGenreId={selectedProperty.selectedGenreId}
            onSelectedGenreId={id =>
              setSelectedProperty({
                ...selectedProperty,
                selectedGenreId: id,
              })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box pl={2.5}>
          <GameHeading property={selectedProperty} />
          <Flex mb={5}>
            <Box mr={5}>
              <PlatformSelected
                selectedPlatformId={selectedProperty.selectedPlatformId}
                onSelectedPlatformId={id =>
                  setSelectedProperty({
                    ...selectedProperty,
                    selectedPlatformId: id,
                  })
                }
              />
            </Box>
            <SortSelector
              selectedSort={selectedProperty.selectedSort}
              onSelectedSort={property =>
                setSelectedProperty({
                  ...selectedProperty,
                  selectedSort: property,
                })
              }
            />
          </Flex>
        </Box>
        <GameGrid selectedProperty={selectedProperty} />
      </GridItem>
    </Grid>
  );
}

export default App;
