import {GET__GAMES, LOADING, SET__CURRENT_PAGE, SET__TOTAL__COUNT} from '../types';

const initialState = {
  games: [],
  pageSize: 6,
  totalUsersCount: 18,
  currentPage: 1,
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
    
    case SET__CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
      
    case SET__TOTAL__COUNT:
      return {
        ...state,
        totalUsersCount: action.payload
      }
    
    default: return state;
  }
}