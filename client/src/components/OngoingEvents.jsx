import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import {Navigate, useNavigate} from "react-router-dom";
import { joinEvent } from "../data/api";
function OngoingEvents({ item }) {
  const truncate = (input) =>
    input?.length > 100 ? `${input.substring(0, 100)}...` : input;
  const navigate = useNavigate();
  const handleJoin = async () => {
    console.log(localStorage.getItem("token"));
    const response = await joinEvent({eventid: item._id}, localStorage.getItem("token"));
    response.message === 'Event joined successfully!' ? navigate("/dashboard") : alert(response.message)

  }
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ display: "flex", backgroundColor: "lightgrey" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {item.eventname}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {item.membersjoined.length} joined
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {truncate(item.description)}
          </Typography>
            <Button variant="outlined" size="small" color="secondary" onClick={handleJoin}>
              Join
            </Button>
        </CardContent>
        {/* <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={item.img}
            alt="img"
          /> */}
      </Card>
    </Grid>
  );
}

export default OngoingEvents;
