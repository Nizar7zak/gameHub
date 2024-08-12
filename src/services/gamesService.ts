import { Game } from '../hooks/useGame';
import APIClient from './api-client';

const gamesService = new APIClient<Game>('/games');

export default gamesService;
