import {DELETE__FROM__CART, ADD__TO__CART, CURRENT__GAME, GET__GAMES, GET__GAMES__TO_CART, LOADING} from "../types";
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
 

export const fetchGetGames = (query) => (dispatch, getState) => {
  try {
    dispatch(isLoading(true));
    fetch("https://6263fc7598095dcbf929ae50.mockapi.io/games")
      .then((res) => res.json())
      .then((games) => {
        const filterGames = games => games.filter((game) => game.title.toLowerCase().includes(query.toLowerCase()));
        // console.log(games);
        // console.log(filterGames(games))
        dispatch(getGames(!query ? games : filterGames(games)));
        dispatch(isLoading(false));
      });
  } catch (error) {
    console.error(error);
  }

};

export const fetchGetGamesToCart = () => (dispatch, getState) => {
  try {
    fetch("https://6263fc7598095dcbf929ae50.mockapi.io/cart")
      .then((res) => res.json())
      .then((games) => {
        if(games) {
          dispatch(getGamesToCart(games))
        }
      });
  } catch (error) {
    console.error(error);
  }
};

export const axiosPostToCart = (game) => (dispatch, getState) => {
  try {
    axios.post("https://6263fc7598095dcbf929ae50.mockapi.io/cart", game);
    console.log(game);
    dispatch(setItemInCart(game))
  } catch (error) {
    console.error(error);
  }
};

export const axiosDeleteFromCart = (id) => (dispatch, getState) => {
  try {
    axios.delete(`https://6263fc7598095dcbf929ae50.mockapi.io/cart/${id}`);
    console.log(id);
    dispatch(deleteItemFromCart(id))
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentGame = (id) => (dispatch, getState) => {
  try {
    axios.get(`https://6263fc7598095dcbf929ae50.mockapi.io/currentGame/${id}`).then(res => {
      const game = res.data;
      dispatch(setCurrentGame(game));
    });

  } catch (error) {
    console.error(error);
  }
}