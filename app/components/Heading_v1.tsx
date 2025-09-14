import { Box, Typography } from "@mui/material";
import { paragraph_1, title_1 } from "./Style";

type Heading_v1_props = { title: string; subtitle: string };
const Heading_v1: React.FC<Heading_v1_props> = ({ title, subtitle }) => {
  return (
    <Box>
      <Box sx={{ paddingY: 4 }} />
      <Box>
        <Typography sx={{ ...title_1, fontWeight: 600, textAlign: "center" }}>{title}</Typography>
      </Box>
      <Box sx={{ paddingY: 0.5 }} />
      <Box>
        <Typography sx={{ ...paragraph_1, color: "gray", textAlign: "center" }}>{subtitle}</Typography>
      </Box>
    </Box>
  );
};
export default Heading_v1;
