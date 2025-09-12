import { Box, Paper, Typography } from "@mui/material";
import { LuCircleCheckBig } from "react-icons/lu";
import { primaryColors } from "./Colors";

type Card_v1_Props = { title: string; subtitle: string; items: string[] };

const Card_v1: React.FC<Card_v1_Props> = ({ title, subtitle, items }) => {
  return (
    <Box>
      <Paper sx={{ border: 1, borderColor: "lightgray", borderRadius: 4, padding: 4 }}>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ paddingY: 1 }} />
        <Box>
          <Typography variant="subtitle2" sx={{ color: "grey" }}>
            {subtitle}
          </Typography>
        </Box>
        <Box sx={{ paddingY: 1 }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          {items.map((item, index) => (
            <Box key={index} sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Box>
                <LuCircleCheckBig color={primaryColors[1]} />
              </Box>
              <Box>
                <Typography variant="body1">{item}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};
export default Card_v1;
