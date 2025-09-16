import { Box, Grid } from "@mui/material";
import { LuChartColumn, LuShield } from "react-icons/lu";
import { RiGlobalLine } from "react-icons/ri";
import { RxLightningBolt } from "react-icons/rx";
import Card_v5_blue from "~/components/Card_v5_blue";
import { backgroundColors } from "~/components/Colors";
import Heading_v1_black from "~/components/Heading_v1_black";
import Heading_v4_blue from "~/components/Heading_v4_blue";

const cards = [
  {
    title: "Feature_1",
    subtitle: "Subtitle of Feature_1",
    icon: LuChartColumn,
    items: ["Sub_Feature_1", "Sub_Feature_2", "Sub_Feature_3"],
  },
  {
    title: "Feature_2",
    subtitle: "Subtitle of Feature_2",
    icon: LuShield,
    items: ["Sub_Feature_1", "Sub_Feature_2", "Sub_Feature_3"],
  },
  {
    title: "Feature_3",
    subtitle: "Subtitle of Feature_3",
    icon: RxLightningBolt,
    items: ["Sub_Feature_1", "Sub_Feature_2", "Sub_Feature_3"],
  },
  {
    title: "Feature_4",
    subtitle: "Subtitle of Feature_4",
    icon: RiGlobalLine,
    items: ["Sub_Feature_1", "Sub_Feature_2", "Sub_Feature_3"],
  },
];
const organization = () => {
  return (
    <Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Box sx={{ paddingY: 4 }} />
        <Heading_v4_blue
          content={{
            title: ["The", "Organization"],
            subtitle: "This is the description for organization",
            tag: "Platform FLoS",
          }}
        />
        <Box sx={{ paddingY: 4 }} />
      </Box>
      <Box sx={{ backgroundImage: `linear-gradient(180deg, white, ${backgroundColors[0]})`, paddingX: 2 }}>
        <Box sx={{ paddingY: 2 }} />
        <Heading_v1_black title="The Features of organization" subtitle="This is the features of organization" />
        <Box sx={{ paddingY: 4 }} />
        <Box sx={{ paddingX: 2 }}>
          <Grid container spacing={2}>
            {cards.map((c, i) => (
              <Grid key={i} size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 3 }}>
                <Card_v5_blue item={c} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ paddingY: 4 }} />
      </Box>
    </Box>
  );
};
export default organization;
