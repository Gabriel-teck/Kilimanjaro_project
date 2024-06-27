import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box className="footer-container">
      <div className="footer-col">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="location">Location</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contacts</Link>
          <Link to="privacy">Privacy</Link>
          <Link to="terms">Terms and Conditions</Link>
        </div>
        <div className="footer-icons">
          <Link target="_blank" to="https://www.instagram.com/pizzajungleng">
            <img src="https://pizzajungleng.com/images/facebook.svg" alt="" />
          </Link>
          <Link target="_blank" to="https://twitter.com/PizzaJungleNG">
            <img
              width="40px"
              src="https://pizzajungleng.com/images/twitter-x-logo.svg"
              alt=""
            />
          </Link>
          <Link target="_blank" to="https://www.facebook.com/PizzaJungleNG">
            <img src="https://pizzajungleng.com/images/instagram.svg" alt="" />
          </Link>
        </div>
      </div>
      <Box
        className="footer-copyright"
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "16px",
          color: "#141423",
        }}
      >
        <p>
          © Copyright 2024 - Pizza Jungle - Pizza Jungle is a subsidiary of
          Sundry Foods Limited.
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
