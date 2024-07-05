import React from "react";
import Globalheader from "./Globalheader";
import Globalfooter from "./Globalfooter";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Globalheader />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          marginTop: "67px",
        }}
      >
        <Outlet />
        <Globalfooter />
      </div>
    </div>
  );
};

export default Layout;
