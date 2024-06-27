import React, { useState } from "react";
import LocationSelector, { states } from "./LocationSelector";
import { Box } from "@mui/material";

const MenuHeader = () => {
//   const [state, setState] = useState("Select State");
//   const [selectState, setSelectState] = useState([]);

//   const changeState = (e) => {
//     setState(e.target.value);
//     const selectedItem = states.find(
//       (state) => state.state_id == e.target.value
//     );
//     setSelectState(selectedItem.restaurants);
//   };

  return (
    <>
      <Box
        backgroundColor="#ffe8cf"
        paddingTop=".5rem"
        width="100%"
        position="fixed"
        top="5.4rem"
        left="0"
        right="0"
        z-index="10"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          maxWidth="1320px"
          marginLeft="auto"
          marginRight="auto"
        >
          <Box className="nav-pills">
            <button className="nav-item">
              <img className="nav-img"
                src="https://pizzajungleng.com/images/deals-icon.svg"
                alt="deals"
              />
              Deals
            </button>
            <button className="nav-item">Classic Pizza</button>
            <button className="nav-item">Special Pizza</button>
            <button className="nav-item">Pj Sidekick</button>
            <button className="nav-item">Drinks</button>
            <button className="nav-item">Desserts</button>
          </Box>
          <LocationSelector />
          {/* <form className="select-row">
            <select
              value={state}
              onChange={changeState}
              className="select-row-form"
            >
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option value={state.state_id} key={index}>
                  {state.name}
                </option>
              ))}
            </select>
            <select className="select-row-form">
              <option value="">Choose Restaurant</option>
              {selectState.map((res, index) => (
                <option value={res.name1} key={index}>
                  {res.name1}
                </option>
              ))}
            </select>
          </form> */}
        </Box>
      </Box>
    </>
  );
};

export default MenuHeader;
