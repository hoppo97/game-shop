import React from "react";
import { totalCalcPrice } from "../../utils";
import { Button } from "../../button";
import { CartItem } from "../CartItem";

import "./CartMenu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="CartMenu">
      <div className="CartMenu__games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="CartMenu__arrange">
          <div className="CartMenu__total-price">
            <span>Итого:</span>
            <span>{totalCalcPrice(items)} руб.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};
