import Card_v10 from "./Card_v10";
import { templateColors } from "./Colors";
type Card_v10_green_Props = { item: { title: string; subtitle: string; stats: string } };
const color = { start: templateColors[1], end: templateColors[0] };
const Card_v10_green: React.FC<Card_v10_green_Props> = ({ item }) => {
  return <Card_v10 item={item} color={color} />;
};
export default Card_v10_green;
