import { Box, Grid, Typography } from "@mui/material";
import { LuBuilding, LuChartColumn, LuCloud, LuLock, LuShield } from "react-icons/lu";
import { RiGlobalLine } from "react-icons/ri";
import { RxLightningBolt } from "react-icons/rx";
import Button_v4 from "~/components/Button_v4";
import Button_v5_green from "~/components/Button_v5_green";
import Card_v10_green from "~/components/Card_v10_green";
import Card_v5_green from "~/components/Card_v5_green";
import Card_v8_green from "~/components/Card_v8_green";
import { backgroundColors } from "~/components/Colors";
import Heading_v1_black from "~/components/Heading_v1_black";
import Heading_v2 from "~/components/Heading_v2";
import Heading_v4_green from "~/components/Heading_v4_green";
import { paragraph_2, title_2 } from "~/components/Style";
const cards = [
  {
    title: "Real-time Analytics",
    subtitle: "Track sustainability metrics with live dashboards and automated reporting",
    icon: LuChartColumn,
    items: ["Live data visualization", "Custom KPI tracking", "Automated alerts"],
  },
  {
    title: "Compliance Management",
    subtitle: "Stay ahead of regulations with built-in compliance monitoring",
    icon: LuShield,
    items: ["Regulatory updates", "Audit trails", "Risk assessment"],
  },
  {
    title: "Energy Optimization",
    subtitle: "AI-powered recommendations for reducing energy consumption",
    icon: RxLightningBolt,
    items: ["Smart scheduling", "Predictive analytics", "Cost optimization"],
  },
  {
    title: "Global Reporting",
    subtitle: "Multi-site tracking with standardized sustainability metrics",
    icon: RiGlobalLine,
    items: ["Centralized data", "Cross-site comparisons", "Unified reporting"],
  },
];
const cards_2 = [
  {
    title: "Reduce Costs",
    subtitle: "Average 30% reduction in operational costs through optimized resource usage",
    stats: "30%",
  },
  {
    title: "Improve Efficiency",
    subtitle: "Streamline processes and eliminate waste across all operations",
    stats: "45%",
  },
  { title: "Meet Targets", subtitle: "Track and achieve sustainability goals with precision", stats: "95%" },
];
const cards_3 = [
  { title: "Cloud-Native Architecture", subtitle: "Scalable, secure, and always available", icon: LuCloud },
  { title: "Enterprise Security", subtitle: "SOC 2 Type II compliant with end-to-end encryption", icon: LuLock },
  { title: "Mobile Ready", subtitle: "Access your data anywhere, anytime", icon: LuBuilding },
];
const cards_4 = [
  "SAP",
  "Salesforce",
  "Microsoft Azure",
  "AWS",
  "Google Cloud",
  "Oracle",
  "IBM Watson",
  "Tableau",
  "Power BI",
  "Slack",
];
const platform = () => {
  return (
    <Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Box sx={{ paddingY: 4 }} />
        <Heading_v4_green
          content={{
            title: ["The Complete", "Sustainability", "Platform"],
            subtitle:
              "Centralize, monitor, and optimize your sustainability efforts with our comprehensive platform. Get real-time insights and drive measurable impact across your organization.",
            tag: "Platform Solutions",
          }}
        />
        <Box sx={{ paddingY: 2 }} />
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Box>
            <Button_v5_green text="Start Free Trial" />
          </Box>
          <Box>
            <Button_v4 text="Schedule Demo" />
          </Box>
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Box sx={{ paddingY: 2 }} />
        <Heading_v1_black
          title="Powerful Features"
          subtitle="Everything you need to manage and optimize your sustainability initiatives"
        />
        <Box sx={{ paddingY: 4 }} />
        <Box sx={{ paddingX: 2 }}>
          <Grid container spacing={2}>
            {cards.map((c, i) => (
              <Grid key={i} size={{ sm: 12, md: 6, lg: 3 }}>
                <Card_v5_green item={c} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ paddingY: 4 }} />
        <Heading_v1_black
          title="Measurable Results"
          subtitle="Our platform delivers tangible outcomes for organizations worldwide"
        />
        <Box sx={{ paddingY: 4 }} />
        <Box sx={{ paddingX: 2, display: "flex", justifyContent: "center" }}>
          <Grid container spacing={2}>
            {cards_2.map((c, i) => (
              <Grid key={i} size={{ xs: 12, sm: 4 }} sx={{ display: "flex", justifyContent: "center" }}>
                <Card_v10_green item={c} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Grid container sx={{}}>
          <Grid size={{ sm: 12, md: 6 }}>
            <Box sx={{ paddingX: 2 }}>
              <Heading_v2
                title="Built for Enterprise"
                subtitle="Our platform is designed to scale with your organization, providing enterprise-grade security, reliability, and performance."
              />
            </Box>
            <Box sx={{ paddingY: 2 }} />
            <Box>
              {cards_3.map((c, i) => (
                <Box key={i}>
                  <Card_v8_green item={c} />
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingX: 2,
              }}>
              <Box>
                <Box sx={{ paddingY: 4 }} />
                <Box>
                  <Typography sx={{ ...title_2, fontWeight: 600 }}>Seamless Integrations</Typography>
                </Box>
                <Box sx={{ paddingY: 2 }} />
                <Grid container spacing={2}>
                  {cards_4.map((c, i) => (
                    <Grid key={i} size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}>
                      <Box sx={{ border: 1, borderColor: "lightgray", borderRadius: 4, paddingY: 2 }}>
                        <Typography sx={{ ...paragraph_2, fontWeight: 600, textAlign: "center" }}>{c}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ paddingY: 4 }} />
      </Box>
    </Box>
  );
};
export default platform;
