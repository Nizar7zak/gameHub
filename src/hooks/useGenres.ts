import { useQuery } from '@tanstack/react-query';
import apiClient, { FetchResponse } from '../services/api-client';
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  const { data, error, isLoading } = useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
    staleTime: 1000 * 24 * 60 * 60,
    initialData: { count: genres.length, results: genres },
  });
  return { data, error, isLoading };
};

export default useGenres;
