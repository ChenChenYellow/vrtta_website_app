import { Box, Paper, Typography } from "@mui/material";
import type { IconType } from "react-icons";
import { FiArrowRight } from "react-icons/fi";
import { templateColors } from "./Colors";
import { paragraph_2, paragraph_3, title_2 } from "./Style";
type Card_v2_Props = { title: string; subtitle: string; icon: IconType };

const Card_v2: React.FC<Card_v2_Props> = ({ title, subtitle, icon: Icon }) => {
  return (
    <Paper sx={{ border: 1, borderColor: "lightgray", borderRadius: 4, padding: 3, height: 1 }} elevation={0}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            padding: 1.5,
            borderRadius: 3,
            backgroundImage: `linear-gradient(150deg, ${templateColors[0]}, ${templateColors[1]})`,
          }}>
          <Icon size={24} color="white" />
        </Box>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Typography sx={{ ...title_2 }}>{title}</Typography>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Typography sx={{ ...paragraph_2, color: "grey" }}>{subtitle}</Typography>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: templateColors[0] }}>
        <Box>
          <Typography sx={{ ...paragraph_3 }}>Explore</Typography>
        </Box>
        <Box>
          <FiArrowRight size={16} />
        </Box>
      </Box>
    </Paper>
  );
};
export default Card_v2;
