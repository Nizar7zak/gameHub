import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem bgColor={'blue'} area={'nav'}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem bgColor="yellow" area={'aside'}>
          Aside
        </GridItem>
      </Show>
      <GridItem bgColor={'red'} area={'main'}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
