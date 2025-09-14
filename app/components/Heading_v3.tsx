import { Box, Typography } from "@mui/material";
import { pageParagraph, pageTitle, paragraph_1, paragraph_3, title_1 } from "./Style";
import { hexToRgba, primaryColors, templateColors } from "./Colors";
import Heading_v4 from "./Heading_v4";

type Heading_v3_props = { title: string[]; subtitle: string; tag: string };
const Heading_v3: React.FC<Heading_v3_props> = (p) => {
  return (
    <Heading_v4
      title={p.title}
      subtitle={p.subtitle}
      tag={p.tag}
      startColor={templateColors[0]}
      endColor={templateColors[1]}
      tagBackgroundColor={templateColors[1]}
      tagColor={primaryColors[0]}
    />
  );
};
export default Heading_v3;
