import { Box, Typography } from "@mui/material";
import { hexToRgba } from "./Colors";
import { pageParagraph, pageTitle, paragraph_3 } from "./Style";

type Heading_v4_props = {
  content: {
    title: string[];
    subtitle: string;
    tag: string;
  };
  color: {
    start: string;
    end: string;
    tag: string;
    tagBackground: string;
  };
};
const Heading_v4: React.FC<Heading_v4_props> = ({ content, color }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            backgroundColor: hexToRgba(color.tagBackground, 0.2),
            paddingX: 2,
            height: 24,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
          }}>
          <Typography sx={{ ...paragraph_3, color: color.tag }}>{content.tag}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {content.title.map((t, i) => (
          <Box key={i}>
            <Typography
              sx={{
                ...pageTitle,
                fontWeight: 600,
                ...(i % 2 === 0
                  ? {
                      color: "black",
                    }
                  : {
                      backgroundImage: `linear-gradient(90deg, ${color.start}, ${color.end})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }),
                textWrap: "wrap",
              }}>
              {t}&nbsp;
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ maxWidth: 1000 }}>
          <Typography sx={{ ...pageParagraph, textAlign: "center", color: "gray" }}>{content.subtitle}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Heading_v4;
