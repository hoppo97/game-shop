import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GameBuy.css'
import { Button } from '../../button/button';
import { axiosDeleteFromCart, axiosPostToCart, } from '../../../redux/actions/actions';

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state?.changeCartReducer.itemsInCart);

  const isItemInCart = items && items.some(item => parseInt(item.id) === game.id);
  
  const handleClick = (e) => {
    console.log('22');
    e.stopPropagation();
    if( isItemInCart ) {
      dispatch(axiosDeleteFromCart(game.id));
    } else {
      dispatch(axiosPostToCart(game));
      console.log(items);
    }
  }
 
  return (
    <div className="GameBuy">
        <span className="GameBuy__price">{game.price} руб.</span>
        <Button key={game.id}
          type={isItemInCart ? "secondary" : "primary"}
          onClick={handleClick}
        >
        {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
        </Button>
    </div>
  )
}

