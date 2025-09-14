import { Box, Button, Typography } from "@mui/material";
import { FiArrowRight } from "react-icons/fi";
import { paragraph_3 } from "./Style";

type Button_v2_Props = { text: string };

const Button_v2: React.FC<Button_v2_Props> = ({ text }) => {
  return (
    <Button
      sx={{
        textTransform: "none",
        color: "black",
        backgroundColor: "white",
        border: 1,
        borderColor: "lightgray",
        borderRadius: 2,
        width: 1,
      }}>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
        <Box>
          <Typography sx={{ ...paragraph_3 }}>{text}</Typography>
        </Box>
        <Box>
          <FiArrowRight size={16} />
        </Box>
      </Box>
    </Button>
  );
};
export default Button_v2;
