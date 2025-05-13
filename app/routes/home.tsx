import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, colors, Container, Divider, Grid, IconButton, Typography } from "@mui/material";
import { CenterFocusStrong, Margin, Padding } from "@mui/icons-material";
import AbcIcon from '@mui/icons-material/Abc';
import { red } from "@mui/material/colors";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const cardsx = {
    width: { sm: "90%", md: "47.5%", lg: "23.5%" },
    height: { sm: 200, md: 200, lg: 200 },
    mx: 'auto',
    my: 2,
    "&:hover": {
      boxShadow: 3,
      color: "green"
      // border: 1,
      // borderColor: "green"
    },
    borderRadius: "12px",
    elevation: 10
  }
  const textLeft = { textAlign: "left" }
  const textCenter = { textAlign: "center" }
  const textSegoe = { fontFamily: "Segoe UI" }
  const textCardTitle = { ...textLeft, fontSize: "1.1rem", fontWeight: "medium", ...textSegoe }
  const textCardContent = { ...textLeft, fontSize: "0.85rem", fontWeight: "regular", color: "grey", ...textSegoe }
  const options = {
    startColor: "#1FAF52", //first color
    endColor: "#6CE58D", //second color
    direction: "right", //top, bottom, left, right, degrees
  };
  const textVrtta = {
    ...textSegoe, fontSize: "3.6rem", fontWeight: "bold",
    backgroundImage: `linear-gradient( to ${options.direction}, ${options.startColor}, ${options.endColor})`,
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: 5, margin: -2, padding: 0
  }
  const textTitle = {
    ...textCenter, ...textSegoe, fontSize: "3.3rem", fontWeight: "bold",
    letterSpacing: 0, margin: -2, padding: 0
  }
  const textNormal = {
    ...textCenter, ...textSegoe, fontSize: "1.1rem", fontWeight: "regular", color: "grey"
  }
  const textSubTitle = {
    ...textCenter, ...textSegoe, fontSize: "1.6rem", fontWeight: "bold",
  }
  return <Container>
    <Box >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography sx={textVrtta}>Vrtta</Typography>
      </Box>
      <Typography sx={textTitle}>Greener choice, Better life​</Typography>
      <Box sx={{ margin: 5 }}></Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography sx={{ ...textNormal, maxWidth: 600 }}>Analyze environmental impacts, optimize supply chains, and achieve sustainability goals with our comprehensive life cycle assessment platform.</Typography>
      </Box>
      <Box sx={{ margin: 5 }}></Box>
      <Box>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Button sx={{
            color: "white", backgroundColor: "#16a249", width: 1, "&:hover": {
              boxShadow: "0px 0px 1px 1px green"
            },
            borderRadius: "10px",
            maxWidth: 150,
            height: 45,
            mx: 1, textTransform: "none"
          }}>Get Started</Button>
          <Button sx={{
            color: "black", backgroundColor: "white", width: 1,
            border: 1,
            borderWidth: 1,
            borderColor: "grey",
            "&:hover": {
              borderColor: "green",
              backgroundColor: "#f3faf6"
            },
            borderRadius: "10px",
            maxWidth: 150,
            height: 45,
            mx: 1, textTransform: "none"
          }}>Watch Demo</Button>
        </Grid>
      </Box>
    </Box>
    <Box sx={{ my: 10 }}></Box>
    <Box>
      <Typography sx={textSubTitle}>Welcome</Typography>
      <Box sx={{ my: 2 }}></Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography sx={{ ...textNormal, display: "inline" }}>Vrtta Green Solutions Inc. (</Typography>
          <Typography sx={{ ...textNormal, color: "green", fontWeight: "bold", display: "inline" }}>VRTTA</Typography>
          <Typography sx={{ ...textNormal, display: "inline" }}>), is a Montreal-based sustainability company.</Typography>
        </Box>
      </Box>
      <Box sx={{ my: 3 }}></Box>
      <Divider variant="middle" />
      <Box sx={{ my: 1 }}></Box>
      <Grid container>
        <Card sx={cardsx}>
          <CardContent>
            <Box sx={{ justifyContent: "left", display: 'flex', width: 1, height: 50 }}>
              <img src="/public/green_shoot.png" /></Box>
            <Typography sx={textCardTitle}>What we do?</Typography>
            <Typography sx={textCardContent}>We develop greener and more sustainable product choices in the ‘Circularity’ context.</Typography></CardContent>
        </Card>
        <Card sx={cardsx}>
          <CardContent>
            <Box sx={{ justifyContent: "left", display: 'flex', width: 1, height: 50 }}>
              <img src="/public/green_eye.png" /></Box>
            <Typography sx={textCardTitle}>Our Vision</Typography>
            <Typography sx={textCardContent}>To contribute towards a greener society through simple solutions and circularity models.</Typography></CardContent>
        </Card>
        <Card sx={cardsx}>
          <CardContent>
            <Box sx={{ justifyContent: "left", display: 'flex', width: 1, height: 50 }}>
              <img src="/public/green_target.png" /></Box>
            <Typography sx={textCardTitle}>Our Mission</Typography>
            <Typography sx={textCardContent}>Leverage creativity and innovation to develop greener solutions.</Typography></CardContent>
        </Card>
        <Card sx={cardsx}>
          <CardContent>
            <Box sx={{ justifyContent: "left", display: 'flex', width: 1, height: 50 }}>
              <img src="/public/green_truck.png" /></Box>
            <Typography sx={textCardTitle}>What drives us?</Typography>
            <Typography sx={textCardContent}>A passion for sustainable living: ‘Greener choice, Better life’.</Typography></CardContent>
        </Card>
      </Grid>

      <Box sx={{ my: 1 }}></Box>
      <Divider variant="middle" />
      <Box sx={{ my: 3 }}></Box>
      <Grid container sx={{ display: "flex" }}>
        <Grid size={{ sm: 12, md: 4 }} sx={{ justifyContent: "center", display: "flex", alignContent: "center" }}>
          <img src="/public/cycle_of_life.png" />

        </Grid>
        <Grid size={{ sm: 12, md: 8 }} sx={{ paddingX: 4, my: "auto" }}>
          <Typography sx={{ ...textNormal, display: "inline" }}  >Our unwavering belief is encapsulated in our tagline: ‘</Typography>
          <Typography sx={{ ...textNormal, fontWeight: "bold", color: "green", display: "inline" }} >Greener Choice, Better Life.</Typography>
          <Typography sx={{ ...textNormal, display: "inline" }}  >‘ The name VRTTA, derived from the Sanskrit term for ‘Circle,’ embodies our commitment to closed-loop sustainability.
            If you are visiting us, we know you want to take action towards environmental well-being, and we appreciate you for that!</Typography>
          <Box></Box>
          <Typography sx={{ ...textNormal, display: "inline" }} >If you are visiting us, we know you want to take action towards environmental well-being, and we appreciate you for that!</Typography>

        </Grid>
      </Grid>
    </Box>
    <Box sx={{ my: 4 }}></Box>
  </Container>;
}

