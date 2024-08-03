import { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const fetchGames = async () => {
      try {
        const games = await apiClient.get<FetchGamesResponse>('/games', {
          signal: controller.signal,
        });
        setGames(games.data.results);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
      }
    };
    fetchGames();
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
