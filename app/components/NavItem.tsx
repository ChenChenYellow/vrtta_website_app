import { Box, Button, LinearProgress, Paper, Popper, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { hexToRgba } from "./Colors";
import NavItemMobile from "./NavItemMobile";
type NavItemBase = {
  title: string;
  href: string;
};

type NavItemWithChildren = {
  title: string;
  href: string;
  items: NavItemBase[];
};

export type NavItem = NavItemBase | NavItemWithChildren;
type NavItem_Props = {
  item: NavItem;
  color: { primary: string; secondary: string };
};

const NavItem: React.FC<NavItem_Props> = ({ item, color }) => {
  const [progress, setProgress] = useState(0);
  const [popperVisible, setPopperVisible] = useState(false);
  const anchorRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setProgress(0);
  }, [item]);
  return (
    <Box
      onMouseEnter={() => {
        setProgress(100);
        setPopperVisible(true);
      }}
      onMouseLeave={() => {
        setPopperVisible(false);
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
        }}>
        <Typography sx={{ textTransform: "none", ml: 0.4, fontSize: "0.85rem" }}>{item.title}</Typography>
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
      <Popper open={popperVisible} anchorEl={anchorRef.current} placement="bottom-start" disablePortal>
        {"items" in item && (
          <Paper
            sx={{
              mt: 1,
              minWidth: 160,
              borderRadius: 1,
            }}>
            <Box sx={{ paddingY: 1 }}>
              {item.items.map((subItem, idx) => (
                <Box key={idx}>
                  <NavItemMobile item={subItem} color={color} />
                </Box>
              ))}
            </Box>
          </Paper>
        )}
      </Popper>
    </Box>
  );
};
export default NavItem;
