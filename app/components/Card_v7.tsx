import { Box, Button, Paper, Typography } from "@mui/material";
import { FiAward } from "react-icons/fi";
import { hexToRgba, templateColors } from "./Colors";
import { paragraph_2, paragraph_3, title_2 } from "./Style";
import { FaLeaf } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import Button_v1 from "./Button_v1";
import Button_v2 from "./Button_v2";
type Card_v7_Props = { item: { title: string; subtitle: string; tag: string; items: string[] } };

const Card_v7: React.FC<Card_v7_Props> = ({ item }) => {
  return (
    <Paper sx={{ border: 1, borderColor: "lightgray", borderRadius: 4, padding: 3, height: 1 }} elevation={0}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: 24,
            paddingX: 2,
            borderRadius: 12,
            backgroundColor: hexToRgba(templateColors[0], 0.2),
          }}>
          <Typography sx={{ ...paragraph_3, color: templateColors[1] }}> {item.tag}</Typography>
        </Box>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Typography sx={{ ...title_2, fontWeight: 600 }}>{item.title}</Typography>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Typography sx={{ ...paragraph_2, color: "gray" }}>{item.subtitle}</Typography>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        {item.items.map((i, index) => (
          <Box key={index} sx={{ display: "flex", gap: 1, alignItems: "center", paddingY: 0.5 }}>
            <Box>
              <FaArrowTrendUp color={templateColors[1]} size={20} />
            </Box>
            <Box>
              <Typography sx={{ ...paragraph_3, fontWeight: 600 }}>{i}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Button_v2 text="View Full Case Study" />
      </Box>
    </Paper>
  );
};
export default Card_v7;
