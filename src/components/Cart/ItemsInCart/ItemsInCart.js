import React from 'react';
import './ItemsInCart.css';

export const ItemsInCart = ({ 
  quantity = 0
}) => {
 
  return quantity > 0 && (
    <div className="ItemsInCart">
      { quantity }
    </div>
  )
}


