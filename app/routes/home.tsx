import type { Route } from "./+types/home";
import { Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, colors, Container, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import { CenterFocusStrong, Margin, Padding } from "@mui/icons-material";
import AbcIcon from '@mui/icons-material/Abc';
import { red } from "@mui/material/colors";
import { Form } from "react-router";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const cardsx = {
    width: "95%",
    height: { sm: 200, md: 200, lg: 200 },
    mx: 'auto',
    my: 1,
    "&:hover": {
      boxShadow: 3,
      color: "green"
    },
    borderRadius: "12px",
    elevation: 10
  }
  const textLeft = { textAlign: "left" }
  const textCenter = { textAlign: "center" }
  const textSegoe = { fontFamily: "Segoe UI" }
  const textBold = { fontWeight: "bold" }
  const textCardTitle = { ...textLeft, fontSize: "1.1rem", fontWeight: "medium", ...textSegoe }
  const textCardContent = { ...textLeft, fontSize: "0.85rem", fontWeight: "regular", color: "grey", ...textSegoe }
  const options = {
    startColor: "#1FAF52",
    endColor: "#6CE58D",
    direction: "right",
  };
  const textVrtta = {
    ...textBold,
    backgroundImage: `linear-gradient( to ${options.direction}, ${options.startColor}, ${options.endColor})`,
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: 5, margin: 0, padding: 0
  }
  const textNormal = {
    ...textCenter, fontWeight: "regular", color: "grey"
  }
  const textSubTitle = {
    ...textCenter, ...textBold
  }
  const cardGridSize = { xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }
  return <Container>
    <Box>
      <Box sx={{ my: 10 }}></Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h1" sx={textVrtta}>Vrtta</Typography>
      </Box>
      <Box sx={{ my: 3 }}></Box>
      <Typography variant="h2" sx={{ ...textBold, ...textCenter }}>Greener choice, Better life​</Typography>
      <Box sx={{ margin: 5 }}></Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="body1" sx={{ ...textNormal, maxWidth: 600 }}>Analyze environmental impacts, optimize supply chains, and achieve sustainability goals with our comprehensive life cycle assessment platform.</Typography>
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
      <Typography variant="subtitle1" sx={textSubTitle}>Welcome</Typography>
      <Box sx={{ my: 2 }}></Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography variant="body1" sx={{ ...textNormal, display: "inline" }}>Vrtta Green Solutions Inc. (</Typography>
          <Typography variant="body1" sx={{ ...textNormal, color: "green", fontWeight: "bold", display: "inline" }}>VRTTA</Typography>
          <Typography variant="body1" sx={{ ...textNormal, display: "inline" }}>), is a Montreal-based sustainability company.</Typography>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ my: 8 }} />
      <Grid container sx={{ display: "flex" }}>
        <Grid size={cardGridSize}>
          <Card sx={cardsx}>
            <CardContent>
              <Box sx={{ justifyContent: "left", display: 'flex', width: 1, height: 50 }}>
                <img src="/public/green_shoot.png" />
              </Box>
              <Typography sx={textCardTitle}>What we do?</Typography>
              <Typography sx={textCardContent}>We develop greener and more sustainable product choices in the ‘Circularity’ context.</Typography></CardContent>
          </Card>
        </Grid>
        <Grid size={cardGridSize}>
          <Card sx={cardsx}>
            <CardContent>
              <Box sx={{ justifyContent: "left", display: 'flex', width: 1, height: 50 }}>
                <img src="/public/green_eye.png" />
              </Box>
              <Typography sx={textCardTitle}>Our Vision</Typography>
              <Typography sx={textCardContent}>To contribute towards a greener society through simple solutions and circularity models.</Typography></CardContent>
          </Card>
        </Grid>
        <Grid size={cardGridSize}>
          <Card sx={cardsx}>
            <CardContent>
              <Box sx={{ justifyContent: "left", display: 'flex', width: 1, height: 50 }}>
                <img src="/public/green_target.png" />
              </Box>
              <Typography sx={textCardTitle}>Our Mission</Typography>
              <Typography sx={textCardContent}>Leverage creativity and innovation to develop greener solutions.</Typography></CardContent>
          </Card>
        </Grid>
        <Grid size={cardGridSize}>
          <Card sx={cardsx}>
            <CardContent>
              <Box sx={{ justifyContent: "left", display: 'flex', width: 1, height: 50 }}>
                <img src="/public/green_truck.png" />
              </Box>
              <Typography sx={textCardTitle}>What drives us?</Typography>
              <Typography sx={textCardContent}>A passion for sustainable living: ‘Greener choice, Better life’.</Typography></CardContent>
          </Card>
        </Grid>
      </Grid>
      <Divider variant="middle" sx={{ my: 12 }} />
      <Grid container sx={{ display: "flex" }}>
        <Grid size={{ sm: 12, md: 4 }} sx={{ justifyContent: "center", display: "flex", alignContent: "center" }}>
          <img src="/public/cycle_of_life.png" />

        </Grid>
        <Grid size={{ sm: 12, md: 8 }} sx={{ paddingX: 4, my: "auto" }}>
          <Typography variant="body1" sx={{ ...textNormal, display: "inline" }}  >Our unwavering belief is encapsulated in our tagline: ‘</Typography>
          <Typography variant="body1" sx={{ ...textNormal, fontWeight: "bold", color: "green", display: "inline" }} >Greener Choice, Better Life.</Typography>
          <Typography variant="body1" sx={{ ...textNormal, display: "inline" }}  >‘ The name VRTTA, derived from the Sanskrit term for ‘Circle,’ embodies our commitment to closed-loop sustainability.
            If you are visiting us, we know you want to take action towards environmental well-being, and we appreciate you for that!</Typography>
          <Box></Box>
          <Typography variant="body1" sx={{ ...textNormal, display: "inline" }} >If you are visiting us, we know you want to take action towards environmental well-being, and we appreciate you for that!</Typography>
        </Grid>
      </Grid>
      <Divider variant="middle" sx={{ my: 12 }} />
      <Grid container sx={{ display: "flex", mx: 2 }}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} sx={{ paddingX: 2, mb: 8 }}>
          <Box sx={{ justifyContent: "left" }}>
            <Typography variant="subtitle1" sx={{ ...textSubTitle, textAlign: "left", color: "primary.dark" }} >Get in Touch</Typography>
            <Typography variant="body1" sx={{ ...textLeft, fontWeight: "medium" }}>Please fill out this form and we will get back to you as soon as possible.</Typography>
          </Box>
          <Box sx={{ display: "flex", my: 2 }}>
            <Box>
              <LocationPinIcon sx={{ fontSize: "2rem", mr: 2, color: "primary.dark" }} />
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ ...textLeft, fontWeight: "bold" }} >
                Find us at
              </Typography>
              <Typography variant="body1" >17560, Rue Grier, Pierrefonds, Montréal, Québec H9J2A8 Canada</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", my: 2 }}>
            <Box>
              <MailIcon sx={{ fontSize: "2rem", mr: 2, color: "primary.dark" }} />
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ ...textLeft, fontWeight: "bold" }} >
                Email us at</Typography>
              <Typography variant="body1" >emailus@vrtta.green</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", my: 2 }}>
            <Box>
              <PhoneIphoneIcon sx={{ fontSize: "2rem", mr: 2, color: "primary.dark" }} />
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ ...textLeft, fontWeight: "bold" }}>
                Call us at</Typography>
              <Typography variant="body1" >(001) 438-882-5385</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid sx={{
          backgroundColor: "primary.light", boxShadow: 4, "&:hover": {
            boxShadow: 8
          }, paddingX: 2, mb: 8
        }} size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <Form>
            <Box sx={{ my: 2, mt: 4, justifyContent: "center", display: "flex" }}>
              <Typography variant="subtitle1" sx={{ ...textCenter, fontWeight: "bold", color: "primary.dark" }}>Contact Us</Typography>
            </Box>
            <Box sx={{ my: 2, mx: 2 }}>
              <Grid container direction={"column"}>
                <Grid sx={{ mx: "auto", my: 2 }}>
                  <TextField placeholder="Your Name"
                    variant="standard" sx={{ width: 300 }} />
                </Grid>
                <Grid sx={{ mx: "auto", my: 2 }}>
                  <TextField placeholder="Your Email"
                    variant="standard" sx={{ width: 300 }} />
                </Grid>
                <Grid sx={{ mx: "auto", my: 2 }}>
                  <TextField placeholder="Subject"
                    variant="standard" sx={{ width: 300 }} />
                </Grid>
                <Grid sx={{ mx: "auto", my: 2 }}>
                  <TextField placeholder="Your Message" multiline sx={{ width: 300 }} minRows={3} />
                </Grid>
                <Grid sx={{ mx: "auto", my: 2 }}>
                  <Button type="submit" sx={{
                    textTransform: "none", backgroundColor: "primary.dark", color: "primary.contrastText", paddingY: 1.5, paddingX: 3, "&:hover": {
                      boxShadow: 3
                    },
                    borderRadius: "10px"
                  }}>Send Message</Button>
                </Grid>
              </Grid>
            </Box>
          </Form>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ my: 4 }}></Box>
  </Container>;
}

