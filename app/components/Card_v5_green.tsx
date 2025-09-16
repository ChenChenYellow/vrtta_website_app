import type { IconType } from "react-icons";
import Card_v5 from "./Card_v5";
import { templateColors } from "./Colors";
type Card_v5_green_Props = { item: { title: string; subtitle: string; icon: IconType; items: string[] } };

const Card_v5_green: React.FC<Card_v5_green_Props> = ({ item }) => {
  return (
    <Card_v5 item={item} startColor={templateColors[0]} endColor={templateColors[1]} tagColor={templateColors[0]} />
  );
};
export default Card_v5_green;
