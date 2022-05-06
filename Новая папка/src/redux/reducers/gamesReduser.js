import {GET__GAMES} from '../types';

const initialState = {
  games: []
}

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__GAMES: 
    return {
      games:  [ ...state.games, ...action.payload]
    }
    default: return state;
  }
}