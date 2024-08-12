import { Genre } from '../hooks/useGenres';
import APIClient from './api-client';

const genresService = new APIClient<Genre>('/genres');

export default genresService;
