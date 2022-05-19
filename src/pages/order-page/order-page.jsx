import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "../../components/OrderItem";
import { totalCalcPrice } from "../../components/utils";
import "./order-page.css";

export const OrderPage = () => {
  const items = useSelector((state) => {
    const { changeCartReducer } = state;
    return changeCartReducer.itemsInCart;
  });

  if (items.length < 1) {
    return <h1>Ваша корзина пуста</h1>;
  }

  return (
    <div className="OrderPage">
      <div className="OrderPage-left">
        {items.map((game) => (
          <OrderItem key={game.title} game={game} />
        ))}
      </div>
      <div className="OrderPage-right">
        <div className="order-page__total-price">
          <span>
            {items.length} товаров на сумму {totalCalcPrice(items)} руб.
          </span>
        </div>
      </div>
    </div>
  );
};
