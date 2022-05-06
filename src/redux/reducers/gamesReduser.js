import {GET__GAMES} from '../types';

const initialState = {
  games: []
}

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__GAMES: 
    return {
      ...state,
      games: action.payload.games
    }
    default: return state;
  }
}