import { Box, Grid } from "@mui/material";
import Button_v4 from "~/components/Button_v4";
import Button_v6 from "~/components/Button_v6";
import { backgroundColors } from "~/components/Colors";
import Heading_v1 from "~/components/Heading_v1";
import Heading_v5 from "~/components/Heading_v5";
import { LuRoute } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { LuTruck } from "react-icons/lu";
import { LuEarth } from "react-icons/lu";
import Card_v5_blue from "~/components/Card_v5_blue";
import Card_v9 from "~/components/Card_v9";
const cards = [
  {
    title: "Route Optimization",
    subtitle: "AI-powered logistics planning to minimize fuel consumption and emissions",
    icon: LuRoute,
    items: [
      "Dynamic route planning",
      "Real-time traffic integration",
      "Multi-modal optimization",
      "Carbon footprint tracking",
    ],
  },
  {
    title: "Sustainable Packaging",
    subtitle: "Innovative packaging solutions that reduce waste and environmental impact",
    icon: LuPackage,
    items: [
      "Biodegradable materials",
      "Right-sizing algorithms",
      "Returnable packaging",
      "Packaging lifecycle analysis",
    ],
  },
  {
    title: "Fleet Management",
    subtitle: "Optimize your vehicle fleet for efficiency and sustainability",
    icon: LuTruck,
    items: [
      "Electric vehicle integration",
      "Fuel efficiency monitoring",
      "Predictive maintenance",
      "Driver behavior analytics",
    ],
  },
  {
    title: "Supply Chain Visibility",
    subtitle: "End-to-end transparency across your entire supply chain network",
    icon: LuEarth,
    items: ["Supplier sustainability scoring", "Carbon tracking", "Risk assessment", "Compliance monitoring"],
  },
];
const cards_2 = [
  { title: "Fuel Reduction", subtitle: "Average fuel savings through route optimization", stats: "25%" },
  { title: "Packaging Waste", subtitle: "Reduction in packaging materials", stats: "40%" },
  { title: "Visibility Increase", subtitle: "Improvement in supply chain transparency", stats: "60%" },
  { title: "Cost Savings", subtitle: "Operational cost reduction", stats: "30%" },
];
const flos = () => {
  return (
    <Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})` }}>
        <Heading_v5
          title={["Optimize Your", "Supply Chain"]}
          subtitle="Transform your freight, logistics, and supply chain operations with sustainable solutions that reduce environmental impact while improving efficiency and reducing costs."
          tag="Freight, Logistics & Supply Chain"
        />
        <Box sx={{ paddingY: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Box>
            <Button_v6 text="Optimize Your Fleet" />
          </Box>
          <Box>
            <Button_v4 text="Calculate Savings" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})` }}>
        <Heading_v1
          title="Complete Logistics Solutions"
          subtitle="Comprehensive tools and strategies to make your supply chain more sustainable and efficient"
        />
        <Box sx={{ paddingY: 4 }} />
        <Grid container spacing={2} sx={{ paddingX: 2 }}>
          {cards.map((c, i) => (
            <Grid key={i} size={6}>
              <Card_v5_blue item={c} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ paddingY: 2 }} />
        <Heading_v1
          title="Proven Impact"
          subtitle="Our solutions deliver measurable results across key performance indicators"
        />
        <Box sx={{ paddingY: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container>
            {cards_2.map((c, i) => (
              <Grid key={i} size={3}>
                <Card_v9 item={c} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ paddingY: 2 }} />
      </Box>

      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})` }}>
        <Heading_v1
          title="Customer Success Stories"
          subtitle="See how leading companies have transformed their supply chains with our solutions"
        />
      </Box>
    </Box>
  );
};
export default flos;
