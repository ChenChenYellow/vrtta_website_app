import { Box, Typography } from "@mui/material";
import { templateColors } from "./Colors";
import { paragraph_2, title_1, title_2 } from "./Style";
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
