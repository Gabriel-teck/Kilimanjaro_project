import React from "react";
import Cart from "../../../../assets/cart-item.png";
import "../pjsidekickcomponent/sidekick.css";

const SidekickModal = ({ data, handleClose }) => {
  const { name, imgUrl, details, price } = data;
  return (
    <>
      <div className="backdrop">
        <div className="Side-Modal">
          <div onClick={handleClose} className="closeBtn">
            <span>&times;</span>
          </div>
          <div className="Modal-scroll">
            <div style={{ opacity: "0" }}>yes</div>
          </div>
          <div className="Modal-body">
            <div className="Modal-body-container">
              <div className="Side-Modal-image-section">
                <img src={imgUrl} alt="image" className="rounded-circle"/>
              </div>
              <div className="Modal-details-section">
                <h4 className="details-title">{name}</h4>
                <p className="details-description">{details}</p>
                <div className="select-size-type-section">
                  <div className="select-size">
                    <button className="selected">Combo</button>
                  </div>
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

export default SidekickModal;
