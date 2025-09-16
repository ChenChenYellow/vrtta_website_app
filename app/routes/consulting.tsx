import { Box, Grid } from "@mui/material";
import Button_v5_green from "~/components/Button_v5_green";
import Card_v1 from "~/components/Card_v1";
import Card_v4 from "~/components/Card_v4";
import { backgroundColors } from "~/components/Colors";
import Heading_v1_black from "~/components/Heading_v1_black";
import Heading_v3_green from "~/components/Heading_v3_green";
const cards = [
  {
    title: "Sustainability Strategy",
    subtitle: "Develop comprehensive roadmaps for your sustainability transformation",
    items: ["Carbon footprint assessment", "Goal setting & KPIs", "Implementation planning"],
  },
  {
    title: "ESG Compliance",
    subtitle: "Navigate complex environmental, social, and governance requirements",
    items: ["Regulatory compliance", "Reporting frameworks", "Risk assessment"],
  },
  {
    title: "Green Certification",
    subtitle: "Achieve industry-leading certifications and standards",
    items: ["LEED certification", "ISO 14001", "B Corp assessment"],
  },
  {
    title: "Training & Development",
    subtitle: "Build internal capabilities for sustained impact",
    items: ["Team workshops", "Leadership training", "Change management"],
  },
];
const card_2 = [
  { title: "Assessment", subtitle: "Comprehensive analysis of your current sustainability position" },
  { title: "Strategy", subtitle: "Custom roadmap development aligned with your business goals" },
  { title: "Implementation", subtitle: "Guided execution with ongoing support and monitoring" },
  { title: "Optimization", subtitle: "Continuous improvement and performance enhancement" },
];
const consulting_2 = () => {
  return (
    <Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Box sx={{ paddingY: 4 }} />
        <Heading_v3_green
          title={["Expert", "Sustainability", "Consulting"]}
          subtitle="Transform your business with strategic guidance from our team of sustainability experts. Drive measurable impact while achieving your business objectives."
        />
        <Box sx={{ paddingY: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Button_v5_green text="Schedule Consultation" />
          </Box>
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>

      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Box sx={{ paddingY: 1 }} />
        <Heading_v1_black
          title="Our Consulting Services"
          subtitle="Comprehensive solutions tailored to your unique sustainability challenges"
        />
        <Box sx={{ paddingY: 4 }} />
        <Box>
          <Grid container spacing={2} sx={{ paddingX: 2 }}>
            {cards.map((c, i) => (
              <Grid key={i} size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 3 }}>
                <Card_v1 title={c.title} subtitle={c.subtitle} items={c.items} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ paddingY: 4 }} />
        <Heading_v1_black
          title="Our Proven Process"
          subtitle="A systematic approach to delivering sustainable transformation"
        />
        <Box sx={{ paddingY: 4 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container sx={{ maxWidth: 1600 }} spacing={2}>
            {card_2.map((c, i) => (
              <Grid
                key={i}
                size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }}
                sx={{ display: "flex", justifyContent: "center" }}>
                <Card_v4 item={c} index={i} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>
    </Box>
  );
};

export default consulting_2;
