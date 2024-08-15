import Genre from '../entities/Genre';
import APIClient from './api-client';

const genresService = new APIClient<Genre>('/genres');

export default genresService;
