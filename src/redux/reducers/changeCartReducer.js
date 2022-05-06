import {DELETE__FROM__CART, ADD__TO__CART, GET__GAMES__TO_CART} from "../types"

const initialState = {
  itemsInCart: [

  ]
}

export const changeCartReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET__GAMES__TO_CART:
      return {
        ...state,
        itemsInCart: action.payload.games
      }
    case ADD__TO__CART:
      return {  
        ...state,
        itemsInCart: [...state.itemsInCart, {...action.game}]
      }
    case DELETE__FROM__CART:
      return {
        ...state,
        itemsInCart: [...state.itemsInCart.filter(game => game.id !== action.payload)]
      }
    default: return state;
  }
}