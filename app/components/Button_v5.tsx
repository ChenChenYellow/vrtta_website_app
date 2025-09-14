import { Box, Button, Typography } from "@mui/material";
import { FiArrowRight } from "react-icons/fi";
import { paragraph_3 } from "./Style";

type Button_v5_Props = { text: string; startColor: string; endColor: string };

const Button_v5: React.FC<Button_v5_Props> = (p) => {
  return (
    <Button
      sx={{
        textTransform: "none",
        color: "white",
        backgroundImage: `linear-gradient(90deg, ${p.startColor}, ${p.endColor})`,
        borderRadius: 3,
      }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          paddingX: 3,
          paddingY: 0.5,
        }}>
        <Box>
          <Typography sx={{ ...paragraph_3 }}>{p.text}</Typography>
        </Box>
        <Box>
          <FiArrowRight size={16} />
        </Box>
      </Box>
    </Button>
  );
};
export default Button_v5;
