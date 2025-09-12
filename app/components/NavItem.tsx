import { Box, Button, LinearProgress, MenuItem, MenuList, Paper, Popper, Typography } from "@mui/material";
import { useRef, useState } from "react";
import type { IconType } from "react-icons";
import { Link, useAsyncError, useLocation } from "react-router-dom";
type NavItemBase = {
  title: string;
  href: string;
};

type NavItemWithChildren = {
  title: string;
  items: NavItemBase[];
};

type NavItem = NavItemBase | NavItemWithChildren;
type NavItem_Props = {
  item: NavItem;
};

const NavItem: React.FC<NavItem_Props> = ({ item }) => {
  const [progress, setProgress] = useState(0);
  const [popperVisible, setPopperVisible] = useState(false);
  const anchorRef = useRef(null);
  const location = useLocation();
  return (
    <Box
      onMouseEnter={() => {
        setProgress(100);
        setPopperVisible(true);
      }}
      onMouseLeave={() => {
        setPopperVisible(false);
        setProgress(0);
      }}>
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
            backgroundColor: "primary.light",
          },
          borderRadius: 0,
        }}>
        <Typography sx={{ textTransform: "none", ml: 0.4, fontFamily: "Segoe UI", fontSize: "0.85rem" }}>
          {item.title}
        </Typography>
      </Button>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          backgroundColor: "white",
          color: "primary.dark",
          "& .MuiLinearProgress-bar1": {
            transitionDuration: "0.2s",
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
              boxShadow: 3,
            }}>
            <MenuList>
              {item.items.map((subItem, idx) => (
                <MenuItem
                  key={idx}
                  component={Link}
                  to={subItem.href}
                  sx={{
                    fontSize: "0.85rem",
                    fontFamily: "Segoe UI",
                    "&:hover": {
                      backgroundColor: "primary.light",
                      color: "secondary.contrastText",
                    },
                  }}>
                  {subItem.title}
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        )}
      </Popper>
    </Box>
  );
};
export default NavItem;
