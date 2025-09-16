import { templateColors } from "./Colors";
import Heading_v4 from "./Heading_v4";

type Heading_v4_blue_props = { content: { title: string[]; subtitle: string; tag: string } };
const color = {
  start: templateColors[2],
  end: templateColors[3],
  tag: templateColors[3],
  tagBackground: templateColors[2],
};
const Heading_v4_blue: React.FC<Heading_v4_blue_props> = ({ content }) => (
  <Heading_v4 content={content} color={color} />
);

export default Heading_v4_blue;
