import {DELETE__FROM__CART, ADD__TO__CART, CURRENT__GAME, GET__GAMES, GET__GAMES__TO_CART, LOADING, SET__CURRENT_PAGE} from "../types";
import axios from "axios";
import {AXIOS_CONFIG} from '../../axios.config';
const { CART_API, CURRENT_GAME_API, GAMES_API_WITH_PARAMS, } = AXIOS_CONFIG;

export function setItemInCart(game) {
  return {
    type: ADD__TO__CART,
    game
  };
};

export function deleteItemFromCart(id) {
  return {
    type: DELETE__FROM__CART,
    payload: id
  };
};

export function setCurrentGame(game) {
  return {
    type: CURRENT__GAME,
    payload: game
  };
};

export function getGames(games) {
  return {
    type: GET__GAMES,
    payload: games
  };
};

export function isLoading(loading) {
  return {
    type: LOADING,
    payload: loading
  };
};

export function getGamesToCart(games) {
  return {
    type: GET__GAMES__TO_CART,
    payload: {games}
  };
};

  export function setCurrnetPage(currentPage) {
    return {
      type: SET__CURRENT_PAGE,
      payload: currentPage
    };
};

const get = async (getState) => {
  try {
    const { 
      gamesReducer: { currentPage, pageSize },
    } = getState();

    const {data} = await axios.get(GAMES_API_WITH_PARAMS(currentPage, pageSize))
    return data;
    
  } catch (error) {
    console.log(error);
  };
};

export const searchGames = (query) => async (dispatch, getState) => {
  try {
    const games = await get(getState);

    const filterGames = games => games.filter((game) => game.title.toLowerCase().includes(query.toLowerCase()));
    dispatch(getGames(filterGames(games)));

  } catch (error) {
    console.log(error);
  };
};

export const fetchGetGames = (page) => async (dispatch, getState) => {
  try {
    dispatch(isLoading(true));
    if(page) {
      dispatch(setCurrnetPage(page));
    }

    const games = await get(getState);
    
    dispatch(getGames((games)));
    dispatch(isLoading(false));
  } catch (error) {
    console.error(error);
  };
};

export const fetchGetGamesToCart = () => async (dispatch, getState) => {
  try {
    const {data} = await axios.get(CART_API);
    const games = data;

      if(games) {
        dispatch(getGamesToCart(games));
      }
  } catch (error) {
    console.error(error);
  };
};

export const axiosPostToCart = (game) => (dispatch, getState) => {
  try {
    axios.post(CART_API, game);
    dispatch(setItemInCart(game));
  } catch (error) {
    console.error(error);
  };
};

export const axiosDeleteFromCart = (id) => (dispatch, getState) => {
  try {
    axios.delete(`${CART_API}/${id}`);
    dispatch(deleteItemFromCart(id));
  } catch (error) {
    console.error(error);
  };
};

export const getCurrentGame = (id) => async (dispatch, getState) => {
  try {
    const {data} = await axios.get(`${CURRENT_GAME_API}/${id}`);
    const game = data;
    dispatch(setCurrentGame(game));

  } catch (error) {
    console.error(error);
  };
};