import React from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
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
        <Box>
          <img
            className="img-cart"
            src="https://pizzajungleng.com/images/cart-item.png"
            alt="cart logo"
          />
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
