import {DELETE__FROM__CART, ADD__TO__CART, CURRENT__GAME, GET__GAMES, GET__GAMES__TO_CART, LOADING, SET__CURRENT_PAGE, SET__TOTAL__COUNT} from "../types";
import axios from "axios";

export function setItemInCart(game) {
  return {
    type: ADD__TO__CART,
    game
  }
}

export function deleteItemFromCart(id) {
  return {
    type: DELETE__FROM__CART,
    payload: id
  }
}

export function setCurrentGame(game) {
  return {
    type: CURRENT__GAME,
    payload: game
  }
}

export function getGames(games) {
  return {
    type: GET__GAMES,
    payload: games
  }
}

export function isLoading(loading) {
  return {
    type: LOADING,
    payload: loading
  }
}

export function getGamesToCart(games) {
  return {
    type: GET__GAMES__TO_CART,
    payload: {games}
  }
}

  export function setCurrnetPage(currentPage) {
    return {
      type: SET__CURRENT_PAGE,
      payload: currentPage
    }
}


const get = async (getState) => {
  const { 
    gamesReducer: { currentPage, pageSize },
  } = getState();

  const {data} = await axios.get(`https://6263fc7598095dcbf929ae50.mockapi.io/games?page=${currentPage}&limit=${pageSize}`)
  return data;
}

export const searchGames = (query) => async (dispatch, getState) => {
 
  const games = await get(getState);

  console.log(games);
  const filterGames = games => games.filter((game) => game.title.toLowerCase().includes(query.toLowerCase()));
  dispatch(getGames(filterGames(games)));
}

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
  }
};

export const fetchGetGamesToCart = () => async (dispatch, getState) => {
  try {
    const {data} = await axios.get("https://6263fc7598095dcbf929ae50.mockapi.io/cart");
    const games = data;

      if(games) {
        dispatch(getGamesToCart(games))
      }
  } catch (error) {
    console.error(error);
  }
};

export const axiosPostToCart = (game) => (dispatch, getState) => {
  try {
    axios.post("https://6263fc7598095dcbf929ae50.mockapi.io/cart", game);
    dispatch(setItemInCart(game))
  } catch (error) {
    console.error(error);
  }
};

export const axiosDeleteFromCart = (id) => (dispatch, getState) => {
  try {
    axios.delete(`https://6263fc7598095dcbf929ae50.mockapi.io/cart/${id}`);
    dispatch(deleteItemFromCart(id))
  } catch (error) {
    console.error(error);
  }
};

export const  getCurrentGame = (id) => async (dispatch, getState) => {
  try {
    const {data} = await axios.get(`https://6263fc7598095dcbf929ae50.mockapi.io/currentGame/${id}`);
    const game = data;
    dispatch(setCurrentGame(game));

  } catch (error) {
    console.error(error);
  }
}