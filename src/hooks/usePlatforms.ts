import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from '../services/api-client';
import platformsService from '../services/platformsService';
import platforms from '../data/platforms';
import ms from 'ms';
import { Platform } from '../entities/Platform';

const usePlatforms = () => {
  const { data, error } = useQuery<FetchResponse<Platform>, Error>( {
    queryKey: [ 'platforms' ],
    queryFn: platformsService.getAll,
    staleTime: ms( '24h' ),
    initialData: platforms,
  } );
  return { data, error };
};

export default usePlatforms;
