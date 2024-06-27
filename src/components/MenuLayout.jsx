import React from "react";
import MenuHeader from "./MenuHeader";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const MenuLayout = () => {
  return (
    <>
      <Box marginTop="1.5rem" height="100vh">
        <MenuHeader />
        <Box display="flex" flexDirection="column" overflow="hidden" marginTop="2rem">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default MenuLayout;
