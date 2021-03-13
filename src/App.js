import { BrowserRouter as Router, Route } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";
import Header from "./Components/Header";
import SideNavBar from "./Components/SideNavBar";
import MenuItemsScreen from "./Screens/MenuItemsScreen";
import FoodDetailsScreen from "./Screens/FoodDetailsScreen";

function App() {
  return (
    <Router>
      <Header />
      <Grid container>
        <Grid
          item
          xs={3}
          component={Box}
          display="flex"
          justifyContent="center"
        >
          <SideNavBar />
        </Grid>
        <Grid item xs={9}>
          <Route path="/food" component={FoodDetailsScreen} />
          <Route path="/menu" component={MenuItemsScreen} exact />
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
