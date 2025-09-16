import { Box, Typography } from "@mui/material";
import { pageParagraph, pageTitle } from "./Style";

type Heading_v3_props = {
  content: {
    title: string[];
    subtitle: string;
  };
  color: {
    startColor: string;
    endColor: string;
  };
};
const Heading_v3: React.FC<Heading_v3_props> = ({ content, color }) => {
  return (
    <Box>
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
                      backgroundImage: `linear-gradient(90deg, ${color.startColor}, ${color.endColor})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }),
              }}>
              {t}&nbsp;
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ paddingY: 1 }} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ maxWidth: 1000 }}>
          <Typography sx={{ ...pageParagraph, textAlign: "center", color: "gray" }}>{content.subtitle}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Heading_v3;
