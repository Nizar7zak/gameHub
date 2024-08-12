import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from '../services/api-client';
import genres from '../data/genres';
import genresService from '../services/genresService';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  const { data, error, isLoading } = useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: genresService.getAll,
    staleTime: 1000 * 24 * 60 * 60,
    initialData: { count: genres.length, results: genres },
  });
  return { data, error, isLoading };
};

export default useGenres;
