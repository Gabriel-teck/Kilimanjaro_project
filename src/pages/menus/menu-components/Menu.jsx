import React, { useState, useRef, useEffect } from "react";
import LocationSelector from "../../../components/SelectorComponents/LocationSelector";
import { Box } from "@mui/material";
import Deal1 from "../../../assets/deals1.jpeg";
import Deal2 from "../../../assets/deals2.jpeg";
import { PartyDeals } from "../../../components/Deals-modal/PartyDeals";
import { MegaDeals } from "../../../components/Deals-modal/MegaDeals";
import { products } from "../../../data";
import { ClassicDeals } from "./ClassicDeals";
import "../menu-components/menu.css";
import { SpecialDeals } from "./SpecialDeals";
import { PjsideKicks } from "./PjsideKicks";
import { Drinks } from "./Drinks";
import { Dessert } from "./Dessert";
import ClassicDealsModal from "../modalComponent/classicSpecialcomponent/PizzaDealsModal";

// import { TopDeals } from "../../components/Deals-modal/TopDeals";

const Menu = () => {
  //creating a state for the DealsModal
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [isActiveBtn, setIsActiveBtn] = useState(null);

  //useRef for controlling onScroll method
  const deals = useRef(null);
  const classicPizza = useRef(null);
  const specialPizza = useRef(null);
  const pjSidekicks = useRef(null);
  const drinks = useRef(null);
  const desserts = useRef(null);

  const toggleActiveButton = (buttonName) => {
    console.log("clicked");
    setIsActiveBtn(buttonName);
  };
  //function controlling the onScroll
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const changeRestaurant = () => {
    navigate("/menu");
  };

  //function for toggle deal images
  const handleToggleImage1 = () => {
    setShowModal1(!showModal1);
  };

  const handleToggleImage2 = () => {
    setShowModal2(!showModal2);
  };

  const onClose = () => {
    setShowModal1(false);
    setShowModal2(false);
  };

  //filter the products to get only classic-pizza
  const classicProducts = products.filter(
    (product) => product.type === "classic-pizza"
  );

  const specialProducts = products.filter(
    (product) => product.type === "special-pizza"
  );
  const pjProducts = products.filter(
    (product) => product.type === "pj-sidekicks"
  );

  const drink = products.filter((product) => product.type === "drinks");
  const dessert = products.filter((product) => product.type === "dessert");

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
            <button
              className={
                isActiveBtn === "deals" ? "nav-item-active" : "nav-item"
              }
              onClick={() => {
                scrollToSection(deals);
                toggleActiveButton("deals");
              }}
            >
              <img
                className="nav-img"
                src="https://pizzajungleng.com/images/deals-icon.svg"
                alt="deals"
              />
              Deals
            </button>
            <button
              className={
                isActiveBtn === "classic" ? "nav-item-active" : "nav-item"
              }
              onClick={() => {
                scrollToSection(classicPizza);
                toggleActiveButton("classic");
              }}
            >
              Classic Pizza
            </button>
            <button
              className={
                isActiveBtn === "special" ? "nav-item-active" : "nav-item"
              }
              onClick={() => {
                scrollToSection(specialPizza);
                toggleActiveButton("special");
              }}
            >
              Special Pizza
            </button>
            <button
              className={
                isActiveBtn === "sidekick" ? "nav-item-active" : "nav-item"
              }
              onClick={() => {
                scrollToSection(pjSidekicks);
                toggleActiveButton("sidekick");
              }}
            >
              Pj Sidekick
            </button>
            <button
              className={
                isActiveBtn === "drink" ? "nav-item-active" : "nav-item"
              }
              onClick={() => {
                scrollToSection(drinks);
                toggleActiveButton("drink");
              }}
            >
              Drinks
            </button>
            <button
              className={
                isActiveBtn === "dessert" ? "nav-item-active" : "nav-item"
              }
              onClick={() => {
                scrollToSection(desserts);
                toggleActiveButton("dessert");
              }}
            >
              Desserts
            </button>
          </Box>

          {/* <LocationSelector /> */}
        </Box>
      </Box>
      <Box mt="80px" mb="100px" pt="0">
        <section ref={deals} className="prductpage_deals">
          <div className="productpage_container">
            <h2 className="productpage_header">Deals</h2>
            <div className="product-row-wrap">
              <div className="deal-img-container">
                <img
                  style={{ border: "2px solid #ff8503", padding: " 4px" }}
                  className="deal-img"
                  src={Deal1}
                  alt="Deals image"
                  onClick={handleToggleImage1}
                ></img>
                {showModal1 && <PartyDeals onClose={onClose} />}
              </div>
              <div className="deal-img-container">
                <img
                  className="deal-img1"
                  src={Deal2}
                  alt="Deals image"
                  onClick={handleToggleImage2}
                ></img>
                {showModal2 && <MegaDeals onClose={onClose} />}
              </div>
            </div>
          </div>
        </section>
        <section ref={classicPizza} className="classic_deals">
          <div className="productpage_container">
            <h2 className="productpage_header">Classic Deals</h2>
            <div className="product-row-wrap">
              {classicProducts.map((product) => {
                return <ClassicDeals product={product} />;
              })}
            </div>
          </div>
        </section>
        <section ref={specialPizza} className="special_deals">
          <div className="productpage_container">
            <h2 className="productpage_header">Special Deals</h2>
            <div className="product-row-wrap">
              {specialProducts.map((product, index) => {
                return <SpecialDeals product={product} key={index} />;
              })}
            </div>
          </div>
        </section>
        <section ref={pjSidekicks} className="pj_deals">
          <div className="productpage_container">
            <h2 className="productpage_header">Sidekicks Deals</h2>
            <div className="product-row-wrap">
              {pjProducts.map((product, index) => {
                return <PjsideKicks product={product} key={index} />;
              })}
            </div>
          </div>
        </section>
        <section ref={drinks} className="drinks">
          <div className="productpage_container">
            <h2 className="productpage_header">Drinks</h2>
            <div className="product-row-wrap">
              {drink.map((product, index) => {
                return <Drinks product={product} key={index} />;
              })}
            </div>
          </div>
        </section>
        <section className="desserts">
          <div className="productpage_container">
            <h2 className="productpage_header">Desserts</h2>
            <div className="product-row-wrap">
              {dessert.map((product, index) => {
                return (
                  <Dessert desserts={desserts} product={product} key={index} />
                );
              })}
            </div>
          </div>
        </section>
      </Box>
    </>
  );
};

export default Menu;
