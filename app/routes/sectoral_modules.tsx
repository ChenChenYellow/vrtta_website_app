import { Box, Button, Grid, Typography } from "@mui/material";
import { backgroundColors, templateColors } from "~/components/Colors";
import { pageParagraph, pageTitle, paragraph_1, paragraph_3, title_1 } from "~/components/Style";
import { FaBuilding } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import Card_v3 from "~/components/Card_v3";
import Card_v4 from "~/components/Card_v4";
import { FiArrowRight } from "react-icons/fi";
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
    buttonText: "Explore FLoS Solutions",
  },
];
const cards_2 = [
  { title: "Industry Expertise", subtitle: "Deep understanding of sector-specific challenges and regulations" },
  { title: "Tailored Solutions", subtitle: "Customized tools and strategies that fit your industry workflow" },
  { title: "Proven Results", subtitle: "Track record of success across different industry verticals" },
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
      <Box>
        <Box sx={{ paddingY: 4 }} />
        <Box>
          <Typography sx={{ ...title_1, fontWeight: 600, textAlign: "center" }}>
            Why Choose Sectoral Solutions?
          </Typography>
        </Box>
        <Box sx={{ paddingY: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ maxWidth: 800 }}>
            <Typography sx={{ ...paragraph_1, color: "gray", textAlign: "center" }}>
              Every industry has unique sustainability challenges. Our sectoral approach ensures you get solutions
              designed specifically for your industry's needs.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ paddingY: 3 }} />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {cards_2.map((c, i) => (
            <Box key={i}>
              <Card_v4 item={c} index={i} />
            </Box>
          ))}
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>
      <Box sx={{ backgroundImage: `linear-gradient(90deg, ${templateColors[0]}, ${templateColors[1]})` }}>
        <Box sx={{ paddingY: 4 }} />
        <Box>
          <Typography sx={{ ...title_1, fontWeight: 600, textAlign: "center", color: "white" }}>
            Ready to Transform Your Industry?
          </Typography>
        </Box>
        <Box sx={{ paddingY: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography sx={{ ...paragraph_1, color: "white", textAlign: "center" }}>
              Choose your sector and start implementing sustainability solutions designed specifically for your industry
            </Typography>
          </Box>
        </Box>
        <Box sx={{ paddingY: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button sx={{ textTransform: "none", color: "black", backgroundColor: backgroundColors[0], borderRadius: 2 }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                paddingY: 0.5,
                paddingX: 2,
              }}>
              <Box>
                <Typography sx={{ ...paragraph_3 }}>Contact Our Sector Experts</Typography>
              </Box>
              <Box>
                <FiArrowRight />
              </Box>
            </Box>
          </Button>
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>
    </Box>
  );
};
export default sectoral_modules;
