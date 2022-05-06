import { combineReducers } from "redux";
import { changeCartReducer } from './reducers/changeCartReducer';
import {currentGameReducer} from './reducers/currentGameReducer';
import {gamesReducer} from './reducers/gamesReduser';

export const rootReducer = combineReducers({
  changeCartReducer,
  currentGameReducer,
  gamesReducer
})