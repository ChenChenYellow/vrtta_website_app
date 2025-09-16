import { Box, Paper, Typography } from "@mui/material";
import type { IconType } from "react-icons";
import { LuCircleCheckBig } from "react-icons/lu";
import { paragraph_2, paragraph_3, title_2 } from "./Style";
type Card_v5_Props = {
  item: { title: string; subtitle: string; icon: IconType; items: string[] };
  startColor: string;
  endColor: string;
  tagColor: string;
};

const Card_v5: React.FC<Card_v5_Props> = ({ item, startColor, endColor, tagColor }) => {
  return (
    <Paper sx={{ border: 1, borderColor: "lightgray", borderRadius: 4, padding: 3, height: 1 }} elevation={0}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            padding: 1.5,
            borderRadius: 3,
            backgroundImage: `linear-gradient(150deg, ${startColor}, ${endColor})`,
          }}>
          <item.icon size={24} color="white" />
        </Box>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Typography sx={{ ...title_2, textWrap: "wrap", fontWeight: 600 }}>{item.title}</Typography>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Typography sx={{ ...paragraph_2, color: "grey" }}>{item.subtitle}</Typography>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {item.items.map((i, index) => (
          <Box key={index} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box>
              <LuCircleCheckBig color={tagColor} />
            </Box>
            <Box>
              <Typography sx={{ ...paragraph_3, color: "gray" }}>{i}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};
export default Card_v5;
