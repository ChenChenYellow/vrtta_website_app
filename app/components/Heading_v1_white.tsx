import Heading_v1 from "./Heading_v1";

type Heading_v1_white_props = { title: string; subtitle: string };
const color = { title: "white", subtitle: "white" };
const Heading_v1_white: React.FC<Heading_v1_white_props> = ({ title, subtitle }) => {
  return <Heading_v1 content={{ title, subtitle }} color={color} />;
};
export default Heading_v1_white;
