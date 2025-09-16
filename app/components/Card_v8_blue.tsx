import type { IconType } from "react-icons";
import Card_v8 from "./Card_v8";
import { templateColors } from "./Colors";
type Card_v8_blue_Props = { item: { title: string; subtitle: string; icon: IconType } };
const color = { start: templateColors[3], end: templateColors[2] };
const Card_v8_blue: React.FC<Card_v8_blue_Props> = ({ item }) => {
  return <Card_v8 item={item} color={color} />;
};
export default Card_v8_blue;
