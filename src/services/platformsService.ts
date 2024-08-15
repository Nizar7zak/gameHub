import { Platform } from '../entities/Platform';
import APIClient from './api-client';

const platformsService = new APIClient<Platform>('/platforms/lists/parents');

export default platformsService;
