import { Box, Grid, Typography } from "@mui/material";
import { FiAward } from "react-icons/fi";
import { LuBuilding, LuHammer, LuLeaf, LuRecycle } from "react-icons/lu";
import { RxLightningBolt } from "react-icons/rx";
import Button_v1 from "~/components/Button_v1";
import Button_v4 from "~/components/Button_v4";
import Button_v5_green from "~/components/Button_v5_green";
import Card_v5_green from "~/components/Card_v5_green";
import Card_v6 from "~/components/Card_v6";
import Card_v7_green from "~/components/Card_v7_green";
import Card_v8_green from "~/components/Card_v8_green";
import { backgroundColors, templateColors } from "~/components/Colors";
import Heading_v1_black from "~/components/Heading_v1_black";
import Heading_v2 from "~/components/Heading_v2";
import Heading_v4_green from "~/components/Heading_v4_green";
import { paragraph_2, title_2 } from "~/components/Style";
const cards = [
  {
    title: "Green Building Certification",
    subtitle: "Navigate LEED, BREEAM, and other certification processes with expert guidance",
    icon: LuBuilding,
    items: ["LEED Platinum consulting", "BREEAM assessment", "Energy Star certification", "Net-zero building design"],
  },
  {
    title: "Sustainable Materials",
    subtitle: "Optimize material selection for environmental impact and performance",
    icon: LuLeaf,
    items: [
      "LCA material analysis",
      "Recycled content optimization",
      "Local sourcing strategies",
      "Bio-based alternatives",
    ],
  },
  {
    title: "Energy Optimization",
    subtitle: "Maximize energy efficiency across all building systems",
    icon: RxLightningBolt,
    items: ["HVAC optimization", "Smart building integration", "Renewable energy systems", "Energy monitoring"],
  },
  {
    title: "Waste Management",
    subtitle: "Minimize construction and operational waste through smart strategies",
    icon: LuRecycle,
    items: [
      "Construction waste plans",
      "Circular economy integration",
      "Demolition recovery",
      "Operational waste reduction",
    ],
  },
];
const cards_2 = [
  { title: "LEED (Leadership in Energy and Environmental Design)" },
  { title: "BREEAM (Building Research Establishment Environmental Assessment Method)" },
  { title: "Energy Star Certification" },
  { title: "Living Building Challenge" },
  { title: "WELL Building Standard" },
  { title: "Green Globes Certification" },
];
const cards_3 = [
  {
    title: "Corporate Headquarters Transformation",
    subtitle: "Achieved LEED Platinum certification with 40% energy reduction",
    tag: "Commercial",
    items: ["40% Energy Savings", "LEED Platinum", "60% Waste Diversion"],
  },
  {
    title: "Sustainable Housing Development",
    subtitle: "100-unit residential project with net-zero energy performance",
    tag: "Residential",
    items: ["Net-Zero Energy", "100 Units", "Carbon Neutral"],
  },
  {
    title: "Industrial Facility Retrofit",
    subtitle: "Manufacturing facility upgrade reducing environmental impact by 50%",
    tag: "Industrial",
    items: ["50% Impact Reduction", "ROI in 3 years", "Zero Waste to Landfill"],
  },
];
const cards_4 = [
  {
    title: "Design Optimization",
    subtitle: "AI-powered design recommendations for maximum efficiency",
    icon: LuHammer,
  },
  {
    title: "Performance Monitoring",
    subtitle: "Real-time tracking of energy, water, and waste metrics",
    icon: LuBuilding,
  },
  {
    title: "Certification Support",
    subtitle: "Automated documentation and reporting for green certifications",
    icon: FiAward,
  },
];
const home = () => {
  return (
    <Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Box sx={{ paddingY: 4 }} />
        <Heading_v4_green
          content={{
            title: ["Build a", "Sustainable", "Future"],
            subtitle: `Transform the built environment with comprehensive sustainability solutions for architecture, building
              products, and construction. From design to occupancy, we help you create buildings that benefit both
              people and planet.`,
            tag: "Architecture, Building & Construction",
          }}
        />
        <Box sx={{ paddingY: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
          <Box>
            <Button_v5_green text="Start Your Project" />
          </Box>
          <Box>
            <Button_v4 text="Download Case Studies" />
          </Box>
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Heading_v1_black
          title="Comprehensive Building Solutions"
          subtitle="End-to-end sustainability services for every phase of your building project"
        />

        <Box sx={{ paddingY: 4 }} />
        <Grid container spacing={2} sx={{ paddingX: 2 }}>
          {cards.map((c, i) => (
            <Grid key={i} size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }}>
              <Card_v5_green item={c} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ paddingY: 2 }} />
        <Heading_v1_black
          title="Recognized Certifications"
          subtitle="We help you achieve the industry's most respected green building certifications"
        />
        <Box sx={{ paddingY: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center", paddingX: 2 }}>
          <Grid container sx={{ maxWidth: 1000 }} spacing={2}>
            {cards_2.map((c, i) => (
              <Grid
                key={i}
                size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}
                sx={{ display: "flex", justifyContent: "center" }}>
                <Card_v6 item={c} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>

      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Box sx={{ paddingY: 1 }} />
        <Heading_v1_black
          title="Success Stories"
          subtitle="Real projects, real results. See how we've helped transform buildings across different sectors."
        />
        <Box sx={{ paddingY: 3 }} />
        <Grid container spacing={2} sx={{ paddingX: 2 }}>
          {cards_3.map((c, i) => (
            <Grid key={i} size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
              <Card_v7_green item={c} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ paddingY: 2 }} />
        <Grid container>
          <Grid size={{ sm: 12, md: 6 }} sx={{ padding: 2 }}>
            <Heading_v2
              title="Advanced Building Analytics"
              subtitle="Our proprietary tools help you make data-driven decisions throughout the building lifecycle, from initial design to ongoing operations."
            />
            <Box sx={{ paddingY: 1 }} />
            <Box>
              {cards_4.map((c, i) => (
                <Box key={i}>
                  <Card_v8_green item={c} />
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
                backgroundImage: `linear-gradient(135deg, ${templateColors[0]}, ${templateColors[1]})`,
                padding: 4,
                borderRadius: 3,
              }}>
              <Box>
                <Typography sx={{ ...title_2, fontWeight: 600, color: "white" }}>Ready to Get Started?</Typography>
              </Box>
              <Box sx={{ paddingY: 1 }} />
              <Box>
                <Typography sx={{ ...paragraph_2, color: "white" }}>
                  Transform your next building project with our comprehensive sustainability solutions. Schedule a
                  consultation to discuss your specific needs.
                </Typography>
              </Box>
              <Box sx={{ paddingY: 1 }} />
              <Box>
                <Button_v1 text="Schedule Consulation" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ paddingY: 4 }} />
      </Box>
    </Box>
  );
};
export default home;
