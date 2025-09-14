import { LuChartColumn } from "react-icons/lu";
import Card_v7 from "./Card_v7";
import { templateColors } from "./Colors";
type Card_v7_blue_Props = { item: { title: string; subtitle: string; tag: string; items: string[] } };
const color = { tag: templateColors[2], tagBackground: templateColors[3], icon: templateColors[2] };
const Card_v7_blue: React.FC<Card_v7_blue_Props> = ({ item }) => {
  return <Card_v7 item={item} color={color} icon={LuChartColumn} />;
};
export default Card_v7_blue;
