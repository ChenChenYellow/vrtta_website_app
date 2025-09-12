import { Box, Grid, Typography } from "@mui/material";
import Card_v1 from "~/components/Card_v1";
import { paragraph_1, title_1 } from "~/components/Style";
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
const consulting_2 = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Typography sx={{ ...title_1, fontWeight: "600" }}>Expert Sustainability Consulting</Typography>
        </Box>
        <Box>
          <Typography sx={{ ...paragraph_1 }}>
            Transform your business with strategic guidance from our team of sustainability experts. Drive measurable
            impact while achieving your business objectives.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography>Our Consulting Services</Typography>
        </Box>
        <Box>
          <Typography>Comprehensive solutions tailored to your unique sustainability challenges</Typography>
        </Box>
        <Grid>
          {cards.map((c, i) => (
            <Grid key={i}>
              <Card_v1 title={c.title} subtitle={c.subtitle} items={c.items} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default consulting_2;
