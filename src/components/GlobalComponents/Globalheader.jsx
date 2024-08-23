import React from "react";
import { useState } from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../../pages/Cart";

const Header = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const handleCartClicked = () => {
    console.log("yes");
    setShowCartModal(!showCartModal);
  };

  const onClose = () => {
    setShowCartModal(showCartModal);
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="1.2rem 10.1rem"
      backgroundColor="#fff"
      height={"50px"}
      position={"fixed"}
      top={0}
      right={0}
      left={0}
      zIndex={2}
    >
      <Box>
        <img
          src="https://pizzajungleng.com/images/Logo.svg"
          alt="pizz logo"
          style={{ height: "50px" }}
        />
      </Box>
      <Box className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "currentlyActive" : null)}
        >
          Order Now
        </NavLink>
        <NavLink
          to="location"
          className={({ isActive }) => (isActive ? "currentlyActive" : null)}
        >
          Locations
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "currentlyActive" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? "currentlyActive" : null)}
        >
          Contact
        </NavLink>
      </Box>
      <Box className="header-nav-2" display="flex" alignItems="center">
        <Box onClick={handleCartClicked}>
          <img
            className="img-cart"
            src="https://pizzajungleng.com/images/cart-item.png"
            alt="cart logo"
          />
          <span
            style={{
              backgroundColor: "#ff8503",
              padding: "1px",
              position: "relative",
              top: "-55px",
              left: "37px",
              borderRadius: "50%",
              fontSize: "12px",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              display: "flex",
              width: "20px",
              height: "20px",
            }}
          >
            {totalQuantity}
          </span>
          {showCartModal && <Cart onClose={onClose} />}
        </Box>
        <Link className="nav-btn first" to="login">
          Login
        </Link>
        <Link className="nav-btn second" to="signup">
          Signup
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
