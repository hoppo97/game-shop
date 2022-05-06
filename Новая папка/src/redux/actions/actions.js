import {DELETE__FROM__CART, ADD__TO__CART, CURRENT__GAME, GET__GAMES} from "../types";

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


export function fetchGetGames() {
    fetch('https://6263fc7598095dcbf929ae50.mockapi.io/games')
      .then(res => res.json())
      .then(games => {
        console.log(games);
       getGames(games);
      })
}