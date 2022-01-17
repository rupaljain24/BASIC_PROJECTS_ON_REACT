import React from "react";

function CartItem({ id, title, price, img, amount }) {
  return (
    <article className="cart-item">
      <img src={img} alt={title} height='200px' />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => console.log("remove item")}
        >
          Add
        </button>
      </div>
    </article>
  );
}

export default CartItem;
