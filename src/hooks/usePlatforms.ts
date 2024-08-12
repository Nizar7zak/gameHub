import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from './useData';
import apiClient from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () => {
  const { data, error } = useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then(res => res.data),
    staleTime: 1000 * 24 * 60 * 60,
  });
  return { data, error };
};

export default usePlatforms;
