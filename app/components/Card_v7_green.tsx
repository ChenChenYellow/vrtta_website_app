import { FaArrowTrendUp } from "react-icons/fa6";
import Card_v7 from "./Card_v7";
import { templateColors } from "./Colors";
type Card_v7_green_Props = { item: { title: string; subtitle: string; tag: string; items: string[] } };
const color = { tag: templateColors[1], tagBackground: templateColors[0], icon: templateColors[1] };
const Card_v7_green: React.FC<Card_v7_green_Props> = ({ item }) => {
  return <Card_v7 item={item} color={color} icon={FaArrowTrendUp} />;
};
export default Card_v7_green;
