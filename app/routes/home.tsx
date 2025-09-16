import { Box, Grid, Typography } from "@mui/material";
import "mui-player/dist/mui-player.min.css";
import { FaUsers } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";
import Button_v5_green from "~/components/Button_v5_green";
import Card_v2 from "~/components/Card_v2";
import { backgroundColors, primaryColors, secondaryColors, templateColors } from "~/components/Colors";
import Heading_v1_black from "~/components/Heading_v1_black";
import Heading_v1_white from "~/components/Heading_v1_white";
import { pageParagraph, pageSubtitle, pageTitle } from "~/components/Style";
const cards_v2 = [
  { title: "Sector", subtitle: "Sector subtitle", icon: MdBusiness },
  {
    title: "Organization",
    subtitle: "Organization subtitle",
    icon: FaUsers,
  },
  { title: "Engagement", subtitle: "Engagement subtitle", icon: RiHandHeartLine },
];
export default function Home() {
  return (
    <Box>
      <Box sx={{ backgroundImage: `linear-gradient(145deg, white, ${secondaryColors[4]})`, paddingX: 2 }}>
        <Box sx={{ paddingY: 4 }}></Box>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <Typography sx={{ ...pageTitle, color: templateColors[1], fontWeight: 600 }}>Empowering </Typography>
          <Typography sx={{ ...pageTitle, color: primaryColors[0], fontWeight: 600 }}>&nbsp;Your&nbsp;</Typography>
        </Box>
        <Typography sx={{ ...pageTitle, color: templateColors[1], fontWeight: 600, textAlign: "center" }}>
          Sustainability Transformation
        </Typography>
        <Box sx={{ paddingY: 0.5 }} />
        <Typography sx={{ ...pageSubtitle, color: templateColors[1], fontWeight: 600, textAlign: "center" }}>
          Know, Act, Inspire
        </Typography>
        <Box sx={{ paddingY: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ ...pageParagraph, maxWidth: 800, color: "gray", textAlign: "center" }}>
            Drive environmental impact while boosting <b>Performance</b>, reduce <b>Costs</b>, align with{" "}
            <b>Compliance</b> and build <b>Brand reputation</b>. Propagate Sustainability value across supply-chains
            through sustainability metrics.
          </Typography>
        </Box>
        <Box sx={{ paddingY: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Button_v5_green text="Start your journey" />
          </Box>
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Box sx={{ paddingY: 2 }} />
        <Heading_v1_black
          title="Our Expertise"
          subtitle="Comprehensive sustainability solutions tailored to your industry needs"
        />
        <Box sx={{ paddingY: 4 }} />
        <Grid container spacing={2}>
          {cards_v2.map((c, i) => (
            <Grid key={i} size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
              <Card_v2 title={c.title} subtitle={c.subtitle} icon={c.icon} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ paddingY: 5 }} />
      </Box>
      <Box sx={{ backgroundImage: `linear-gradient(90deg, ${templateColors[0]}, ${templateColors[1]})`, paddingX: 2 }}>
        <Heading_v1_white
          title="Ready to Make a Difference?"
          subtitle="Join the sustainability revolution and transform your business for a greener tomorrow"
        />
        <Box sx={{ paddingY: 4 }} />
      </Box>
    </Box>
  );
}
