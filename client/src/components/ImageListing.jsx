import React, { useContext } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Stack from "@mui/material/Stack";
import ShareIcon from '@mui/icons-material/Share';
import { Grow, Typography, Popover, Button } from "@mui/material";
import EventsContext from "../contexts/EventsContext";
import UseContext from "react";

function ImageListing() {
  const {events} = useContext(EventsContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [selectedTitle, setSlectedTitle] = React.useState([]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(2 > 1 ? { timeout: 4000 } : {})}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <ImageList sx={{ width: 3000, height: 450, backgroundColor: "#1F4910", }}>
          <ImageListItem key="Subheader" cols={2} rows={1}>
            <ListSubheader component="div" sx={{backgroundColor: "#1F4910", marginTop: "7px",}}>
              <Typography variant="h5" color="primary">
                On going events
              </Typography>
            </ListSubheader>
          </ImageListItem>
          {events.upcoming.map((item) => (
            <ImageListItem key={item._id} sx={{margin: "20px", }}>
              {/* <img
                src={'https://img.freepik.com/free-vector/watercolor-abstract-background_220290-24.jpg?w=248&fit=crop&auto=format'}
                srcSet={'https://img.freepik.com/free-vector/watercolor-abstract-background_220290-24.jpg?w=248&fit=crop&auto=format&dpr=2 2x'}
                alt={item.title}
                loading="lazy"
                style={{borderRadius: "10px", border: "3px outset #8fd071"}}
              /> */}
              <ImageListItemBar
                title={item.eventname}
                subtitle={`User: ${item.description}`}
                width={4}
                actionIcon={
                  <>
                    <Button variant="outlined" size="small" disabled>
                      Join
                    </Button>
                    <IconButton
                      color= "primary"
                      aria-label={`info about ${item.eventname}`}
                      onClick={(e) => {
                        setAnchorEl(e.currentTarget);
                        setSlectedTitle(item);
                      }}
                    >
                      <InfoIcon />
                    </IconButton>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <Typography sx={{ p: 2 }}>
                        {item.activity}
                      </Typography>
                    </Popover>
                  </>
                }
                sx={{borderRadius: "10px"}}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Grow>
  );
}

export default ImageListing;
