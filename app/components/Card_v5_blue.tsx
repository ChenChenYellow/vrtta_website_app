import type { IconType } from "react-icons";
import Card_v5 from "./Card_v5";
import { templateColors } from "./Colors";
type Card_v5_blue_Props = { item: { title: string; subtitle: string; icon: IconType; items: string[] } };

const Card_v5_blue: React.FC<Card_v5_blue_Props> = ({ item }) => {
  return (
    <Card_v5 item={item} startColor={templateColors[2]} endColor={templateColors[3]} tagColor={templateColors[2]} />
  );
};
export default Card_v5_blue;
