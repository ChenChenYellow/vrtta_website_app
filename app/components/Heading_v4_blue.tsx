import { Box, Typography } from "@mui/material";
import { pageParagraph, pageTitle, paragraph_1, paragraph_3, title_1 } from "./Style";
import { hexToRgba, primaryColors, templateColors } from "./Colors";
import Heading_v4 from "./Heading_v4";

type Heading_v4_blue_props = { title: string[]; subtitle: string; tag: string };
const Heading_v4_blue: React.FC<Heading_v4_blue_props> = (p) => {
  return (
    <Heading_v4
      title={p.title}
      subtitle={p.subtitle}
      tag={p.tag}
      startColor={templateColors[2]}
      endColor={templateColors[3]}
      tagBackgroundColor={templateColors[3]}
      tagColor={templateColors[2]}
    />
  );
};
export default Heading_v4_blue;
