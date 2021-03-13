import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import menuItems from "../MenuItems";

const MenuItemsScreen = () => {
  return (
    <Box height="100vh" overflow="scroll" pt={8} pr={1}>
      <Grid container spacing={2}>
        {menuItems.map((item) => (
          <Grid item key={item._id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  title={item.name}
                  height={120}
                />
                <CardContent
                  component={Box}
                  style={{ padding: 3, paddingLeft: 6, paddingRight: 6 }}
                  display="flex"
                  flexDirection="row"
                >
                  <Typography>{item.name}</Typography>
                  <Typography style={{ marginLeft: "auto" }}>
                    Rs. {item.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuItemsScreen;
