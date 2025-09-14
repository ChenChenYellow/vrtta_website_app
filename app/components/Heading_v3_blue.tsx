import { templateColors } from "./Colors";
import Heading_v3 from "./Heading_v3";

type Heading_v3_blue_props = { title: string[]; subtitle: string };
const color = { startColor: templateColors[2], endColor: templateColors[3] };
const Heading_v3_blue: React.FC<Heading_v3_blue_props> = (content) => {
  return <Heading_v3 content={content} color={color} />;
};
export default Heading_v3_blue;
