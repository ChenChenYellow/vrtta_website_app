import { Box, Button, Paper, Typography } from "@mui/material";
import { LuCircleCheckBig } from "react-icons/lu";
import { hexToRgba, primaryColors, templateColors } from "./Colors";
import type { IconType } from "react-icons";
import { paragraph_1, paragraph_2, paragraph_3, title_1, title_2 } from "./Style";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
type Card_v9_Props = { item: { title: string; subtitle: string; stats: string } };

const Card_v9: React.FC<Card_v9_Props> = ({ item }) => {
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography sx={{ ...title_1, fontWeight: 600, color: templateColors[2] }}>{item.stats}</Typography>
        </Box>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Typography sx={{ ...title_2, fontWeight: 600, textAlign: "center" }}>{item.title}</Typography>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Typography sx={{ ...paragraph_2, color: "grey", textWrap: "wrap", textAlign: "center" }}>
          {item.subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
export default Card_v9;
