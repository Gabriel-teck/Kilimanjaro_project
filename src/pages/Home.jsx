import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import HandImg from "../assets/hand-green.svg";
import Deal1 from "../assets/deals1.jpeg";
import Deal2 from "../assets/deals2.jpeg";
import Phone from "../assets/mobile-phone.webp";
import Pizza from "../assets/pizza-illu.svg";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Topdeals1 } from "./modal/Topdeals1";
import { Topdeals2 } from "./modal/Topdeals2";
import "./modal/modalCss/modal.css";
import LocationSelector from "../components/LocationSelector";

const Home = () => {
  const navigate = useNavigate();
  

  //creating a state for the DealsModal
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  

  const changeRestaurant = (e) => {
    navigate("/menu");
  };

  //function for toggle deal images
  const handleToggleImage1 = () => {
    setShowModal1(!showModal1);
  };

  const handleToggleImage2 = () => {
    setShowModal2(!showModal2);
  };

  const onClose1 = () => {
    setShowModal1(false);
    
  };

  // const onClose2 = () => {
  //   setShowModal2(false);
  // };

  return (
    <Box>
      <div className="first-section">
        <div className="images">
          <img
            className="pizza-1"
            src="https://pizzajungleng.com/_next/image?url=%2Fimages%2Fpizza-img-1.webp&w=1080&q=75"
            alt="pizza-1"
          />
          <img
            className="pizza-2"
            src="https://pizzajungleng.com/_next/image?url=%2Fimages%2Fpizza-img-3.webp&w=1920&q=75"
            alt="pizza-2"
          />
        </div>
        <Box className="home_text">
          <Box className="home_text_header">
            <h1>
              Pizza Never Felt This Wild!
              <br></br>Order Now
            </h1>
          </Box>
          <p className="home_text_text">
            Choose from a variety of freshly made pizzas
          </p>

          <LocationSelector onResturantChange={changeRestaurant} />
        </Box>
      </div>
      <Box className="second-section">
        <img className="deal_hand_image" src={HandImg} alt="deal hand"></img>
        <div className="top-deals">
          <h1 className="deals-header">Top Deals</h1>
          <div className="deal-image-row">
            <div className="deal-img-container">
              <img
                className="deal-img"
                src={Deal1}
                alt="Deals image"
                onClick={handleToggleImage1}
              ></img>
              {showModal1 && <Topdeals1 onClose1={onClose1} />}
            </div>
            <div className="deal-img-container">
              <img
                className="deal-img"
                src={Deal2}
                alt="Deals image"
                onClick={handleToggleImage2}
              ></img>
              {showModal2 && <Topdeals2 onClose2={onClose2} />}
            </div>
          </div>
        </div>
      </Box>
      <Box className="third-section-adverts">
        <div className="advert-container">
          <div
            style={{
              backgroundColor: "#005224",
              display: "flex",
              borderRadius: "4rem",
              position: "relative",
              marginTop: "4rem",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              paddingBottom: "2.5rem",
              boxShadow:
                " 0 4px 8px 0 rgba(114, 38, 38, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <div className="advert-page1">
              <img className="phone" src={Phone} alt="mobile phone"></img>
            </div>
            <div className="advert-page2">
              <p
                style={{ fontSize: "24px", color: "#fff", margin: "1rem 0 0" }}
              >
                More than just Pizza
              </p>
              <h1
                style={{
                  color: "#fff",
                  letterSpacing: "1px",
                  fontSize: "42px",
                }}
              >
                It's a life style!
              </h1>
              <div>
                <div>
                  <p
                    style={{
                      fontSize: "20px",
                      marginBottom: "20px",
                      color: "#fff",
                    }}
                  >
                    Download our mobile apps to get
                    <br></br>
                    more deals and offers
                  </p>
                </div>
                <div className="advert-link">
                  <div>
                    <a rel="" href="">
                      <img
                        src="https://pizzajungleng.com/images/google-img.svg"
                        alt="google image"
                      />
                    </a>
                  </div>
                  <div>
                    <a rel="" href="">
                      <img
                        src="https://pizzajungleng.com/images/apple-img.svg"
                        alt="google image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          marginLeft: "75rem",
          paddingBottom: "1rem",
          zIndex: "-1000",
        }}
      >
        <img src={Pizza} alt="pizza illus" />
      </Box>
    </Box>
  );
};

export default Home;
