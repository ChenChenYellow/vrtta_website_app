import { Box, Button, Card, CardContent, CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import "mui-player/dist/mui-player.min.css";
import type { Route } from "./+types/home";
import { backgroundColors, primaryColors, secondaryColors, templateColors } from "~/components/Colors";
import { MdBusiness } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RiHandHeartLine } from "react-icons/ri";
import Card_v2 from "~/components/Card_v2";
import { pageParagraph, pageSubtitle, pageTitle, paragraph_1, title_1, title_2 } from "~/components/Style";
import { FiArrowRight } from "react-icons/fi";
export function meta({}: Route.MetaArgs) {
  return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

const cards_v2 = [
  { title: "Sector", subtitle: "Sector subtitle", icon: MdBusiness },
  {
    title: "Organization",
    subtitle: `Organization subtitles
    Organization subtitlesOrganization s
    sdfgd
    `,
    icon: FaUsers,
  },
  { title: "Engagement", subtitle: "Engagement subtitle", icon: RiHandHeartLine },
];
export default function Home() {
  const cardsx = {
    width: "95%",
    height: 200,
    mx: "auto",
    my: 1,
    "&:hover": {
      boxShadow: 3,
      color: "primary.main",
    },
    borderRadius: "12px",
    elevation: 10,
  };
  const textLeft = { textAlign: "left" };
  const textCenter = { textAlign: "center" };
  const textBold = { fontWeight: "bold" };
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
    letterSpacing: 5,
    margin: 0,
    padding: 0,
  };
  const textNormal = {
    ...textCenter,
    fontWeight: "regular",
    color: "grey",
  };
  const textSubTitle = {
    ...textCenter,
    ...textBold,
  };
  const cardGridSize = { xs: 12, sm: 6, md: 6, lg: 3, xl: 3 };
  const cards = [
    {
      title: "What we do?",
      content: "We develop greener and more sustainable product choices in the ‘Circularity’ context.",
      image: "/green_shoot.png",
    },
    {
      title: "Our Vision",
      content: "To contribute towards a greener society through simple solutions and circularity models.",
      image: "/green_eye.png",
    },
    {
      title: "Our Mission",
      content: "Leverage creativity and innovation to develop greener solutions.",
      image: "/green_target.png",
    },
    {
      title: "What drives us?",
      content: "A passion for sustainable living: ‘Greener choice, Better life’.",
      image: "/green_truck.png",
    },
  ];
  return (
    <Box>
      <Box sx={{ backgroundImage: `linear-gradient(145deg, white, ${secondaryColors[4]})` }}>
        <Box sx={{ paddingY: 2 }}></Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Typography sx={{ ...pageTitle, color: templateColors[1], fontWeight: 600 }}>Empowering</Typography>
          <Typography sx={{ ...pageTitle, color: primaryColors[0], fontWeight: 600 }}>Your</Typography>
        </Box>
        <Typography sx={{ ...pageTitle, color: templateColors[1], fontWeight: 600, textAlign: "center" }}>
          Sustainability Transformation
        </Typography>
        <Box sx={{ paddingY: 0.5 }} />
        <Typography sx={{ ...pageSubtitle, color: templateColors[1], fontWeight: 600, textAlign: "center" }}>
          Know, Quantify, Act, Inspire
        </Typography>
        <Box sx={{ margin: 5 }}></Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ ...pageParagraph, maxWidth: 800, color: "gray", textAlign: "center" }}>
            Drive environmental impact while boosting <b>Performance</b>, reduce <b>Costs</b>, align with{" "}
            <b>Compliance</b> and build <b>Brand reputation</b>. Propagate Sustainability value across supply-chains
            through sustainability metrics.
          </Typography>
        </Box>
        <Box sx={{ margin: 5 }}></Box>
        <Box>
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                ...paragraph_1,
                color: "white",
                textTransform: "none",
                backgroundImage: `linear-gradient(145deg, ${templateColors[0]}, ${templateColors[1]})`,
                display: "flex",
                gap: 1,
                paddingX: 4,
                paddingY: 1.5,
                borderRadius: 2,
              }}>
              <Box>
                <Typography>Start your journey</Typography>
              </Box>
              <Box>
                <FiArrowRight />
              </Box>
            </Button>
            {/* <Button sx={{
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
          }}>Watch Demo</Button> */}
          </Grid>
        </Box>
        <Box sx={{ height: 20, display: "flex" }}>
          {primaryColors.map((c, i) => (
            <Box key={i} sx={{ height: 20, flex: 1, backgroundColor: c }}></Box>
          ))}
        </Box>
        <Box sx={{ height: 20, display: "flex" }}>
          {secondaryColors.map((c, i) => (
            <Box key={i} sx={{ height: 20, flex: 1, backgroundColor: c }}></Box>
          ))}
        </Box>
      </Box>
      {/* <Divider variant="middle" sx={{ my: 8 }} />
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <Box>
            <Typography variant="subtitle1" sx={{ display: "inline", fontWeight: "light" }}>
              Vrtta Green Solutions Inc. (
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "primary.dark", fontWeight: "medium", display: "inline" }}>
              VRTTA
            </Typography>
            <Typography variant="subtitle1" sx={{ display: "inline", fontWeight: "light" }}>
              ), is a Montreal-based sustainability company.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <Box sx={{ maxWidth: "800px" }}>
            <Typography variant="subtitle2" sx={{ display: "inline", fontWeight: "light" }}>
              Our unwavering belief is encapsulated in our tagline: ‘
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: "medium", color: "primary.dark", display: "inline" }}>
              Greener Choice, Better Life.
            </Typography>
            <Typography variant="subtitle2" sx={{ display: "inline", fontWeight: "light" }}>
              ‘ The name VRTTA, derived from the Sanskrit term for ‘Circle,’ embodies our commitment to closed-loop
              sustainability.
            </Typography>
          </Box>
        </Box>
        <Divider variant="middle" sx={{ my: 8 }} />
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <Card>
            <CardMedia
              component="iframe"
              image={"/Arivu_Video.mp4"}
              sx={{
                height: { sm: "360px", md: "480px", lg: "720px" },
                width: { sm: "640px", md: "853px", lg: "1280px" },
              }}
            />
          </Card>
        </Box>
        <Divider sx={{ my: 4 }} />
        <Grid container sx={{ display: "flex", my: 4 }}>
          {cards.map((c) => (
            <Grid size={cardGridSize}>
              <Card sx={cardsx}>
                <CardContent>
                  <Box sx={{ justifyContent: "left", display: "flex", width: 1, height: 50 }}>
                    <img src={c.image} />
                  </Box>
                  <Typography variant="body1" sx={{ ...textLeft, fontWeight: "medium" }}>
                    {c.title}
                  </Typography>
                  <Typography variant="body2" sx={{ ...textLeft, fontWeight: "regular", color: "grey" }}>
                    {c.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box> */}
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 4 }}>
        <Box sx={{ paddingY: 5 }} />
        <Box sx={{}}>
          <Typography sx={{ ...title_1, fontWeight: 600, textAlign: "center" }}>Our Expertise</Typography>
        </Box>
        <Box sx={{ paddingY: 1 }} />
        <Box>
          <Typography sx={{ ...paragraph_1, textAlign: "center", color: "gray" }}>
            Comprehensive sustainability solutions tailored to your industry needs
          </Typography>
        </Box>
        <Box sx={{ paddingY: 4 }} />
        <Grid container columnSpacing={4}>
          {cards_v2.map((c, i) => (
            <Grid key={i} size={4} sx={{}}>
              <Card_v2 title={c.title} subtitle={c.subtitle} icon={c.icon} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ paddingY: 5 }} />
      </Box>
      <Box sx={{ backgroundColor: templateColors[0] }}>
        <Box sx={{ paddingY: 4 }} />
        <Box>
          <Typography sx={{ ...title_1, color: "white", fontWeight: 600, textAlign: "center" }}>
            Ready to Make a Difference?
          </Typography>
        </Box>
        <Box sx={{ paddingY: 1 }} />
        <Box>
          <Typography sx={{ ...paragraph_1, color: "white", textAlign: "center" }}>
            Join the sustainability revolution and transform your business for a greener tomorrow
          </Typography>
        </Box>
        <Box sx={{ paddingY: 7 }} />
      </Box>
    </Box>
  );
}
