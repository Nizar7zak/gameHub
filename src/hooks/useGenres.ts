import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from '../services/api-client';
import genresService from '../services/genresService';
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
    queryFn: genresService.getAll,
    staleTime: 1000 * 24 * 60 * 60,
    initialData: genres,
  });
  return { data, error, isLoading };
};

export default useGenres;
