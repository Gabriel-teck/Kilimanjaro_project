import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../../pages/Cart";
import { auth, db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { setUser } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";

const Header = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const userFromState = useSelector((state) => state.auth.user);
  console.log("details", userFromState);

  const fetchLoginDetails = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log("authUser", user);
      const docRef = doc(db, "Users", user.uid);
      console.log("userDetails", userFromState);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // setLoggedIn(docSnap.data());
        console.log("dispatch", docSnap.data());
        dispatch(setUser(docSnap.data()));
        console.log("docSnap", docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchLoginDetails();
  }, []);

  const logOut = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.log(error.message);
    }
  };

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
        {userFromState ? (
          <>
            <div className="header_btn_" style={{ cursor: "pointer" }}>
              <div className="header_user" onClick={() => setOpen(!open)}>
                <span className="header_user_name">
                  {userFromState.firstname}
                </span>
                <span
                  style={{
                    width: "1em",
                    height: "1em",
                    verticalAlign: "middle",
                    fontSize:"1rem",
                    fontWeight:"800"
                  }}
                >
                  {open ? <AiOutlineUp /> : <AiOutlineDown />}
                </span>
                <div className={`header_dropdown ${open ? "open" : "close"}`}>
                  <div className="header_dropdown_wrapper">
                    <Link className="header_dropdown_item " to="/profile">
                      My Account
                    </Link>
                    <span className="header_dropdown_item" onClick={logOut}>
                      Log Out
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link className="nav-btn first" to="login">
              Login
            </Link>
            <Link className="nav-btn second" to="signup">
              Signup
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
