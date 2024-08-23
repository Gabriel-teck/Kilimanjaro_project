import React from "react";
import Note from "../../../../assets/note.svg";
import Remove from "../../../../assets/remove.svg";
import Cart from "../../../../assets/cart-item.png";
import "./classicdeal.css";

const ClassicDealsModal = ({ data, handleClose }) => {
  const { name, imgUrl, details, price } = data;
  return (
    <>
      <div className="backdrop">
        <div className="Modal">
          <div onClick={handleClose} className="closeBtn">
            <span>&times;</span>
          </div>
          <div className="Modal-scroll">
            <div style={{ opacity: "0" }}>yes</div>
          </div>
          <div className="Modal-body">
            <div className="Modal-body-container">
              <div className="Modal-image-section">
                <img src={imgUrl} alt="image" />
              </div>
              <div className="Modal-details-section">
                <h4 className="details-title">{name}</h4>
                <p className="details-description">{details}</p>
                <div className="select-size-type-section">
                  <div className="select-size">
                    <button className="selected">Medium</button>
                    <button>Large</button>
                  </div>
                  <div className="select-size">
                    <button className="selected">Traditional</button>
                    <button>Thin</button>
                  </div>
                </div>
                <div className="mt-3">
                  <img src={Note} alt="note" className="noteI" />
                  <span className="small">
                    You can remove any ingredients from the pizza when ordering.
                  </span>
                </div>
                <div className="ingredients-details">
                  <p className="ingredient-list clicked">
                    Black Olives
                    <img src={Remove} alt="remove" />
                  </p>
                  <p className="ingredient-list">
                    Mozarella Cheese
                    <img src={Remove} alt="remove" />
                  </p>
                </div>
                <div className="tops-details">
                  <h5 className="tops-title">Choose Toppings</h5>
                  <div className="tops-container"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="Modal-footer">
            <div className="Modal-pricing">
              <div className="pricing-container">
                <p className="single-item-action">
                  <span className="single-item-cta">-</span>
                  <span className="Modal-quantity">1</span>
                  <span className="single-item-cta">+</span>
                </p>
                <p className="price-section">
                  <span className="amountP">₦42,500</span>
                  <span className="cartAdd">
                    Add To Cart
                    <img src={Cart} alt="cart" style={{ height: "18px" }} />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassicDealsModal;
