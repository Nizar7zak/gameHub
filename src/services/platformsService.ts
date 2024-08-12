import { Platform } from '../hooks/usePlatforms';
import APIClient from './api-client';

const platformsService = new APIClient<Platform>('/platforms/lists/parents');

export default platformsService;
