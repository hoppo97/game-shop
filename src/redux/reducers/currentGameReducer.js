import {CURRENT__GAME} from './../types';


const initialState = {
  currentGame: null, 
}


export const currentGameReducer = (state = initialState, action) => {
  switch(action.type) {
    case CURRENT__GAME:
    return {
      ...state,
      currentGame: action.payload
    }
    default: return state;
  }

} 