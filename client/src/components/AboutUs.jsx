import React from 'react'
import GlobalStyles from "@mui/material/GlobalStyles";
import { Typography, Box } from '@mui/material';
function AboutUs() {
  return (
    <div><GlobalStyles
    styles={{
      ul: { margin: 0, padding: 0, listStyle: "none" },
      body: { margin: 0 },
    }}
  />
  <Box padding={4} margin={2}>
  <Typography variant="h6" align="center">
    <p>The aim of our project is to inspire people to collaborate and work with one another, in order to build a greener future for the whole world. Through activities and events that promote more sustainable habits, users can connect and heal their environment bit by bit. On the landing page, a user can view the air quality statistics of their location. To better these conditions, users can help in two ways - donate to the cause, or sign up and participate in the sponsored events.</p>
    <p>On signing up, users can create events that help fight climate change, specifying a particular location and time. All users can view the upcoming and ongoing events, and also join them. Each signed up user gets a certain amount of credits according to the activities performed and time dedicated. After volunteers show their commitment and make a good amount of contribution to the cause, they will be funded with the money donated by our donors, as per the credits they’ve earned. This will be an incentive to motivate other users to join them in the cause. These funds will help them financially in executing climate friendly plans. The names of the volunteers with the maximum credits earned will also be showcased on the homepage of the application.</p>
    <p>On joining an event, the user can livestream it from their location, using their devices. This will serve as an inspiration to other users to also take steps for the well-being of the climate. Users can connect with each other via chat and view other users’ rankings to gain perspective and start working towards the movement. We will be showcasing articles related to climate change, sustainable lifestyle choices and steps one can take towards a greener tomorrow. The site will be a platform to promote and embibe a sense of responsibility towards our planet in all its users.</p>
  </Typography>
  </Box>
  </div>
  )
}

export default AboutUs