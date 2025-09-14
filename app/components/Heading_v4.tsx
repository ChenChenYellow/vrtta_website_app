import { Box, Typography } from "@mui/material";
import { pageParagraph, pageTitle, paragraph_1, paragraph_3, title_1 } from "./Style";
import { hexToRgba, primaryColors, templateColors } from "./Colors";

type Heading_v4_props = {
  title: string[];
  subtitle: string;
  tag: string;
  startColor: string;
  endColor: string;
  tagColor: string;
  tagBackgroundColor: string;
};
const Heading_v4: React.FC<Heading_v4_props> = (p) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            backgroundColor: hexToRgba(p.tagBackgroundColor, 0.2),
            paddingX: 2,
            height: 24,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
          }}>
          <Typography sx={{ ...paragraph_3, color: p.tagColor }}>{p.tag}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        {p.title.map((t, i) => (
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
                      backgroundImage: `linear-gradient(90deg, ${p.startColor}, ${p.endColor})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }),
              }}>
              {t}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ maxWidth: 1000 }}>
          <Typography sx={{ ...pageParagraph, textAlign: "center", color: "gray" }}>{p.subtitle}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Heading_v4;
