import { Box, Grid } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";
import FoodDetailsScreen from "../Screens/FoodDetailsScreen";
import MenuItemsScreen from "../Screens/MenuItemsScreen";
import SideNavBar from "./SideNavBar";

const ScreensConatiner = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={3} component={Box} display="flex" justifyContent="center">
        <SideNavBar />
      </Grid>
      <Grid item xs={9}>
        <Route path="/menu" component={MenuItemsScreen} />
        <Route path="/food" component={FoodDetailsScreen} exact />
      </Grid>
    </Grid>
  );
};

export default ScreensConatiner;
