import React, { useEffect, useState, useMemo } from "react";
import Cart from "../../assets/cart-item.png";
import { PizzaSelector } from "./PizzaSelector";
import { PizzaTypeButton } from "./PartyDeals";
import { pizzaType } from "./PartyDeals";
const megeDealbutton = [
  {
    name: "Pizza Deal",
    id: "1",
  },
  {
    name: "Free Pizza",
    id: "2",
  },
];

export const MegaDeals = ({ onClose }) => {
  const [activeMegaDealButton, setActiveMegaDealButton] = useState(
    megeDealbutton[0].id
  );
  const [buttonName, setButtonName] = useState("");
  const [megaSelections, setMegaSelections] = useState({});
  const [choosenPizzaType, setChoosenPizzaType] = useState(pizzaType[0].name);

  const calculatePrices = useMemo(() => {
    const sum = Object.values(megaSelections).reduce((total, initial) => {
      const pizzaPrice = initial.pizza ? initial.pizza.price : 0;
      let toppingPrice = 0;
      if (initial.toppings) {
        toppingPrice = initial.toppings.reduce(
          (accumulator, currentTopping) => accumulator + currentTopping.price,
          0
        );
      }

      return total + pizzaPrice + toppingPrice;
    }, 0);
    console.log("price", sum.toLocaleString());
    return sum.toLocaleString();

    // let sum = 0;
    // Object.keys(megaSelections).forEach((pizzaKeys) => {
    //   sum += megaSelections[pizzaKeys].pizza.price;
    //   megaSelections[pizzaKeys].toppings.forEach(
    //     (toppingKey) => (sum += toppingKey.price)
    //   );
    // });
    // console.log("price", sum.toLocaleString());
  }, [megaSelections]);

  useEffect(() => {
    const selectedBtn = megeDealbutton.find(
      (btn) => btn.id == activeMegaDealButton
    );
    setButtonName(selectedBtn.name);

    //calling the pizzaType function,so as to fire when this modal is clicked
    const currentTypeName = choosenPizzaType;
    selectPizzaType(currentTypeName);
  }, []);

  //function handling the deals buttons
  const handleClickBtn = (e) => {
    setActiveMegaDealButton(e.target.id);
    const selectedBtn = megeDealbutton.find((btn) => btn.id == e.target.id);
    setButtonName(selectedBtn.name);
  };

  //Pizza  selector function
  const selectedPizza = (pizza) => {
    const previousState = {
      [buttonName]: { ...megaSelections[buttonName], pizza },
    };
    console.log(previousState, "yes");
    setMegaSelections(previousState);
  };

  //Ingredients  selector function
  const selectedIngredients = (ingredients) => {
    const previousState = {
      [buttonName]: { ...megaSelections[buttonName], ingredients },
    };
    console.log(previousState, "ingre");
    setMegaSelections(previousState);
  };

  //Toppings  selector function
  const selectedToppings = (toppings) => {
    const previousState = {
      [buttonName]: { ...megaSelections[buttonName], toppings },
    };
    console.log(previousState, "toppings");
    setMegaSelections(previousState);
  };

  //Pizza type selector function
  const selectPizzaType = (pizzaTypeName) => {
    setChoosenPizzaType(pizzaTypeName);
    const previousState = {
      [buttonName]: { ...megaSelections[buttonName], pizzaTypeName },
    };
    console.log(previousState, "pizzaTypeName");
    setMegaSelections(previousState);
  };
  return (
    <>
      <div className="modalBackground5">
        <div className="modalContainer5">
          <div className="modal-dialog modal-dialog-centered custom-modal">
            <div className="modal-content product-modal">
              <div className="modal-header p-0">
                <button type="button" className="btn-close ms-auto pt-3 pe-5">
                  <span onClick={onClose} style={{ border: "none" }}>
                    X
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="rw popup">
                  <div className="col-sm col12 col-img mx-auto">
                    <div className="popup_img text-center">
                      <img
                        src="https://admin.pizzajungleng.com/storage/gallery/Pizza_in_Nigeria__-_Copy_(2)_1701208419.jpg"
                        alt="deals"
                        className="deals"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-details">
                      <h3 className="popup_title">Mega Tuesday Deal</h3>
                      <p className="popup_description">
                        Buy 1 Large Pizza and get 1 free Medium Pizza
                      </p>
                      <div className="popup_select d-flex justify-content-between">
                        <div className="popup_select-size me-4">
                          {megeDealbutton.map((btn, index) => (
                            <button
                              className={
                                activeMegaDealButton == btn.id
                                  ? "selected"
                                  : undefined
                              }
                              key={index}
                              id={btn.id}
                              onClick={handleClickBtn}
                            >
                              {btn.name}
                            </button>
                          ))}
                        </div>
                        <div>
                          <div className="topping">
                            <h6 className="topping_header">
                              Choose Your {buttonName}
                            </h6>
                            <div className="d-flex flex-wrap gap-3">
                              <PizzaSelector
                                onPizzaSelected={selectedPizza}
                                onIngredientSelected={selectedIngredients}
                                onToppingsSelected={selectedToppings}
                              />
                              <PizzaTypeButton
                                onPizzaTypeSelect={selectPizzaType}
                                currentType={choosenPizzaType}
                              />
                            </div>
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
                      <span className="amount">{` ₦${calculatePrices}`}</span>
                      <span className="popup_cart">
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
