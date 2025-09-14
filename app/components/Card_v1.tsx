import { Box, Paper, Typography } from "@mui/material";
import { LuCircleCheckBig } from "react-icons/lu";
import { primaryColors, templateColors } from "./Colors";
import { paragraph_2, paragraph_3, title_1, title_2 } from "./Style";

type Card_v1_Props = { title: string; subtitle: string; items: string[] };

const Card_v1: React.FC<Card_v1_Props> = ({ title, subtitle, items }) => {
  return (
    <Paper sx={{ border: 1, borderColor: "lightgray", borderRadius: 4, padding: 4 }} elevation={0}>
      <Box>
        <Typography sx={{ ...title_2, fontWeight: "600" }}>{title}</Typography>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Typography sx={{ ...paragraph_2, color: "grey" }}>{subtitle}</Typography>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {items.map((item, index) => (
          <Box key={index} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box>
              <LuCircleCheckBig color={templateColors[1]} size={20} />
            </Box>
            <Box>
              <Typography sx={{ ...paragraph_3 }}>{item}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};
export default Card_v1;
