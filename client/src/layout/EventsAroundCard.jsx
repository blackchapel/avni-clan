import React from "react";
import {
  Grow,
  Grid,
  Typography,
  CardContent,
  CardActions,
  Button,
  Paper,
} from "@mui/material";
function EventsAroundCard() {
  return (
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
              <Typography sx={{ fontSize: 18 }} color="secondary" gutterBottom>
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
          <Button size="medium" variant="contained">
            Join
          </Button>
        </CardActions>
      </Paper>
    </Grid>
  );
}

export default EventsAroundCard;
