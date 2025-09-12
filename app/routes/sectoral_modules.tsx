import { Box, Grid, Typography } from "@mui/material";
import { backgroundColors, templateColors } from "~/components/Colors";
import { pageParagraph, pageTitle } from "~/components/Style";
import { FaBuilding } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import Card_v3 from "~/components/Card_v3";
const cards = [
  {
    icon: FaBuilding,
    title: "ABC - Architecture, Building & Construction",
    subtitle: "Comprehensive sustainability solutions for the built environment",
    items: [
      "Green building certification (LEED, BREEAM)",
      "Sustainable material selection",
      "Energy-efficient design optimization",
      "Construction waste management",
      "Lifecycle assessment tools",
    ],
    buttonText: "Explore ABC Solutions",
  },
  {
    icon: FaTruck,
    title: "FLoS - Freight, Logistics & Supply Chain",
    subtitle: "Optimize transportation and logistics for minimal environmental impact",
    items: [
      "Carbon footprint tracking",
      "Route optimization algorithms",
      "Sustainable packaging solutions",
      "Supplier sustainability scoring",
      "Last-mile delivery optimization",
    ],
    buttonText: "Explore ABC Solutions",
  },
];
const sectoral_modules = () => {
  return (
    <Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})` }}>
        <Box sx={{ paddingY: 4 }} />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Box>
            <Typography sx={{ ...pageTitle, fontWeight: 600 }}>Sectoral</Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                ...pageTitle,
                fontWeight: 600,
                backgroundImage: `linear-gradient(90deg, ${templateColors[0]}, ${templateColors[1]})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Sustainability
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ ...pageTitle, fontWeight: 600 }}>Modules</Typography>
          </Box>
        </Box>
        <Box sx={{ paddingY: 0.5 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ ...pageParagraph, textAlign: "center", maxWidth: 800, color: "gray" }}>
            Industry-specific solutions tailored to the unique challenges and opportunities within your sector. Choose
            your focus area to get started.
          </Typography>
        </Box>
        <Box sx={{ paddingY: 6 }} />
      </Box>
      <Box sx={{ paddingX: 6, paddingY: 12 }}>
        <Grid container columnSpacing={3}>
          {cards.map((c, i) => (
            <Grid key={i} size={6}>
              <Card_v3 item={c} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default sectoral_modules;
