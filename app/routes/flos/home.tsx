import { Box, Grid, Typography } from "@mui/material";
import { GrLocation } from "react-icons/gr";
import { LuCircleCheckBig, LuEarth, LuPackage, LuRoute, LuTruck } from "react-icons/lu";
import { RiSpeedUpFill } from "react-icons/ri";
import Button_v1 from "~/components/Button_v1";
import Button_v4 from "~/components/Button_v4";
import Button_v5_blue from "~/components/Button_v5_blue";
import Card_v5_blue from "~/components/Card_v5_blue";
import Card_v7_blue from "~/components/Card_v7_blue";
import Card_v8_blue from "~/components/Card_v8_blue";
import Card_v9 from "~/components/Card_v9";
import { backgroundColors, templateColors } from "~/components/Colors";
import Heading_v1_black from "~/components/Heading_v1_black";
import Heading_v1_white from "~/components/Heading_v1_white";
import Heading_v2 from "~/components/Heading_v2";
import Heading_v4_blue from "~/components/Heading_v4_blue";
import { paragraph_2, paragraph_3, title_2 } from "~/components/Style";
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
const cards_3 = [
  {
    title: "Global Retailer Transformation",
    subtitle: "Reduced logistics emissions by 45% while improving delivery times",
    tag: "Retail",
    items: ["45% emission reduction", "15% faster deliveries", "$2M annual savings"],
  },

  {
    title: "Manufacturing Supply Chain",
    subtitle: "Optimized supplier network reducing carbon footprint by 50%",
    tag: "Manufacturing",
    items: ["50% carbon reduction", "20% cost savings", "99.5% on-time delivery"],
  },

  {
    title: "Food Distribution Network",
    subtitle: "Sustainable cold chain management with zero food waste goals",
    tag: "Food & Beverage",
    items: ["85% waste reduction", "30% energy savings", "Carbon neutral delivery"],
  },
];
const cards_4 = [
  {
    title: "AI Route Planning",
    subtitle: "Machine learning algorithms for optimal route calculation",
    icon: RiSpeedUpFill,
  },
  {
    title: "IoT Fleet Tracking",
    subtitle: "Real-time monitoring of vehicle performance and location",
    icon: RiSpeedUpFill,
  },
  {
    title: "Blockchain Traceability",
    subtitle: "Immutable supply chain records for transparency",
    icon: RiSpeedUpFill,
  },
  {
    title: "Carbon Analytics",
    subtitle: "Comprehensive emissions tracking and reporting",
    icon: RiSpeedUpFill,
  },
];
const cards_5 = [
  "Multi-currency and language support",
  "Local regulation compliance",
  "Regional sustainability standards",
];
const home = () => {
  return (
    <Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Box sx={{ paddingY: 4 }} />
        <Heading_v4_blue
          content={{
            title: ["Optimize Your", "Supply Chain"],
            subtitle:
              "Transform your freight, logistics, and supply chain operations with sustainable solutions that reduce environmental impact while improving efficiency and reducing costs.",
            tag: "Freight, Logistics & Supply Chain",
          }}
        />
        <Box sx={{ paddingY: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
          <Box>
            <Button_v5_blue text="Optimize Your Fleet" />
          </Box>
          <Box>
            <Button_v4 text="Calculate Savings" />
          </Box>
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Heading_v1_black
          title="Complete Logistics Solutions"
          subtitle="Comprehensive tools and strategies to make your supply chain more sustainable and efficient"
        />
        <Box sx={{ paddingY: 4 }} />
        <Grid container spacing={2} sx={{ paddingX: 2 }}>
          {cards.map((c, i) => (
            <Grid key={i} size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }}>
              <Card_v5_blue item={c} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ paddingY: 2 }} />
        <Heading_v1_black
          title="Proven Impact"
          subtitle="Our solutions deliver measurable results across key performance indicators"
        />
        <Box sx={{ paddingY: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container spacing={2}>
            {cards_2.map((c, i) => (
              <Grid
                key={i}
                size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}
                sx={{ display: "flex", justifyContent: "center" }}>
                <Card_v9 item={c} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ paddingY: 2 }} />
      </Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Heading_v1_black
          title="Customer Success Stories"
          subtitle="See how leading companies have transformed their supply chains with our solutions"
        />
        <Box sx={{ paddingY: 2 }} />
        <Grid container spacing={2} sx={{ paddingX: 2 }}>
          {cards_3.map((c, i) => (
            <Grid key={i} size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
              <Card_v7_blue item={c} />
            </Grid>
          ))}
        </Grid>
        <Grid container>
          <Grid size={{ sm: 12, md: 6 }} sx={{ padding: 2 }}>
            <Heading_v2
              title="Advanced Technology Stack"
              subtitle="Leverage cutting-edge technologies to optimize every aspect of your supply chain operations, from planning to execution."
            />
            <Box sx={{ paddingY: 1 }} />
            <Box>
              {cards_4.map((c, i) => (
                <Box key={i}>
                  <Card_v8_blue item={c} />
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid
            size={{ sm: 12, md: 6 }}
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Box
              sx={{
                backgroundImage: `linear-gradient(135deg, ${templateColors[3]}, ${templateColors[2]})`,
                padding: 4,
                borderRadius: 3,
              }}>
              <Box>
                <GrLocation color="white" size={44} />
              </Box>
              <Box sx={{ paddingY: 1 }} />
              <Box>
                <Typography sx={{ ...title_2, fontWeight: 600, color: "white" }}>Global Reach, Local Impact</Typography>
              </Box>
              <Box sx={{ paddingY: 1 }} />
              <Box>
                <Typography sx={{ ...paragraph_2, color: "white" }}>
                  Our platform supports operations across 150+ countries, helping you optimize logistics while meeting
                  local sustainability requirements.
                </Typography>
              </Box>
              <Box sx={{ paddingY: 1 }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {cards_5.map((c, i) => (
                  <Box
                    key={i}
                    sx={{ color: "white", display: "flex", gap: 2, justifyContent: "left", alignItems: "center" }}>
                    <Box>
                      <LuCircleCheckBig size={20} />
                    </Box>
                    <Box>
                      <Typography sx={{ ...paragraph_3 }}>{c}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box sx={{ paddingY: 1 }} />
              <Box>
                <Button_v1 text="Schedule Consulation" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundImage: `linear-gradient(90deg, ${templateColors[3]}, ${templateColors[2]})`, paddingX: 2 }}>
        <Heading_v1_white
          title="Transform Your Supply Chain Today"
          subtitle="Join industry leaders who are already reducing costs and environmental impact with our solutions"
        />
        <Box sx={{ paddingY: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Button_v1 text="Request Demo" />
          </Box>
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>
    </Box>
  );
};
export default home;
