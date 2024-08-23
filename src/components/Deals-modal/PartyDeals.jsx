import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from "react";
import Cart from "../../assets/cart-item.png";
import { PizzaSelector } from "./PizzaSelector";
import { toppings } from "../../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

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

export const pizzaType = [
  {
    name: "Traditional",
    id: "1",
  },
  {
    name: "Thin",
    id: "2",
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

export const PizzaTypeButton = ({ onPizzaTypeSelect, currentType }) => {
  console.log("current value", currentType);
  const handleClickPizzaType = (e) => {
    const choosenPizzaType = pizzaType.find((item) => item.id === e.target.id);
    onPizzaTypeSelect(choosenPizzaType.name);
  };

  return (
    <>
      <div>
        {pizzaType.map((pizzaTypeBtn, index) => (
          <button
            key={index}
            id={pizzaTypeBtn.id}
            className={
              currentType === pizzaTypeBtn.name
                ? "selected-pizza-type"
                : undefined
            }
            onClick={handleClickPizzaType}
          >
            {pizzaTypeBtn.name}
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
  const [selections, setSelections] = useState({});
  const [selectedButtonName, setSelectedButtonName] = useState("");
  const [choosenPizzaType, setChoosenPizzaType] = useState(pizzaType[0].name);

  //from redux
  const dispatch = useDispatch();

  //function that handles the manipulation of how prices are calculated
  const totalPrice = useMemo(() => {
    const sum = Object.values(selections).reduce((total, initial) => {
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
    // Object.keys(selections).forEach((pizzaKeys) => {
    //   sum += selections[pizzaKeys].pizza.price;
    //   selections[pizzaKeys].toppings.forEach(
    //     (toppingKey) => (sum += toppingKey.price)
    //   );
    // });
    // console.log("price", sum.toLocaleString());
  }, [selections]);

  //function that handles the manipulation of pizza
  const selectPizza = (pizza) => {
    console.log(pizza, "first pizza");
    // setFirstPizza(pizza);
    const previousState = {
      [selectedButtonName]: { ...selections[selectedButtonName], pizza },
    };
    console.log(previousState, "yes");
    setSelections(previousState);

    // setSelections((previousState) => ({
    //   ...previousState,
    //   [selectedButtonName]: {
    //     ...selections[selectedButtonName],
    //     pizza,
    //   },
    // }));
  };

  //function that handles the manipulation of Toppings
  const selectToppings = (toppings) => {
    console.log(toppings, "topps");
    // setFirstPizza(toppings);
    const previousState = {
      [selectedButtonName]: { ...selections[selectedButtonName], toppings },
    };
    console.log("SELECTION", previousState);
    setSelections(previousState);
    // Or it can be written this way

    // setSelections((previousState) => ({
    //   ...previousState,
    //   [selectedButtonName]: {
    //     ...selections[selectedButtonName],
    //     toppings,
    //   },
    // }));
  };
  //function that handles the manipulation of Ingredients
  const selectIngredient = (ingredientsRemoved) => {
    console.log("SELECTED INGREDIENT:", ingredientsRemoved);
    // setFirstPizza(ingredients);
    const previousState = {
      [selectedButtonName]: {
        ...selections[selectedButtonName],
        ingredientsRemoved,
      },
    };
    console.log(previousState, "yes");
    setSelections(previousState);
    // setSelections((previousState) => ({
    //   ...previousState,
    //   [selectedButtonName]: {
    //     ...selections[selectedButtonName],
    //     ingredients,
    //   },
    // }));
  };

  const selectPizzaType = (pizzaTypeName) => {
    setChoosenPizzaType(pizzaTypeName);
    const previousState = {
      [selectedButtonName]: {
        ...selections[selectedButtonName],
        pizzaTypeName,
      },
    };
    console.log(previousState, "yes");
    setSelections(previousState);
  };

  //function that handles the manipulation buttons clicked
  const onSelectionOfButton = (buttonName) => {
    // console.log("SELECTED BUTTON NAME:", buttonName);
    const currentTypeName = choosenPizzaType;
    console.log("value", currentTypeName);
    setSelectedButtonName(buttonName);
    selectPizzaType(currentTypeName);
  };

  const addCart = () => {
    const items = selections;
    console.log(items, "New Cart");
    dispatch(addToCart(items));
    // setCartItems(items);
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
                      <p className="popup_description">
                        Buy 5 Large Pizza And Get 1 Large Pizza Free
                      </p>
                      <div className="popup_select d-flex justify-content-between">
                        <div className="popup_select-size me-4">
                          <Button onButtonSelected={onSelectionOfButton} />
                        </div>
                        <div>
                          <div className="topping">
                            <h6 className="topping_header">
                              Choose Your {selectedButtonName}
                            </h6>
                            <div className="d-flex flex-wrap gap-3">
                              <PizzaSelector
                                targetPizza={currentPizza}
                                onIngredientSelected={selectIngredient}
                                onPizzaSelected={selectPizza}
                                onToppingsSelected={selectToppings}
                                // onToppingsClicked={selectedCheck}
                              />
                              <div>
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
              </div>
              <div className="modal-footer">
                <div className="ms-auto product-price">
                  <div className="popup_button d-flex justify-content-between w-100">
                    <p className="popup_pricing">
                      <span className="amount">{` ₦${totalPrice}`}</span>
                      <span className="popup_cart" onClick={addCart}>
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
