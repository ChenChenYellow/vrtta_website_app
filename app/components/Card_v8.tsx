import { Box, Button, Paper, Typography } from "@mui/material";
import { FiAward } from "react-icons/fi";
import { hexToRgba, templateColors } from "./Colors";
import { paragraph_2, paragraph_3, title_2 } from "./Style";
import { FaLeaf } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import type { IconType } from "react-icons";
type Card_v8_Props = { item: { title: string; subtitle: string; icon: IconType } };

const Card_v8: React.FC<Card_v8_Props> = ({ item }) => {
  return (
    <Paper sx={{ padding: 2, height: 1 }} elevation={0}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box>
          <Box
            sx={{
              padding: 1,
              borderRadius: 3,
              backgroundImage: `linear-gradient(150deg, ${templateColors[0]}, ${templateColors[1]})`,
            }}>
            <item.icon size={20} color="white" />
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography sx={{ ...paragraph_2, fontWeight: 600 }}>{item.title}</Typography>
          </Box>
          <Box>
            <Typography sx={{ ...paragraph_3, color: "gray" }}>{item.subtitle}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
export default Card_v8;
