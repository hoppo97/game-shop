import React from "react";
import "./CartItem.css";

export const CartItem = ({ title, price, id }) => {
  return (
    <div className="CartItem">
      <span>{title}</span>
      <div className="CartItem__price">
        <span>{price} руб.</span>
      </div>
    </div>
  );
};
