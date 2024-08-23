import React from "react";
import Deal1 from "../../assets/deals1.jpeg";
import Deal2 from "../../assets/deals2.jpeg";
import { PartyDeals } from "../Deals-modal/PartyDeals";
import {MegaDeals} from "../Deals-modal/MegaDeals"

export const TopDeals = ({ handleToggleImage1,showModal1,handleToggleImage2,showModal2,onClose }) => {
  return (
    <>
      <div className="top-deals">
        <h1 className="deals-header">Top Deals</h1>
        <div className="deal-image-row">
          <div className="deal-img-container">
            <img
              className="deal-img"
              src={Deal1}
              alt="Deals image"
              onClick={handleToggleImage1}
            ></img>
            {showModal1 && <PartyDeals  onClose={onClose} />}
          </div>
          <div className="deal-img-container">
            <img
              className="deal-img"
              src={Deal2}
              alt="Deals image"
              onClick={handleToggleImage2}
            ></img>
            {showModal2 && <MegaDeals  onClose={onClose} />}
          </div>
        </div>
      </div>
    </>
  );
};
