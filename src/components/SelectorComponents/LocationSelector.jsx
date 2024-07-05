import React, { useState } from "react";

export const states = [
  {
    state_id: 1,
    name: "kano",
    restaurants: [
      {
        name1: "first restuarant",
      },
      {
        name1: "third restuarant",
      },
    ],
  },
  {
    state_id: 2,
    name: "Kastina",
    restaurants: [
      {
        name1: "first restuarant",
      },
      {
        name1: "second restuarant",
      },
    ],
  },
  {
    state_id: 3,
    name: "Yobe",
    restaurants: [
      {
        name1: "first restuarant",
      },
      {
        name1: "fifth restuarant",
      },
    ],
  },
  {
    state_id: 4,
    name: "Ogun",
    restaurants: [
      {
        name1: "first restuarant",
      },
      {
        name1: "fifth restuarant",
      },
    ],
  },
  {
    state_id: 5,
    name: "Lagos",
    restaurants: [
      {
        name1: "first restuarant",
      },
      {
        name1: "fifth restuarant",
      },
    ],
  },
  {
    state_id: 6,
    name: "Delta",
    restaurants: [
      {
        name1: "first restuarant",
      },
      {
        name1: "fifth restuarant",
      },
    ],
  },
  {
    state_id: 7,
    name: "Edo",
    restaurants: [
      {
        name1: "first restuarant",
      },
      {
        name1: "fifth restuarant",
      },
    ],
  },
  {
    state_id: 9,
    name: "Abia",
    restaurants: [
      {
        name1: "first restuarant",
      },
      {
        name1: "fifth restuarant",
      },
    ],
  },
];

const LocationSelector = ({ onResturantChange }) => {
  const [state, setState] = useState("Select State");
  const [restaurant, setRestaurant] = useState("Choose Restaurant");
  const [selectState, setSelectState] = useState([]);

  const changeState = (e) => {
    setState(e.target.value);
    const selectedItem = states.find(
      (state) => state.state_id == e.target.value
    );
    setSelectState(selectedItem.restaurants);
    // states.find((state) => state.state_id === e.target.value).restaurants
  };

  return (
    <div className="select">
      <form className="select_container">
        <select className="select_input" value={state} onChange={changeState}>
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option value={state.state_id} key={index}>
              {state.name}
            </option>
          ))}
        </select>
        <select className="select_input" onChange={onResturantChange}>
          <option value="">Choose Restaurant</option>
          {selectState.map((res, index) => (
            <option value={res.name1} key={index}>
              {res.name1}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default LocationSelector;
