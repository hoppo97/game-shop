import React from 'react'
import { useDispatch } from 'react-redux';
import { GameCover } from '../GameCover';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { deleteItemFromCart } from '../../redux/actions/actions';

import './OrderItem.css'


export const OrderItem = ({ game }) => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id))
  }

  return (
    <div className="OrderItem">
      <div className="OrderItem__cover">
        <GameCover image={game.image}/>
      </div>
      <div className="OrderItem__title">
        <span>{game.title}</span>
      </div>
      <div className="OrderItem__price">
        <span>{game.price} руб.</span>
        <AiOutlineCloseCircle 
          size={25}
          className="CartItem__delete-icon"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

 
