import { Box, Paper, Typography } from "@mui/material";
import type { IconType } from "react-icons";
import { paragraph_2, paragraph_3 } from "./Style";
type Card_v8_Props = {
  item: { title: string; subtitle: string; icon: IconType };
  color: { start: string; end: string };
};

const Card_v8: React.FC<Card_v8_Props> = ({ item, color }) => {
  return (
    <Paper sx={{ padding: 2, height: 1, backgroundColor: "transparent" }} elevation={0}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box>
          <Box
            sx={{
              padding: 1,
              borderRadius: 3,
              backgroundImage: `linear-gradient(150deg, ${color.start}, ${color.end})`,
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
