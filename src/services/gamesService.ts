import Game from '../entities/Game';
import APIClient from './api-client';

const gamesService = new APIClient<Game>('/games');

export default gamesService;
