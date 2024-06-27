import React from "react";
import { Box } from "@mui/material";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpeg";
import about3 from "../assets/about3.jpeg";
import about4 from "../assets/about4.jpeg";

const About = () => {
  return (
    <Box className="about-wrapper">
      <div className="about-header">
        <h1>From Dough to Doorstep:</h1>
      </div>
      <div className="row ">
        <div>
          <img
            width="500"
            height="300"
            src={about1}
            alt="About us"
            className="image-about"
          />
        </div>
        <div>
          <img
            width="500"
            height="300"
            src={about2}
            alt="About us"
            className="image-about"
          />
        </div>
        <div>
          <img
            width="500"
            height="300"
            src={about3}
            alt="About us"
            className="image-about"
          />
        </div>
        <div>
          <img
            width="500"
            height="300"
            src={about4}
            alt="About us"
            className="image-about"
          />
        </div>
      </div>
    </Box>
  );
};

export default About;
