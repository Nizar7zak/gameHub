import { Game } from '../entities/Game';
import APIClient from './api-client';

const gameService = new APIClient<Game>('/games');

export default gameService;
