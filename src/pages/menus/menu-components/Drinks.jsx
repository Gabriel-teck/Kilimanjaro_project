import React, { useState } from "react";
import DrinksModal from "../modalComponent/drinkscomponent/DrinksModal";

export const Drinks = ({ product }) => {
  const { id, price, imgUrl, name, details } = product;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="card" onClick={() => handleOpen()}>
        <div className="card-img">
          <img src={imgUrl} />
        </div>
        <div className="card-details">
          <div className="card-text">
            <h2>{name}</h2>
            <p>{details}</p>
          </div>
          <div className="card-price">
            <p className="price">
              from ₦<span>{price.toLocaleString()}</span>
            </p>
            <p className="select">Select</p>
          </div>
        </div>
      </div>
      {open && <DrinksModal data={product} handleClose={handleClose} />}
    </>
  );
};
