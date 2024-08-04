import { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const games = await apiClient.get<FetchGamesResponse>('/games', {
          signal: controller.signal,
        });
        setGames(games.data.results);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
      }
      setIsLoading(false);
    };
    fetchGames();
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
