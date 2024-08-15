import { Game } from '../hooks/useGames';
import APIClient from './api-client';

const gameService = new APIClient<Game>('/games');

export default gameService;
