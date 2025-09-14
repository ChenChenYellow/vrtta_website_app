import { Box, Button, Typography } from "@mui/material";
import { FiArrowRight } from "react-icons/fi";
import { paragraph_3 } from "./Style";
import { templateColors } from "./Colors";
import Button_v5 from "./Button_v5";

type Button_v5_blue_Props = { text: string };

const Button_v5_blue: React.FC<Button_v5_blue_Props> = ({ text }) => {
  return <Button_v5 text={text} startColor={templateColors[2]} endColor={templateColors[3]} />;
};
export default Button_v5_blue;
