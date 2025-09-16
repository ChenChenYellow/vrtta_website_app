import { Box, Paper, Typography } from "@mui/material";
import { FiAward } from "react-icons/fi";
import { templateColors } from "./Colors";
import { paragraph_2 } from "./Style";
type Card_v6_Props = { item: { title: string } };

const Card_v6: React.FC<Card_v6_Props> = ({ item }) => {
  return (
    <Paper sx={{ border: 1, borderColor: "lightgray", borderRadius: 4, padding: 3, height: 1, width: 1 }} elevation={0}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <FiAward size={24} color={templateColors[1]} />
        </Box>
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box>
        <Typography sx={{ ...paragraph_2, textWrap: "wrap", fontWeight: 600, textAlign: "center" }}>
          {item.title}
        </Typography>
      </Box>
    </Paper>
  );
};
export default Card_v6;
