import { Box, Paper, Typography } from "@mui/material";
import type { IconType } from "react-icons";
import { GoDotFill } from "react-icons/go";
import Button_v5 from "./Button_v5";
import { hexToRgba } from "./Colors";
import { paragraph_1, paragraph_2, title_1 } from "./Style";
type Card_v3_Props = {
  item: { title: string; subtitle: string; icon: IconType; items: string[]; buttonText: string };
  color: { start: string; end: string; dot: string };
};

const Card_v3: React.FC<Card_v3_Props> = ({ item, color }) => {
  return (
    <Paper sx={{ border: 1, borderColor: "lightgray", borderRadius: 4, padding: 3, height: 1 }} elevation={0}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            padding: 2,
            borderRadius: 3,
            backgroundImage: `linear-gradient(90deg, ${color.start}, ${color.end})`,
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
            <Box sx={{ backgroundColor: hexToRgba(color.dot, 0.15), borderRadius: "50%" }}>
              <GoDotFill color={color.dot} />
            </Box>
            <Box>
              <Typography sx={{ ...paragraph_2, color: "gray" }}>{i}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ paddingY: 2 }} />
      <Box>
        <Button_v5 text={item.buttonText} startColor={color.start} endColor={color.end} />
      </Box>
    </Paper>
  );
};
export default Card_v3;
