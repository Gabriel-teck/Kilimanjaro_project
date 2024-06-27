import React from "react";
import Cart from "../../assets/cart-item.png";

export const Topdeals1 = ({ onClose1 }) => {
  return (
    <>
      <div className="modalBackground5">
        <div className="modalContainer5">
          <div className="modal-dialog modal-dialog-centered custom-modal">
            <div className="modal-content product-modal">
              <div className="modal-header p-0">
                <button type="button" className="btn-close ms-auto pt-3 pe-5">
                  <span onClick={onClose1} style={{ border: "none" }}>
                    X
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="rw popup">
                  <div className="col-sm col12 col-img mx-auto">
                    <div className="popup_img text-center">
                      <img
                        src="https://admin.pizzajungleng.com/storage/gallery/pj_party_promo3_1701208812.jpg"
                        alt="deals"
                        className="deals"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-details">
                      <h3 className="popup_title">Party Deals</h3>
                      <p class="popup_description">
                        Buy 5 Large Pizza And Get 1 Large Pizza Free
                      </p>
                      <div className="popup_select d-flex justify-content-between">
                        <div className="popup_select-size me-4">
                          <button className="popup-btn">
                            <span>1st Pizza</span>
                          </button>
                          <button className="popup-btn">
                            <span>2nd Pizza</span>
                          </button>
                          <button className="popup-btn">
                            <span>3rd Pizza</span>
                          </button>
                          <button className="popup-btn">
                            <span>4th Pizza</span>
                          </button>
                          <button className="popup-btn">
                            <span>5th Pizza</span>
                          </button>
                        </div>
                        <div>
                          <div className="topping">
                            <h6 class="topping_header">
                              Choose Your 1st Pizza
                            </h6>
                            <div className="d-flex flex-wrap gap-3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="ms-auto product-price">
                  <div className="popup_button d-flex justify-content-between w-100">
                    <p className="popup_pricing">
                      <span class="amount">₦0</span>
                      <span class="popup_cart">
                        Add To Cart
                        <img src={Cart} alt="cart" height="18" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
