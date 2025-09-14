import { Box, Typography } from "@mui/material";
import { paragraph_1, title_1 } from "./Style";

type Heading_v1_props = { content: { title: string; subtitle: string }; color: { title: string; subtitle: string } };
const Heading_v1: React.FC<Heading_v1_props> = ({ content, color }) => {
  return (
    <Box>
      <Box sx={{ paddingY: 4 }} />
      <Box>
        <Typography sx={{ ...title_1, fontWeight: 600, textAlign: "center", color: color.title }}>
          {content.title}
        </Typography>
      </Box>
      <Box sx={{ paddingY: 0.5 }} />
      <Box>
        <Typography sx={{ ...paragraph_1, color: color.subtitle, textAlign: "center" }}>{content.subtitle}</Typography>
      </Box>
    </Box>
  );
};
export default Heading_v1;
