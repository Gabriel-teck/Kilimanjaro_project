import React from "react";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpeg";
import about3 from "../assets/about3.jpeg";
import about4 from "../assets/about4.jpeg";
import dough from "../assets/dough.jpg";

const About = () => {
  return (
    <>
      <section className="about-container">
        <div className="about-header">
          <h1>From Dough to Doorstep:</h1>
        </div>
        <div className="about-image-container">
          <div className="img-about">
            <img src={about1} alt="img-us" />
          </div>
          <div className="img-about">
            <img src={about2} alt="img-us" />
          </div>
          <div className="img-about">
            <img src={about3} alt="img-us" />
          </div>
          <div className="img-about">
            <img src={about4} alt="img-us" />
          </div>
        </div>
        <div className="about-details">
          <div className="about-1">
            <h1
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "700",
                color: "#005224",
              }}
            >
              We believe that it is the ingredients that makes a pizza good or
              bad
            </h1>
          </div>
          <div className="about-2">
            <img src={dough} width="650" height="400" alt="" />
          </div>
          <div className="about-3">
            {" "}
            <p className="first-details">
              <p className="para-text">
                We only use the finest and freshest ingredients from around the
                world. From the perfectly seasoned tomato sauce to the creamy
                mozzarella cheese, every ingredient we use is carefully selected
                to make our pizzas as delicious as they look.
              </p>
              <p className="para-text">
                And we understand the importance of getting freshly baked, hot
                pizzas to our customers as quickly as possible. That's why we've
                streamlined our delivery process to ensure your pizza is
                delivered to your door in the shortest possible time.
              </p>
              <p className="para-text">
                From classic Margherita pizzas to exotic pizzas like Mexican and
                Hawaiian pizzas, we have something for everyone. With vegetarian
                and gluten-free options and special dietary needs catered for,
                no one misses out on the pizza fun. We strive to provide
                excellent customer service and make every customer happy.
              </p>
              <p className="para-text">
                Our friendly staff are always ready to help you with your order
                or answer any questions you may have.
              </p>
              <p className="para-text">
                If you're looking for delicious, easy pizza, you've come to the
                world-famous pizza restaurant. Come experience the magic of our
                pizza today!
              </p>
              <p className="para-text">
                Pizza Jungle is a subsidiary of Sundry Foods Limited.
              </p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

{
  /* <h3 className="about-header-2">
            We believe that it is the ingredients that makes a pizza good or bad
          </h3>
          <img src={dough} alt="" className="img-row" width="200px" height="200px" />

          <p className="first-details">
            <p className="para-text">
              We only use the finest and freshest ingredients from around the
              world. From the perfectly seasoned tomato sauce to the creamy
              mozzarella cheese, every ingredient we use is carefully selected
              to make our pizzas as delicious as they look.
            </p>
            <p className="para-text">
              And we understand the importance of getting freshly baked, hot
              pizzas to our customers as quickly as possible. That's why we've
              streamlined our delivery process to ensure your pizza is delivered
              to your door in the shortest possible time.
            </p>
            <p className="para-text">
              From classic Margherita pizzas to exotic pizzas like Mexican and
              Hawaiian pizzas, we have something for everyone. With vegetarian
              and gluten-free options and special dietary needs catered for, no
              one misses out on the pizza fun. We strive to provide excellent
              customer service and make every customer happy.
            </p>
            <p className="para-text">
              Our friendly staff are always ready to help you with your order or
              answer any questions you may have.
            </p>
            <p className="para-text">
              If you're looking for delicious, easy pizza, you've come to the
              world-famous pizza restaurant. Come experience the magic of our
              pizza today!
            </p>
            <p className="para-text">
              Pizza Jungle is a subsidiary of Sundry Foods Limited.
            </p>
          </p>
        </div> */
}
