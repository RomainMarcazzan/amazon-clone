import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = ({ id, title, price, rating, image }) => {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
        <p className="checkoutProduct__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
