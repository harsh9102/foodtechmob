import React from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RestaurantMenu } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuBtn: {
    width: "100%",
  },
}));

const menuCategories = [
  "Popular",
  "Starter",
  "Dessert",
  "Fast Food",
  "Main Course",
  "Beverages",
  "Dessert",
];

const SideNavBar = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={7}
      overflow="scroll"
      height="100vh"
      bgcolor="primary"
      position="fixed"
    >
      {menuCategories.map((caterogy) => (
        <IconButton
          className={classes.menuBtn}
          aria-label={caterogy}
          component={Link}
          to="/"
        >
          <Box
            style={{ padding: 0 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <RestaurantMenu />
            <Typography style={{ fontSize: 9 }}>{caterogy}</Typography>
          </Box>
        </IconButton>
      ))}
    </Box>
  );
};

export default SideNavBar;
