import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import useGames from '../hooks/useGames';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  const count =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
  if (error) return <Text>{error.message}</Text>;
  return (
    <InfiniteScroll
      dataLength={count}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {isLoading &&
          skeletons.map(skeleton => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map(page =>
          page.results.map(game => (
            <GameCardContainer key={game.id}>
              <Link to={`/games/${game.slug}`}>
                <GameCard game={game} />
              </Link>
            </GameCardContainer>
          ))
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
