import { Box, Button, Paper, Typography } from "@mui/material";
import { LuCircleCheckBig } from "react-icons/lu";
import { hexToRgba, primaryColors, templateColors } from "./Colors";
import type { IconType } from "react-icons";
import { paragraph_1, paragraph_2, paragraph_3, title_1, title_2 } from "./Style";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
type Card_v4_Props = { item: { title: string; subtitle: string }; index: number };

const Card_v4: React.FC<Card_v4_Props> = ({ item, index }) => {
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            backgroundImage: `linear-gradient(150deg, ${templateColors[0]}, ${templateColors[1]})`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography sx={{ ...title_1, fontWeight: 600, color: "white" }}>{index + 1}</Typography>
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
export default Card_v4;
