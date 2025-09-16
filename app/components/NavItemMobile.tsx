import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { hexToRgba } from "./Colors";
import type { NavItem } from "./NavItem";
type NavItem_Props = {
  item: NavItem;
  color: { primary: string; secondary: string };
};

const NavItemMobile: React.FC<NavItem_Props> = ({ item, color }) => {
  const [progress, setProgress] = useState(0);
  const anchorRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setProgress(0);
  }, [item]);
  return (
    <Box
      onMouseEnter={() => {
        setProgress(100);
      }}
      onMouseLeave={() => {
        setProgress(0);
      }}
      sx={{}}>
      <Button
        ref={anchorRef}
        component={Link}
        to={"href" in item ? item.href : location.pathname}
        sx={{
          mx: 0,
          paddingX: 1.5,
          color: "#424242",
          "&:hover": {
            color: "secondary.contrastText",
            backgroundColor: hexToRgba(color.secondary, 0.2),
          },
          borderRadius: 0,
          width: 1,
          textTransform: "none",
          justifyContent: "left",
        }}>
        <Typography sx={{ ml: 0.4, fontSize: "0.85rem" }}>{item.title}</Typography>
      </Button>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          backgroundColor: "transparent",
          "& .MuiLinearProgress-bar1": {
            backgroundColor: color.primary,
            transition: "opacity 0.1s, transform 0.3s linear",
            opacity: progress <= 0 ? 0 : 1,
          },
        }}
      />
      {"items" in item && (
        <Box sx={{}}>
          {item.items.map((subItem, idx) => (
            <Box key={idx} sx={{ marginLeft: 1 }}>
              <NavItemMobile item={subItem} color={color} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
export default NavItemMobile;
