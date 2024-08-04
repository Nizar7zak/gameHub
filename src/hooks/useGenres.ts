import { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchGenres = async () => {
      try {
        setIsLoading(true);
        const genres = await apiClient.get<FetchGenresResponse>('/genres', {
          signal: controller.signal,
        });
        setGenres(genres.data.results);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
      }
      setIsLoading(false);
    };
    fetchGenres();
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
