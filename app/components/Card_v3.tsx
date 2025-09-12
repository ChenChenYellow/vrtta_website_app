import { Box, Button, Paper, Typography } from "@mui/material";
import { LuCircleCheckBig } from "react-icons/lu";
import { hexToRgba, primaryColors, templateColors } from "./Colors";
import type { IconType } from "react-icons";
import { paragraph_1, paragraph_2, paragraph_3, title_1, title_2 } from "./Style";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
type Card_v3_Props = { item: { title: string; subtitle: string; icon: IconType; items: string[]; buttonText: string } };

const Card_v3: React.FC<Card_v3_Props> = ({ item }) => {
  return (
    <Paper sx={{ border: 1, borderColor: "lightgray", borderRadius: 4, padding: 3, height: 1 }} elevation={0}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            padding: 2,
            borderRadius: 3,
            backgroundImage: `linear-gradient(150deg, ${templateColors[0]}, ${templateColors[1]})`,
          }}>
          <item.icon size={28} color="white" />
        </Box>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Typography sx={{ ...title_1, textWrap: "wrap", fontWeight: 600 }}>{item.title}</Typography>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Typography sx={{ ...paragraph_1, color: "grey" }}>{item.subtitle}</Typography>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Typography sx={{ ...paragraph_1, fontWeight: 600 }}>Key Features:</Typography>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {item.items.map((i, index) => (
          <Box key={index} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ backgroundColor: hexToRgba(templateColors[0], 0.15), borderRadius: "50%" }}>
              <GoDotFill color={templateColors[0]} />
            </Box>
            <Box>
              <Typography sx={{ ...paragraph_2, color: "gray" }}>{i}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ paddingY: 2 }} />
      <Box>
        <Button
          sx={{
            display: "flex",
            gap: 2,
            width: 1,
            paddingY: 1.5,
            borderRadius: 2,
            textTransform: "none",
            color: "white",
            backgroundImage: `linear-gradient(90deg, ${templateColors[0]}, ${templateColors[1]})`,
          }}>
          <Box>
            <Typography sx={{ ...paragraph_3 }}>{item.buttonText}</Typography>
          </Box>
          <Box>
            <FiArrowRight />
          </Box>
        </Button>
      </Box>
    </Paper>
  );
};
export default Card_v3;
