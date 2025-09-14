import { Box, Button, Typography } from "@mui/material";
import { FiArrowRight } from "react-icons/fi";
import { paragraph_3 } from "./Style";
import { templateColors } from "./Colors";

type Button_v4_Props = { text: string };

const Button_v4: React.FC<Button_v4_Props> = ({ text }) => {
  return (
    <Button
      sx={{
        textTransform: "none",
        color: "black",
        backgroundColor: "white",
        border: 1,
        borderColor: "lightgrey",
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
          <Typography sx={{ ...paragraph_3 }}>{text}</Typography>
        </Box>
      </Box>
    </Button>
  );
};
export default Button_v4;
