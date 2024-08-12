import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from '../services/api-client';
import platformsService from '../services/platformsService';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () => {
  const { data, error } = useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: platformsService.getAll,
    staleTime: 1000 * 24 * 60 * 60,
  });
  return { data, error };
};

export default usePlatforms;
