import React from "react";
import Cards from "@mui/material/Card";
import { Grid, Avatar, Button, IconButton, Popper, Fade, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from '@mui/icons-material/Share';
import {
  CardContent,
  Typography,
} from "@mui/material";
function Card() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  return (
    <Cards
      sx={{
        maxWidth: "500px",
        backgroundColor: "#8fd071",
        width: "auto",
        opacity: "0.8",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          padding={1}
        >
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src="https://wallpaperaccess.com/full/4595683.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6" color="black">
            What Can I Do To Make It Better?
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
            <Button variant="contained" onClick={handleClick('bottom')} endIcon={<SendIcon />} color="secondary">
                Donate
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" endIcon={<SendIcon />} color="secondary">
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Cards>
  );
}

export default Card;
