import { Box, Button, Paper, Typography } from "@mui/material";
import { LuCircleCheckBig } from "react-icons/lu";
import { hexToRgba, primaryColors, templateColors } from "./Colors";
import type { IconType } from "react-icons";
import { paragraph_1, paragraph_2, paragraph_3, title_1, title_2 } from "./Style";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import Card_v5 from "./Card_v5";
type Card_v5_green_Props = { item: { title: string; subtitle: string; icon: IconType; items: string[] } };

const Card_v5_green: React.FC<Card_v5_green_Props> = ({ item }) => {
  return (
    <Card_v5 item={item} startColor={templateColors[0]} endColor={templateColors[1]} tagColor={templateColors[0]} />
  );
};
export default Card_v5_green;
