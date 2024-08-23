import React, { useState } from "react";
import DessertModal from "../modalComponent/dessertcomponent/DessertModal";

export const Dessert = ({ product }) => {
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
              ₦<span>{price.toLocaleString()}</span>
            </p>
            <p className="select">Unavailaible</p>
          </div>
        </div>
      </div>
      {open && <DessertModal data={product} handleClose={handleClose} />}
    </>
  );
};
