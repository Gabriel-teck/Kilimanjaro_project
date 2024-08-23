import React from "react";
import CloseRed from "../assets/close-red.png";

const Cart = ({ onClose }) => {
  return (
    <>
      <div className="cart-modal-background">
        <div className="cart-modal-dialog">
          <div className="cart-header">
            <h3>Cart</h3>
            <img
              src={CloseRed}
              alt="red"
              height="15px"
            />
          </div>
          <div className="cart-body">
            <div className="cart-item-header">
              <h4>Title</h4>
              <p>X remove</p>
            </div>
            <div className="cart-item-body">
              <p>List of ingredients</p>
            </div>
            <div className="cart-item--footer">
              <p>Price</p>
              <button>-</button>
              <p>number</p>
              <button>+</button>
            </div>
          </div>
          <div className="cart-footer">
            <button>View or edit</button>
            <button>checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
