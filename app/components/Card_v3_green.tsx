import type { IconType } from "react-icons";
import Card_v3 from "./Card_v3";
import { templateColors } from "./Colors";
type Card_v3_green_Props = {
  item: { title: string; subtitle: string; icon: IconType; items: string[]; buttonText: string };
};
const color = { start: templateColors[0], end: templateColors[1], dot: templateColors[1] };
const Card_v3_green: React.FC<Card_v3_green_Props> = ({ item }) => {
  return <Card_v3 item={item} color={color} />;
};
export default Card_v3_green;
