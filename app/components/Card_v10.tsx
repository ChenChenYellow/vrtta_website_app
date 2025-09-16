import { Box, Typography } from "@mui/material";
import { paragraph_2, title_1, title_2 } from "./Style";
type Card_v10_Props = {
  item: { title: string; subtitle: string; stats: string };
  color: { start: string; end: string };
};

const Card_v10: React.FC<Card_v10_Props> = ({ item, color }) => {
  return (
    <Box sx={{ maxWidth: 400, border: 1, borderColor: "lightgrey", borderRadius: 4, padding: 4, height: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography
            sx={{
              ...title_1,
              fontWeight: 600,
              backgroundImage: `linear-gradient(90deg, ${color.start}, ${color.end})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            {item.stats}
          </Typography>
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
export default Card_v10;
