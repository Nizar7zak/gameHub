import { Game } from '../hooks/useGames';
import APIClient from './api-client';

const gamesService = new APIClient<Game>('/games');

export default gamesService;
