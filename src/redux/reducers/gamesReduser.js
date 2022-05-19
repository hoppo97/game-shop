import {GET__GAMES, LOADING} from '../types';

const initialState = {
  games: [],
  loading: false,
}

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__GAMES: 
    return {
      ...state,
      games: action.payload
    }
    case LOADING: 
    return {
      ...state,
      loading: action.payload
    }
    default: return state;
  }
}