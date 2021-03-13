import { Box, Grid } from "@material-ui/core";
import Header from "./Components/Header";
import SideNavBar from "./Components/SideNavBar";
import MenuItemsScreen from "./Screens/MenuItemsScreen";

function App() {
  return (
    <div>
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
          <MenuItemsScreen />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
