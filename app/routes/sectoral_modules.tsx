import { Box, Grid } from "@mui/material";
import { FaTruck } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import Button_v1 from "~/components/Button_v1";
import Card_v3_blue from "~/components/Card_v3_blue";
import Card_v3_green from "~/components/Card_v3_green";
import Card_v4 from "~/components/Card_v4";
import { backgroundColors, templateColors } from "~/components/Colors";
import Heading_v1_black from "~/components/Heading_v1_black";
import Heading_v1_white from "~/components/Heading_v1_white";
import Heading_v3_green from "~/components/Heading_v3_green";
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
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Box sx={{ paddingY: 4 }} />
        <Heading_v3_green
          title={["Sectoral", "Sustainability", "Modules"]}
          subtitle="Industry-specific solutions tailored to the unique challenges and opportunities within your sector. Choose
            your focus area to get started."
        />
        <Box sx={{ paddingY: 6 }} />
      </Box>
      <Box sx={{ paddingX: 4, paddingY: 6, backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})` }}>
        <Grid container spacing={3}>
          <Grid size={{ sm: 12, md: 6 }}>
            <Card_v3_green item={cards[0]} />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <Card_v3_blue item={cards[1]} />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Heading_v1_black
          title="Why Choose Sectoral Solutions?"
          subtitle="Every industry has unique sustainability challenges. Our sectoral approach ensures you get solutions
              designed specifically for your industry's needs."
        />
        <Box sx={{ paddingY: 4 }} />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
          {cards_2.map((c, i) => (
            <Box key={i}>
              <Card_v4 item={c} index={i} />
            </Box>
          ))}
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>
      <Box sx={{ backgroundImage: `linear-gradient(90deg, ${templateColors[0]}, ${templateColors[1]})`, paddingX: 2 }}>
        <Heading_v1_white
          title="Ready to Transform Your Industry?"
          subtitle="Choose your sector and start implementing sustainability solutions designed specifically for your industry"
        />
        <Box sx={{ paddingY: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Button_v1 text="Contact Our Sector Experts" />
          </Box>
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>
    </Box>
  );
};
export default sectoral_modules;
