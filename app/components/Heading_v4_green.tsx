import { templateColors } from "./Colors";
import Heading_v4 from "./Heading_v4";

type Heading_v4_green_props = { content: { title: string[]; subtitle: string; tag: string } };
const color = {
  start: templateColors[0],
  end: templateColors[1],
  tag: templateColors[1],
  tagBackground: templateColors[0],
};
const Heading_v4_green: React.FC<Heading_v4_green_props> = ({ content }) => (
  <Heading_v4 content={content} color={color} />
);
export default Heading_v4_green;
