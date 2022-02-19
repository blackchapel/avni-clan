import React from "react";
import {
  Grid,
  Typography,
  Paper,
  Button,
  ButtonGroup,
  AppBar,
  Link,
} from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
function Footer() {
  function Copyright(props) {
  return (
    <div style={{color: "white"}}>
    <Typography variant="h6" color="white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/blackchapel/avni-clan">
        Codezilla Nismo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </div>
  );
}
  return (
    <footer>
      <Paper
        elevation={7}
        square={true}
        sx={{
          backgroundColor: "#242526",
          padding: "10px",
        }}
      >
        <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item style={{ fontSize: "50px" }}>
                <FaGithub color="white"/>
              </Grid>
              <Grid item>
                <ButtonGroup variant="text" >
                  <Button>
                    <a
                      href="https://github.com/blackchapel"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Kunal
                    </a>
                  </Button>
                  <Button>
                    <a
                      href="https://github.com/Yashpb1513"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Yash
                    </a>
                  </Button>
                  <Button>
                    <a
                      href="https://github.com/vidhitapai"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Vidhita
                    </a>
                  </Button>
                  <Button>
                    <a
                      href="https://github.com/rosita-dmello"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Rosita
                    </a>
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item style={{ fontSize: "50px" }}>
                <FaLinkedin color="white"/>
              </Grid>
              <Grid item>
                <ButtonGroup variant="text">
                  <Button>
                    <a
                      href="https://github.com/Yashpb1513"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Kunal
                    </a>
                  </Button>
                  <Button>
                    <a
                      href="https://github.com/Yashpb1513"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Yash
                    </a>
                  </Button>
                  <Button>
                    <a
                      href="https://github.com/Yashpb1513"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Vidhita
                    </a>
                  </Button>
                  <Button>
                    <a
                      href="https://github.com/Yashpb1513"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Rosita
                    </a>
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item>
           <Copyright sx={{ mt: 3 }} /> 
          {/* </Grid>  */}
        </Grid>
        <Copyright sx={{ mt: 3 }} /> 
        </Grid>
      </Paper>
    </footer>
  );
}

export default Footer;

{
  /* <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton></ListItemButton> */
}
