import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        sm: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="sm">
        <GridItem bgColor="yellow" area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem bgColor="red" area="main">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
