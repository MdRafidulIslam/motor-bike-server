import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import MenuIcon from "@mui/icons-material/Menu";
import PaymentIcon from "@mui/icons-material/Payment";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import MyOrders from "../../MyOrders/MyOrders";
import Pay from "../Pay/pay";
import Review from "../Review/Review";
import ManageBikes from "../../../ManageBikes/ManageBikes";
import ManageOrders from "../ManageOrders/ManageOrders";
import AddBike from "../AddBike/AddBike";
import MakeAdmin from "../MakeAdmin/MakeAdmin";

const drawerWidth = 240;

function Dashboard(props) {
  const history = useHistory();
  const { url, path } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { user, admin, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div>
        <Toolbar>
          <h3
            style={{
              fontWeight: "800",
              fontStyle: "italic",
              fontSize: "1.7rem",
            }}
          >
            Motor Bike
          </h3>
        </Toolbar>
        <Divider />
        {/* user dashboard starts */}
        {user.email && !admin && (
          <List>
            <ListItem button onClick={() => history.push("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <Link to="/">
                <ListItemText>Home</ListItemText>
              </Link>
            </ListItem>
            <ListItem button onClick={() => history.push(`${url}/myOrders`)}>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <Link to={`${url}/myOrders`}>
                <ListItemText>My Orders</ListItemText>
              </Link>
            </ListItem>
            <ListItem button onClick={() => history.push(`${url}/pay`)}>
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <Link to={`${url}/pay`}>
                <ListItemText>Pay</ListItemText>
              </Link>
            </ListItem>
            <ListItem button onClick={() => history.push(`${url}/review`)}>
              <ListItemIcon>
                <RateReviewIcon />
              </ListItemIcon>
              <Link to={`${url}/review`}>
                <ListItemText>Review</ListItemText>
              </Link>
            </ListItem>
          </List>
        )}
        {/* admin dashboard starts */}
        {user.email && admin && (
          <>
            <ListItem button onClick={() => history.push("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <Link to="/">
                <ListItemText>Home</ListItemText>
              </Link>
            </ListItem>
            <List>
              <ListItem button onClick={() => history.push(`${url}/makeAdmin`)}>
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <Link to={`${url}/makeAdmin`}>
                  <ListItemText>Make Admin</ListItemText>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={() => history.push(`${url}/manageBikes`)}
              >
                <ListItemIcon>
                  <DirectionsBikeIcon />
                </ListItemIcon>
                <Link to={`${url}/manageBikes`}>
                  <ListItemText>Manage Bikes</ListItemText>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={() => history.push(`${url}/manageOrders`)}
              >
                <ListItemIcon>
                  <ManageAccountsSharpIcon />
                </ListItemIcon>
                <Link to={`${url}/manageOrders`}>
                  <ListItemText>Manage Orders</ListItemText>
                </Link>
              </ListItem>
              <ListItem button onClick={() => history.push(`${url}/addBike`)}>
                <ListItemIcon>
                  <AddBoxSharpIcon />
                </ListItemIcon>
                <Link to={`${url}/addBike`}>
                  <ListItemText>Add bike</ListItemText>
                </Link>
              </ListItem>
            </List>
          </>
        )}

        <Divider />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "30px",
        }}
      >
        <Button variant="contained" color="error" onClick={logOut}>
          Logout
        </Button>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: ` ${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Switch>
            {user.email && !admin && (
              <Route exact path={path}>
                <MyOrders />
              </Route>
            )}
            {user.email && admin && (
              <Route exact path={path}>
                <ManageOrders />
              </Route>
            )}

            <Route exact path={`${path}/review`}>
              <Review />
            </Route>
            <Route exact path={`${path}/myOrders`}>
              <MyOrders />
            </Route>
            <Route exact path={`${path}/pay`}>
              <Pay />
            </Route>
            <Route exact path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </Route>
            <Route exact path={`${path}/addBike`}>
              <AddBike />
            </Route>
            <Route exact path={`${path}/manageBikes`}>
              <ManageBikes />
            </Route>
            <Route exact path={`${path}/manageOrders`}>
              <ManageOrders />
            </Route>
          </Switch>
        </Box>
      </Box>
    </>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
