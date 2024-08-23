import React from "react";
import "../dessertcomponent/desser.css";

const DessertModal = ({ data, handleClose }) => {
  const { name, imgUrl, details, price } = data;
  return (
    <>
      <div className="backdrop">
        <div className="Dessert-Modal">
          <div onClick={handleClose} className="closeBtn">
            <span>&times;</span>
          </div>
          <div className="Modal-scroll">
            <div>Product Unavailaible</div>
          </div>
          <div className="Dessert-Modal-body">
            <div className="mg-3">
              <p class="text-center">
                Sorry, <b>{name}</b> is currently <b>Unavailable</b>. Please
                select another Product
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DessertModal;
