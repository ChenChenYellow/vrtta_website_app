import { Box, Button, Paper, Typography } from "@mui/material";
import { FiAward } from "react-icons/fi";
import { hexToRgba, templateColors } from "./Colors";
import { paragraph_2, paragraph_3, title_2 } from "./Style";
import { FaLeaf } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import type { IconType } from "react-icons";
import Card_v8 from "./Card_v8";
type Card_v8_green_Props = { item: { title: string; subtitle: string; icon: IconType } };
const color = { start: templateColors[0], end: templateColors[1] };
const Card_v8_green: React.FC<Card_v8_green_Props> = ({ item }) => {
  return <Card_v8 item={item} color={color} />;
};
export default Card_v8_green;
