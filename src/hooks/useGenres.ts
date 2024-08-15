import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from '../services/api-client';
import genresService from '../services/genresService';
import genres from '../data/genres';
import ms from 'ms';
import { Genre } from '../entities/Genre';

const useGenres = () => {
  const { data, error, isLoading } = useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: genresService.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });
  return { data, error, isLoading };
};

export default useGenres;
