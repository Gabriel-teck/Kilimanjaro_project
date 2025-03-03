import React, { useState } from "react";
import { toppings, pizzaProducts } from "../../data";

export const PizzaSelector = ({
  currentPizza = {},
  onPizzaSelected,
  onIngredientSelected,
  onToppingsSelected,
}) => {
  const [pizza, setPizza] = useState(
    currentPizza.pizzaId ? currentPizza.name : ""
  );
  const [selectedPizza, setSelectedPizza] = useState([]);
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [checkedToppings, setCheckedToppings] = useState([]);

  const choosePizza = (e) => {
    setPizza(e.target.value);
    const pizzaItem = pizzaProducts.find((items) => items.id == e.target.value);
    setSelectedPizza(pizzaItem.ingredients);
    onPizzaSelected(pizzaItem);
    // setPizza(currentPizza)
  };

  const onIngredientClicked = (e) => {
    const addIngredient = checkedIngredients.find((item) => item.id == e.id);
    if (!addIngredient) {
      const removedIngredients = [...checkedIngredients, e];
      setCheckedIngredients(removedIngredients);
      onIngredientSelected(removedIngredients);
    } else {
      const removedIngredients = checkedIngredients.filter(
        (item) => item.id !== e.id
      );
      setCheckedIngredients(removedIngredients);
      onIngredientSelected(removedIngredients);
    }
  };

  const onToppingsClicked = (e) => {
    const foundTopping = checkedToppings.find((topping) => topping.id == e.id);
    if (!foundTopping) {
      const toppings = [...checkedToppings, e];
      setCheckedToppings(toppings);
      onToppingsSelected(toppings);
    } else {
      const toppings = checkedToppings.filter((t) => t.id !== e.id);
      setCheckedToppings(toppings);
      onToppingsSelected(toppings);
    }
  };

  return (
    <>
      <section className="topping_container pizza-select">
        <form>
          <select value={pizza} onChange={choosePizza}>
            <option>Select</option>
            {pizzaProducts.map((pizza, index) => (
              <option value={pizza.id} key={index}>
                {pizza.name}
              </option>
            ))}
          </select>
        </form>
        {pizza && (
          <div>
            {selectedPizza.map((ingredient, index) => (
              <p
                key={index}
                className={
                  checkedIngredients.find((item) => item.id == ingredient.id)
                    ? "ingredients-selector"
                    : ""
                }
                onClick={() => onIngredientClicked(ingredient)}
              >
                {ingredient.name}
              </p>
            ))}
            <div>
              <h2>Choose Toppings</h2>
              {toppings.map((topping, index) => {
                return (
                  <>
                    <button
                      key={index}
                      id={topping.id}
                      className={
                        checkedToppings.find((t) => t.id === topping.id)
                          ? "toppingSelector"
                          : ""
                      }
                      onClick={() => onToppingsClicked(topping)}
                    >
                      <span>
                        <img
                          src={topping.imgUrl}
                          alt=""
                          width="40px"
                          height="18px"
                        />
                        <span>{topping.name}</span>
                        <span>-{topping.price}</span>
                      </span>
                    </button>
                  </>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
};
