import React, { useEffect, useState } from "react";
import Cart from "../../assets/cart-item.png";
import { PizzaSelector } from "./PizzaSelector";

const buttons = [
  {
    name: "1st Pizza",
    id: "1",
  },
  {
    name: "2nd Pizza",
    id: "2",
  },
  {
    name: "3rd Pizza",
    id: "3",
  },
  {
    name: "4th Pizza",
    id: "4",
  },
  {
    name: "5th Pizza",
    id: "5",
  },
  {
    name: "Free Pizza",
    id: "6",
  },
];

const Button = ({ onButtonSelected }) => {
  const [activeButtonId, setActiveButtonId] = useState(buttons[0].id);

  useEffect(() => {
    const selected = buttons.find((b) => b.id === activeButtonId);
    onButtonSelected(selected.name);
  }, []);

  const handleClick = (e) => {
    setActiveButtonId(e.target.id);
    const selected = buttons.find((b) => b.id === e.target.id);
    onButtonSelected(selected.name);
  };

  return (
    <>
      <div>
        {buttons.map((btn, index) => (
          <button
            key={index}
            id={btn.id}
            className={activeButtonId === btn.id ? "selected" : undefined}
            onClick={handleClick}
          >
            {btn.name}
          </button>
        ))}
      </div>
    </>
  );
};

export const PartyDeals = ({ onClose }) => {
  const emptyPizza = {
    pizzaId: null,
    ingredients: [],
    toppings: [],
  };
  const [currentPizza, setCurrentPizza] = useState(emptyPizza);
  const [firstPizza, setFirstPizza] = useState({});
  const [secondPizza, setSecondPizza] = useState("");
  const [thirdPizza, setThirdPizza] = useState("");
  const [fourthPizza, setFourthPizza] = useState("");
  const [fifthPizza, setFifthPizza] = useState("");
  const [freePizza, setFreePizza] = useState("");
  const [selections, setSelections] = useState({});
  const [selectedButtonName, setSelectedButtonName] = useState("");

  const selectPizza = (pizza) => {
    console.log("SELECTED PIZZA:", pizza);
    setFirstPizza(pizza);
    setSelections((previousState) => ({
      ...previousState,
      [selectedButtonName]: {
        ...selections[selectedButtonName],
        pizza,
      },
    }));
  };

  const selectIngredient = (ingredients) => {
    console.log("SELECTED INGREDIENT:", ingredients);
    setFirstPizza(ingredients);
    setSelections((previousState) => ({
      ...previousState,
      [selectedButtonName]: {
        ...selections[selectedButtonName],
        ingredients,
      },
    }));
  };

  const selectToppings = (toppings) => {
    console.log("SELECTED TOPPING:", toppings);
    setFirstPizza(toppings);
    setSelections((previousState) => ({
      ...previousState,
      [selectedButtonName]: {
        ...selections[selectedButtonName],
        toppings,
      },
    }));
  };

  const selectedCheck = () => {
    console.log("clicked");
  };

  const onSelectionOfButton = (buttonName) => {
    console.log("SELECTED BUTTON NAME:", buttonName);
    setSelectedButtonName(buttonName);
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
                          <Button onButtonSelected={onSelectionOfButton} />
                        </div>
                        <div>
                          <div className="topping">
                            <h6 class="topping_header">
                              Choose Your {selectedButtonName}
                            </h6>
                            <div className="d-flex flex-wrap gap-3">
                              <PizzaSelector
                                targetPizza={currentPizza}
                                onIngredientSelected={selectIngredient}
                                onPizzaSelected={selectPizza}
                                onToppingsSelected={selectToppings}
                                onToppingsClicked={selectedCheck}
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
                      <span class="amount">{` ${firstPizza.price} `} </span>
                      <span
                        class="popup_cart"
                        onClick={() => console.log(selections)}
                      >
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
