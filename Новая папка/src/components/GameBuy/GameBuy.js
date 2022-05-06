import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GameBuy.css'
import { Button } from '../button/button';
import { setItemInCart, deleteItemFromCart } from '../../redux/actions/actions';

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => {
    const { changeCartReducer } = state;
    return changeCartReducer.itemsInCart;
  })

  const isItemInCart = items.some(item => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if( isItemInCart ) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  }

  return (
    <div className="GameBuy">
        <span className="GameBuy__price">{game.price} руб.</span>
        <Button
          type={isItemInCart ? "secondary" : "primary"}
          onClick={handleClick}
        >
        {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
        </Button>
    </div>
  )
}

