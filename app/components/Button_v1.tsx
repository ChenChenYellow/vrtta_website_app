import { Box, Button, Typography } from "@mui/material";
import { FiArrowRight } from "react-icons/fi";
import { paragraph_3 } from "./Style";

type Button_v1_Props = { text: string };

const Button_v1: React.FC<Button_v1_Props> = ({ text }) => {
  return (
    <Button
      sx={{
        textTransform: "none",
        color: "black",
        backgroundColor: "white",
        border: 1,
        borderColor: "lightgray",
        borderRadius: 3,
        width: 1,
        paddingY: 1.5,
      }}>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
        <Box>
          <Typography sx={{ ...paragraph_3, fontWeight: 600 }}>{text}</Typography>
        </Box>
        <Box>
          <FiArrowRight size={16} />
        </Box>
      </Box>
    </Button>
  );
};
export default Button_v1;
