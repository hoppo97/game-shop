import React from "react";
import "./CartBlock.css";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../CartMenu";
import { ItemsInCart } from "../../ItemsInCart";
import { totalCalcPrice } from "../../utils";
import { useNavigate } from "react-router-dom";

export const CartBlock = () => {
  const items = useSelector((state) => {
    const { changeCartReducer } = state;
    return changeCartReducer.itemsInCart;
  })
  

  const totalPrice = totalCalcPrice(items);
  const navigate = useNavigate();

  const [isCartMenuVisible, setIsCartMenuVisible] = React.useState(false);

  const toggleVisibleCartMenu = () => {
    setIsCartMenuVisible((isCartMenuVisible) => !isCartMenuVisible);
  };

  const handleClick = React.useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        color="white"
        size={25}
        className="cart-icon"
        onClick={toggleVisibleCartMenu}
      />
      {totalPrice ? (
        <span className="cart-block__price">{totalCalcPrice(items)} руб.</span>
      ) : <span className="cart-block__price"></span>}
      {isCartMenuVisible ? (
        <CartMenu items={items} onClick={handleClick} />
      ) : null}
    </div>
  );
};
