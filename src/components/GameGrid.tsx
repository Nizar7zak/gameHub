import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosError } from 'axios';
import { Text } from '@chakra-ui/react';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const games = await apiClient.get<FetchGamesResponse>('/games');
        setGames(games.data.results);
      } catch (error) {
        setError((error as AxiosError).message);
      }
    };
    fetchGames();
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
