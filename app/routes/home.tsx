import { Box, Button, Card, CardContent, CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import 'mui-player/dist/mui-player.min.css';
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const cardsx = {
    width: "95%",
    height: 200,
    mx: 'auto',
    my: 1,
    "&:hover": {
      boxShadow: 3,
      color: "primary.main"
    },
    borderRadius: "12px",
    elevation: 10
  }
  const textLeft = { textAlign: "left" }
  const textCenter = { textAlign: "center" }
  const textBold = { fontWeight: "bold" }
  const options = {
    startColor: "#659d32",
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
  const cards = [{
    title: "What we do?",
    content: "We develop greener and more sustainable product choices in the ‘Circularity’ context.",
    image: "/green_shoot.png"
  }, {
    title: "Our Vision",
    content: "To contribute towards a greener society through simple solutions and circularity models.",
    image: "/green_eye.png"
  }, {
    title: "Our Mission",
    content: "Leverage creativity and innovation to develop greener solutions.",
    image: "/green_target.png"
  }, {
    title: "What drives us?",
    content: "A passion for sustainable living: ‘Greener choice, Better life’.",
    image: "/green_truck.png"
  },]
  return <Container>
    <Box>
      <Box sx={{ my: 12 }}></Box>
      <Typography variant="h2" sx={{ ...textBold, ...textCenter, }}>Empowering Sustain-Ability</Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h1" sx={{ ...textVrtta, letterSpacing: 0 }}>Track, Act, Inspire</Typography>
      </Box>
      <Box sx={{ margin: 5 }}></Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="body1" sx={{ ...textNormal, maxWidth: 600 }}>Analyze environmental impacts, optimize supply chains, and achieve sustainability goals with our comprehensive life cycle assessment platform.</Typography>
      </Box>
      <Box sx={{ margin: 5 }}></Box>
      <Box>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Button sx={{
            color: "white", backgroundColor: "primary.main", width: 1, "&:hover": {
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
    <Divider variant="middle" sx={{ my: 8 }} />
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Box>
          <Typography variant="subtitle1" sx={{ display: "inline", fontWeight: "light" }}>Vrtta Green Solutions Inc. (</Typography>
          <Typography variant="subtitle1" sx={{ color: "primary.dark", fontWeight: "medium", display: "inline" }}>VRTTA</Typography>
          <Typography variant="subtitle1" sx={{ display: "inline", fontWeight: "light" }}>), is a Montreal-based sustainability company.</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Box sx={{ maxWidth: "800px" }}>
          <Typography variant="subtitle2" sx={{ display: "inline", fontWeight: "light" }}  >Our unwavering belief is encapsulated in our tagline: ‘</Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "medium", color: "primary.dark", display: "inline" }} >Greener Choice, Better Life.</Typography>
          <Typography variant="subtitle2" sx={{ display: "inline", fontWeight: "light" }}  >‘ The name VRTTA, derived from the Sanskrit term for ‘Circle,’ embodies our commitment to closed-loop sustainability.</Typography>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ my: 8 }} />
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <Card >
          <CardMedia component='iframe'
            image={"/Arivu_Video.mp4"}
            sx={{ height: { sm: "360px", md: "480px", lg: "720px" }, width: { sm: "640px", md: "853px", lg: "1280px" } }}
          />
        </Card>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Grid container sx={{ display: "flex", my: 4 }}>
        {cards.map((c) =>
          <Grid size={cardGridSize}>
            <Card sx={cardsx}>
              <CardContent>
                <Box sx={{ justifyContent: "left", display: 'flex', width: 1, height: 50 }}>
                  <img src={c.image} />
                </Box>
                <Typography variant="body1" sx={{ ...textLeft, fontWeight: "medium" }}>{c.title}</Typography>
                <Typography variant="body2" sx={{ ...textLeft, fontWeight: "regular", color: "grey" }}>{c.content}</Typography></CardContent>
            </Card>
          </Grid>)}
      </Grid>
    </Box>
  </Container>;
}

