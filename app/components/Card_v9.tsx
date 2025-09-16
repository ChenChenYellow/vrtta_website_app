import { Box, Typography } from "@mui/material";
import { templateColors } from "./Colors";
import { paragraph_2, title_1, title_2 } from "./Style";
type Card_v9_Props = { item: { title: string; subtitle: string; stats: string } };

const Card_v9: React.FC<Card_v9_Props> = ({ item }) => {
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography
            sx={{
              ...title_1,
              fontWeight: 600,
              backgroundImage: `linear-gradient(90deg, ${templateColors[2]}, ${templateColors[3]})`,
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
export default Card_v9;
