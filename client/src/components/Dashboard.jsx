import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PushPinIcon from "@mui/icons-material/PushPin";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import { FaWallet } from "react-icons/fa";
import {
  Grow,
  Grid,
  Typography,
  CardContent,
  CardActions,
  Button,
  Paper,
} from "@mui/material";
import Card from "../layout/Card";
import Tabular from "./Tabular";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [prevEvents, setPrevEvents] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ margin: 2, ...(open && { display: "none" }), height: 1 }}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
            height: "150px",
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItemButton
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Create Events" />
            </ListItemButton>
            <ListItemButton onClick={() => {
                setPrevEvents(true);
              }}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Previous Participation" />
            </ListItemButton>
          </List>
          <Divider />
          <List>
            <ListItemButton>
              <ListItemIcon>
                <FaWallet />
              </ListItemIcon>
              <ListItemText primary="Credits" />
            </ListItemButton>
          </List>
        </Drawer>
        <Main open={open}>
        {prevEvents ? <Typography>Previous</Typography> : (<Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h2" color="secondary.main">
                Welcome User
              </Typography>
            </Grid>
            <Grid item marginTop={4}>
              <Typography
                variant="h4"
                color="secondary.main"
                sx={{ borderTop: "1px solid black", paddingTop: "40px" }}
              >
                Events By You
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={{ xs: 2, md: 4 }}
                padding={2}
              >
                <Grid item>
                  <Paper>
                    <CardContent sx={{ width: "350px" }}>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                      >
                        <Grid item>
                          <Typography
                            sx={{ fontSize: 25 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            Event Name
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            sx={{ fontSize: 18 }}
                            color="secondary"
                            gutterBottom
                          >
                            OnGoing
                          </Typography>
                        </Grid>
                      </Grid>

                      <Typography variant="h5" component="div"></Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Date: and Time:
                      </Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="medium">Start</Button>
                      <Button size="medium">End</Button>
                    </CardActions>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item marginTop={4}>
              <Typography
                variant="h4"
                color="secondary.main"
                sx={{ borderTop: "1px solid black", paddingTop: "40px" }}
              >
                Events Around
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={{ xs: 2, md: 4 }}
                padding={2}
              >
                <Grid item>
                  <Paper>
                    <CardContent sx={{ width: "350px" }}>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                      >
                        <Grid item>
                          <Typography
                            sx={{ fontSize: 25 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            Event Name
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            sx={{ fontSize: 18 }}
                            color="secondary"
                            gutterBottom
                          >
                            OnGoing
                          </Typography>
                        </Grid>
                      </Grid>

                      <Typography variant="h5" component="div"></Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Date: and Time:
                      </Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="medium">Join</Button>
                    </CardActions>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{ backgroundColor: "rgba(5, 107, 230, 0.5)" }}
              padding={2}
            >
              <Tabular />
            </Grid>
          </Grid>)}
          

          {/* <div>
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...(2 > 1 ? { timeout: 4000 } : {})}
            >
              <Tabular />
            </Grow>
          </div> */}
        </Main>
      </Box>
    </>
  );
}
