import { templateColors } from "./Colors";
import Heading_v3 from "./Heading_v3";

type Heading_v3_green_props = { title: string[]; subtitle: string };
const color = { startColor: templateColors[0], endColor: templateColors[1] };
const Heading_v3_green: React.FC<Heading_v3_green_props> = (content) => {
  return <Heading_v3 content={content} color={color} />;
};
export default Heading_v3_green;
