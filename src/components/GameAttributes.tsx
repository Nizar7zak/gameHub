import { SimpleGrid, Text } from '@chakra-ui/react';
import DefinitionItem from './DefinitionItem';
import CriticScore from './CriticScore';
import { Game } from '../entities/Game';

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem item="Platforms">
        {game?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem item="MetaScore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem item="Genres">
        {game.genres.map(genre => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem item="Publishers">
        {game.publishers.map(publisher => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
