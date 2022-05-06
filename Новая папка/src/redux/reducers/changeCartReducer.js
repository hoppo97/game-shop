import {DELETE__FROM__CART, ADD__TO__CART} from "../types"

const initialState = {
  itemsInCart: [

  ]
}

export const changeCartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD__TO__CART:
      return {  
         
        itemsInCart: [...state.itemsInCart, {...action.game}]
      }
    case DELETE__FROM__CART:
      return {
        
        itemsInCart: [...state.itemsInCart.filter(game => game.id !== action.payload)]
      }
    default: return state;
  }
  
}